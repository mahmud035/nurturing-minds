## Nurturing Minds — Server

#### Project Name: Nurturing Minds (server)

#### Live Website: <a href="https://nurturing-minds-client-side.web.app/">Nurturing Minds</a>

> This is the **server** half of the Nurturing Minds monorepo. The React client lives in [`../client`](../client). Full project write-up: [root README](../README.md).

### Description

The Nurturing Minds API is a single Express service backed by MongoDB Atlas. It serves the services catalog and review data, and issues JWTs used to scope review reads to the requesting user.

### Collections

- `services` — mental-health service offerings
- `reviews` — user reviews, linked to a service and a user email

### Endpoints

| Method | Route | Notes |
|---|---|---|
| GET | `/services` | all services |
| GET | `/few-service` | newest 3 (home-page teaser) |
| GET | `/services/:id` | single service |
| GET | `/reviews/:id` | reviews for a service |
| GET | `/reviews` | **JWT-protected**; token email must match `?email=` (403 otherwise) |
| GET | `/edit/:id` | a single review to edit |
| POST | `/jwt` | issue a JWT for a user |
| POST | `/service` | create a service |
| POST | `/review` | create a review |
| PUT | `/reviews/:id` | update a review (upsert) |
| DELETE | `/reviews/:id` | delete a review |

> Auth note: only the user-scoped `GET /reviews` read is currently protected by `verifyJWT`. The write endpoints (`POST /service`, `POST /review`) are not yet auth-gated — see *What I'd extend next* in the [root README](../README.md).

### Built with

- Node.js, Express 4.18
- MongoDB native driver 4.11 (MongoDB Atlas)
- jsonwebtoken 8.5 (JWT)
- cors, dotenv, colors

### Run the server

```bash
git clone https://github.com/mahmud035/nurturing-minds.git
cd nurturing-minds/server
npm install
node index.js        # http://localhost:5000
```

**Environment (`.env`):**

```
DB_USER=...
DB_PASSWORD=...
ACCESS_TOKEN_SECRET=...
```
