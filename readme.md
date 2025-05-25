# URL Shortener

A full-stack URL shortener application built with **Node.js (Express)**, **React**, **Prisma**, **PostgreSQL**, **Docker Compose**, and **Prometheus** for metrics.

## Features

- **User Authentication**: Register, login, and manage sessions (JWT-based).
- **URL Shortening**: Authenticated users can create and manage their own short URLs. Anonymous users can also shorten URLs.
- **User Dashboard**: View and manage your shortened URLs and see click statistics.
- **Prometheus Metrics**: Integrated Prometheus client for monitoring HTTP requests and active users.
- **Docker Compose**: Easily run the backend and PostgreSQL database with Docker Compose.
- **Prisma ORM**: Type-safe database access and migrations.
- **PostgreSQL**: Robust relational database.
- **React Frontend**: Modern, minimal UI with authentication and dashboard.

## Project Structure

```
backend/
  ├── controller/
  ├── dao/
  ├── middleware/
  ├── prisma/
  ├── router/
  ├── services/
  ├── utils/
  ├── Dockerfile
  ├── docker-compose.yml
  ├── index.js
  └── package.json
frontend/
  ├── src/
  ├── index.html
  ├── package.json
  └── vite.config.js
```

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (for local dev)
- [npm](https://www.npmjs.com/)

### Backend

1. **Configure Environment Variables**  
   Copy `.env.example` to `.env` and set your secrets (e.g., `JWT_SECRET`, `DATABASE_URL`).

2. **Run with Docker Compose**  
   From the `backend` directory:

   ```sh
   docker-compose up --build
   ```

3. **Apply Prisma Migrations**

   ```sh
   npx prisma migrate deploy
   ```

4. **Seed the Database (optional)**

   ```sh
   node prisma/seed.js
   ```

5. **Prometheus Metrics**  
   Metrics are exposed at [http://localhost:5000/metrics](http://localhost:5000/metrics).

### Frontend

1. **Install dependencies**

   ```sh
   cd frontend
   npm install
   ```

2. **Start the development server**

   ```sh
   npm run dev
   ```

3. **Open [http://localhost:5173](http://localhost:5173) in your browser.**

## API Endpoints

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT
- `GET /api/auth/me` — Get current user (requires JWT)
- `POST /api/create/` — Create a short URL (requires JWT for user URLs)
- `POST /api/user/urls` — Get all URLs for the authenticated user
- `GET /:shortUrl` — Redirect to the original URL

## Monitoring

- Prometheus metrics available at `/metrics` endpoint.

## License

MIT

---

**Stack:** Node.js, Express, React, Prisma, PostgreSQL, Docker, Prometheus
