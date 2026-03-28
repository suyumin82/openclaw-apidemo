# Demo API Service

A starter Node.js REST API built with Express, following standard practices (structured modules, centralized config, health endpoint, error handling, linting, and formatting).

## Tech Stack

- Node.js 18+ (pnpm project)
- Express 5 with Helmet, CORS, and request logging (morgan)
- Structured controllers/routes/middlewares
- Nodemon for hot reload
- ESLint v10 (flat config) + Prettier

## Getting Started

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Visit `http://localhost:4000/health` to confirm the service is running.

## Scripts

| Command        | Description                         |
|---------------|-------------------------------------|
| `pnpm dev`    | Start the server with nodemon       |
| `pnpm start`  | Start the server with node          |
| `pnpm lint`   | Run ESLint on `src/**/*.js`         |
| `pnpm lint:fix` | Autofix lint issues               |
| `pnpm format` | Run Prettier on source files        |

## Project Structure

```
src/
  app.js             # Express app
  server.js          # HTTP bootstrap
  config/env.js      # Environment loading
  routes/            # Route definitions
  controllers/       # Route handlers
  middlewares/       # Error handling
```

## Extending

- Add new features by creating a controller + route module under `src/controllers` and `src/routes`.
- Register the route in `src/routes/index.js` (e.g., `router.use('/users', usersRoutes)`).
- Add service/data layers as needed for business logic or database access.

## Endpoints

- `GET /api/health` — service heartbeat
- `GET /api/helloworld?name=Jane` — returns `{ "message": "Hello Jane" }` (name defaults to World when omitted).

## Health Check

`GET /api/health` returns uptime, environment, and timestamp so platforms can monitor the service.

## Request and Response Logging

The app now logs both inbound requests and outbound responses to the console.

- enabled by default with `ENABLE_REQUEST_RESPONSE_LOGGING=true`
- logs method, path, query, params, request body, response status, response body, and duration
- intended for development and debugging

Disable it by setting:

```bash
ENABLE_REQUEST_RESPONSE_LOGGING=false
```
