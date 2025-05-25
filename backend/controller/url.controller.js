import { createShortUrlWithUser, createShortUrlWithoutUser } from "../services/url.service.js";
import { getShortUrl } from "../dao/short-url.js";
import wrapAsync from "../utils/wrap-async.js";

export const createShortUrl = wrapAsync(async (req, res) => {
    const { url, slug } = req.body;
    const userId = req.user ? req.user.id : null;
    let shortUrl;
    if (req.user) {
        shortUrl = await createShortUrlWithUser(url, userId, slug);
    } else {
        shortUrl = await createShortUrlWithoutUser(url);
    }
    res.status(201).json({
        success: true,
        message: "Short URL created successfully",
        data: {
            shortUrl,
            url
        },
    });
}
);

export const redirectToUrl = wrapAsync(async (req, res) => {
    const { shortUrl } = req.params;
    const url = await getShortUrl(shortUrl);
    if (!url?.fullUrl) {
        throw new Error("URL not found");
    }
    if(!url.fullUrl.includes("http")){
        url.fullUrl = "http://" + url.fullUrl;
    }
    res.redirect(url.fullUrl);
});

export const createCustomShortUrl = wrapAsync(async (req, res) => {
    const { url, slug } = req.body;
    const shortUrl = await createShortUrlWithoutUser(url, slug);
    res.status(201).json({
        success: true,
        message: "Custom short URL created successfully",
        data: {
            shortUrl,
            url
        },
    });
}
);