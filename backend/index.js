import express from 'express';
import cors from 'cors';
import { errorHandler } from './utils/error-handler.js';
import { redirectToUrl } from './controller/url.controller.js';
import authRouter from './router/authRouter.js';
import urlRouter from './router/urlRouter.js';
import userRouter from './router/userRouter.js';
import dotenv from 'dotenv';
import client from 'prom-client';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const requestCounter = new client.Counter({
    name: "http_request_count",
    help: "Total number of requests",
    labelNames: ["method", "path", "status", "response_time", "ip", "endpoint"],
});

const histogram = new client.Histogram({
    name: "http_request_duration_milliseconds",
    help: "Duration of HTTP requests in milliseconds",
    labelNames: ["method", "path", "status"],
    buckets: [100, 500, 1000, 2000, 5000, 10000],
});

const gauge = new client.Gauge({
    name: "active_user",
    help: "Number of active user."
})

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    gauge.inc();
    const start = Date.now();

    const { method, path, ip } = req;
    const endpoint = req.originalUrl || req.url;

    res.on('finish', () => {
        const responseTime = Date.now() - start;
        const status = res.statusCode;

        requestCounter.inc({
            method,
            path,
            status,
            response_time: responseTime,
            ip,
            endpoint
        });
        gauge.dec();
        histogram.labels(method, path, status).observe(responseTime);  // Now using milliseconds directly
    });

    next();
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/create", urlRouter)

app.get('/metrics', async (req, res) => {
    const metrics = await client.register.metrics();
    res.set("Content-Type", client.register.contentType);
    res.send(metrics);
});

app.get("/:shortUrl", redirectToUrl);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});