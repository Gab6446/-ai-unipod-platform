# AI UNIPOD Platform

> The official digital platform for the AI UNIPOD Innovation Hub — a partnership between the **University of Lagos (UNILAG)** and the **United Nations Development Programme (UNDP)**.

---

## 🚀 Overview

AI UNIPOD gives UNILAG students and researchers a world-class platform to:
- **Browse and book** creative lab spaces (Maker Space, Design Studio, VR Room, etc.)
- **Submit project proposals** for mentorship, resources, and recognition
- **Explore an active gallery** of student-built innovations
- **Read blog posts** and news from the hub

A **Faculty Coordinator Admin Portal** allows staff to approve or decline bookings and proposals in real-time.

---

## 🗂️ Project Structure

```
AI Unipod/                    ← Root (monorepo)
├── client/                   ← React frontend (Vite)
│   ├── public/
│   │   └── Images/           ← Optimized platform images
│   └── src/
│       ├── components/       ← Reusable UI components
│       │   ├── Navbar.jsx
│       │   ├── Hero.jsx
│       │   ├── BentoSection.jsx
│       │   ├── FacilitiesSection.jsx
│       │   ├── GallerySection.jsx
│       │   ├── BlogSection.jsx
│       │   ├── ProjectsShowcase.jsx
│       │   ├── SubmitProject.jsx
│       │   ├── BookingModal.jsx
│       │   └── Footer.jsx
│       ├── pages/            ← Full-page route components
│       │   ├── AboutPage.jsx
│       │   ├── BookingPage.jsx
│       │   ├── BlogPage.jsx
│       │   ├── BlogPostPage.jsx
│       │   └── AdminPortal.jsx
│       ├── App.jsx           ← Router & page assembly
│       ├── main.jsx          ← React entry point
│       ├── index.css         ← Global design tokens & styles
│       ├── admin.css         ← Admin portal styles
│       └── gallery-blog.css  ← Gallery & blog styles
├── server/                   ← Node/Express backend (REST API)
│   ├── models/               ← Mongoose data models
│   ├── routes/               ← API route handlers
│   └── index.js              ← Server entry point
├── compress.js               ← Image optimization utility script
├── package.json              ← Root scripts (runs client + server together)
└── .gitignore
```

---

## ⚙️ Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React 18, Vite, Framer Motion       |
| Styling   | Vanilla CSS (Design Token System)   |
| Icons     | Lucide React                        |
| Fonts     | Sora (Google Fonts)                 |
| Backend   | Node.js, Express                    |
| Database  | MongoDB (Mongoose) / JSON fallback  |
| Hosting   | Vercel (frontend) · Render (backend)|

---

## 🛠️ Getting Started (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/Gab6446/-ai-unipod-platform.git
cd ai-unipod-platform
```

### 2. Install all dependencies (root + client + server)
```bash
npm run install:all
```

### 3. Set up environment variables

Create a `.env` file inside the `client/` folder:
```env
VITE_API_URL=http://localhost:5000
```

Create a `.env` file inside the `server/` folder:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Start the development server
```bash
npm run dev
```
This starts both the **React frontend** (on `http://localhost:5173`) and the **Express backend** (on `http://localhost:5000`) simultaneously.

---

## 📄 Key Scripts

| Script              | Description                                    |
|---------------------|------------------------------------------------|
| `npm run dev`       | Start client + server in development mode      |
| `npm run build`     | Build the frontend for production (Vercel)     |
| `npm run client`    | Start only the React frontend                  |
| `npm run server`    | Start only the Express backend                 |
| `npm run install:all` | Install all dependencies across all packages |
| `node compress.js`  | Re-compress/optimize images in `client/public/Images/` |

---

## 🌐 Deployment

- **Frontend:** Deployed on [Vercel](https://vercel.com). Root directory is set to `client/`.
- **Backend:** Deployed on [Render](https://render.com). Note: free-tier Render instances "sleep" after inactivity — the first API request after a period of inactivity may take ~30 seconds to respond (cold start).

---

## 🔐 Admin Portal

The Admin Portal is available at `/admin`. It is intended for Faculty Coordinators only.

From the portal, staff can:
- View all submitted project proposals
- View all facility booking requests
- Approve or decline submissions

> ⚠️ Access control is currently managed by keeping the `/admin` route unlisted. A proper auth system (e.g. UNILAG SSO) can be added in a future iteration.

---

## 🤝 Contributing

1. Create a new branch from `main`: `git checkout -b feature/your-feature-name`
2. Make your changes and commit with a clear message
3. Open a Pull Request against `main`

Please keep components focused and reusable. CSS follows a **BEM-style naming convention** (e.g. `.booking-modal__header`, `.hero-btn--primary`).

---

*Built with ❤️ for UNILAG innovators, in partnership with UNDP.*
