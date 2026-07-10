## Welcome! 👋

#### Project Name: Nurturing Minds (client)

#### Live Website: <a href="https://nurturing-minds-client-side.web.app/">Nurturing Minds</a>

> This is the **client** half of the Nurturing Minds monorepo. The Express + MongoDB API lives in [`../server`](../server). Full project write-up: [root README](../README.md).

### Description

Nurturing Minds is a mental-health services site: browse services, read service detail pages with user reviews, view a location map and photo gallery. Personal learning project — no real clients.

### Features and Functionality

<ul>
<li>Browse psychological/mental-health services and open a service detail page.</li>
<li>Leave a review on a service, then edit or delete your own reviews.</li>
<li>Sign up / sign in with email &amp; password, Google, or GitHub (Firebase Authentication).</li>
<li>Read blog content.</li>
<li>View an interactive location map (react-leaflet) and a photo gallery (react-photo-view).</li>
</ul>

> The Appointment page is a front-end form that shows a confirmation toast — it does not persist a booking.

### Built with

- React v18
- React Router v6
- Firebase Authentication
- JWT (Bearer token to the API)
- react-leaflet (map)
- react-photo-view (gallery)
- React-Bootstrap
- React-Toastify
- CSS3
- Mobile-first workflow

### Run the client

```bash
git clone https://github.com/mahmud035/nurturing-minds.git
cd nurturing-minds/client
npm install
npm start            # http://localhost:3000
```

Provide your own Firebase web config in `src/firebase configuration/firebase.config.js`.

### What I learned

This project gave me practice with React, React Router, Firebase Authentication, attaching JWTs to API requests, and MongoDB-backed CRUD — in particular restricting a user's review reads to their own data.
