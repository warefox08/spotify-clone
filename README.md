THIS IS MY ATTEMPT AT BUILDING A SPOTIFY CLONE FROM SCRATCH

🌟 CORE FEATURE I AIM TO ACHIEVE 🌟 
1. Music Playback: Play, pause, skip next/previous, adjust volume via a slider.
2. Admin Dashboard: CRUD interface for albums and songs.
3. Real‑Time Chat: In‑app chat room alongside the player, showing who’s online/offline.
4. Live Listening Status: See in real time what each user is listening to.
5. Analytics Page: Aggregated usage data (e.g. most‑played tracks).

🙈 This is a full‑stack “Spotify‑style” tutorial app that demonstrates:
1. User auth and role‑based access (Clerk).
2. CRUD APIs for managing media.
3. File uploads and cloud storage (Cloudinary).
4. Real‑time bi‑directional events via Socket.IO (for chat, sync’d playback, live presence).
5. Data persistence and analytics with MongoDB and scheduled aggregation.
6. A modern React/Vite frontend that ties it all together with a slick UI and charts.

✨ TECH STACK ✨
✅Backend 
1. Node.js & Express: HTTP API and static file serving.
2. MongoDB (Mongoose): Stores users, albums, songs, chat messages, playback events.
3. Clerk (@clerk/express): Authentication & user management (incl. admin roles).
4. Cloudinary: Album‑art and audio file storage & delivery.
5. Socket.IO: WebSocket layer for real‑time chat, online/offline status, and broadcasting “track changed”, “volume updated” events.
6. Node‑Cron: Scheduled jobs (e.g. to aggregate analytics periodically).
7. Express‑FileUpload: Handling multipart uploads of songs/images.

✅Frontend
1. React + Vite: Fast, component‑driven UI.
2. Clerk JS: Client‑side auth flows.
3. Socket.IO‑Client: Listens for and emits real‑time events (chat messages, listening status, track controls).
4. HTML5 <audio> API: Core playback engine.
5. Charting Library (e.g. Recharts or Chart.js): Renders analytics dashboards.


for more info ~~~ https://www.youtube.com/watch?v=4sbklcQ0EXc
