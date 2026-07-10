# Nurturing Minds

**A mental-health services site with review CRUD scoped to the logged-in user — React + Firebase auth client, Express + MongoDB API secured with JWT.**

🔗 **Live:** https://nurturing-minds-client-side.web.app/

Nurturing Minds presents a catalog of psychological/mental-health services, service detail pages with user reviews, an embedded location map, and a photo gallery. Its core engineering exercise is **ownership-scoped review CRUD**: a signed-in user can read, edit, and delete only their own reviews, enforced by a JWT check on the server.

> Scope note: a learning project with no real clients or patients. The "Appointment" page is a front-end form that shows a success toast — it does not persist a booking. Claims below match the code.

---

## What this demonstrates

- **Goal:** let users review services, but only manage their own → **Approach:** issue a JWT on login, send it as a Bearer token, and on `GET /reviews` compare the token's email claim to the requested email (403 on mismatch) → **Outcome:** a user can't read or manage another user's reviews by editing the query string.
- **Goal:** full review lifecycle → **Approach:** create, read (per-service and per-user), update (with upsert), and delete review endpoints over a MongoDB collection → **Outcome:** working CRUD wired to a React UI with optimistic toasts and refetch.
- **Goal:** surface a physical location and imagery → **Approach:** `react-leaflet` map on the Contact page and `react-photo-view` for the gallery → **Outcome:** interactive map and lightbox gallery without heavyweight dependencies.
- **Goal:** show only a preview on the home page → **Approach:** a dedicated `/few-service` endpoint sorts by newest and limits to three → **Outcome:** the client fetches exactly the teaser slice it renders.

---

## Architecture

```
┌──────────────────────────────┐        ┌────────────────────────────────┐
│  Client (React SPA)           │  HTTP  │  Server (Express)              │
│                              │ ─────▶ │                                │
│  • AuthProvider (Firebase)    │  JWT   │  • verifyJWT middleware         │
│  • setAuthToken (Bearer)      │ ◀───── │  • /services  /few-service      │
│  • react-leaflet map          │  JSON  │  • /reviews (CRUD, scoped read) │
│  • react-photo-view gallery   │        │  • /jwt (token issuance)        │
└──────────────────────────────┘        └───────────────┬────────────────┘
        │                                                ▼
        ▼                                     MongoDB Atlas (native driver)
  Firebase Authentication                     services · reviews
  (email/password · Google · GitHub)
```

**Auth model:** Firebase authenticates on the client; the client requests a backend JWT (`POST /jwt`) and attaches it via `setAuthToken`; `verifyJWT` guards user-scoped review reads.

---

## Tech stack

| Layer | Stack |
|---|---|
| Frontend | React 18.2, React Router DOM 6.4, React-Bootstrap 5.2 |
| Auth | Firebase 9.23 Authentication + JWT (Bearer token) |
| UX | react-leaflet 4.1, react-photo-view 1.2, react-toastify 9.1, react-loader-spinner |
| Backend | Node.js, Express 4.18, MongoDB native driver 4.11 |
| Hosting | Firebase Hosting (client) · serverless deploy (API) |

---

## Deep-dive — ownership-scoped reviews

The endpoint worth examining is `GET /reviews`. It is wrapped in `verifyJWT`, which validates the Bearer token and attaches the decoded user to the request. The handler then rejects the call with `403` if `req.user.email !== req.query.email`, so possessing a valid token for one account grants no access to another account's reviews. On the client, `setAuthToken` centralizes attaching the token to requests, and the "my reviews" view relies on this scoping to render only the current user's feedback. This is the difference between "authenticated" and "authorized for this specific data," and it's the concept the project set out to practice.

---

## What I'd extend next

- Protect the write endpoints: `POST /service` and `POST /review` are currently unauthenticated and should require a valid token (and, for services, an admin role).
- Persist appointments — turn the Appointment form into a real booking backed by a collection rather than a success toast.
- Add server-side input validation and move MongoDB access behind a small service layer.
- Restrict a review's edit/delete to its owner on the server, not only in the UI.

---

## Run locally

```bash
git clone https://github.com/mahmud035/nurturing-minds.git
cd nurturing-minds

# Client
cd client
npm install
npm start                # http://localhost:3000

# Server (second terminal)
cd ../server
npm install
node index.js            # http://localhost:5000
```

**Server env (`server/.env`):**

```
DB_USER=...
DB_PASSWORD=...
ACCESS_TOKEN_SECRET=...
```

Provide your own Firebase web config in `client/src/firebase configuration/firebase.config.js`.
