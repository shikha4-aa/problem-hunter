# problem-hunter

**ProblemHunter** is a dev tool that hunts down real, unsolved technical issues from platforms like GitHub, Reddit, and Hacker News, so developers can stop wasting time thinking *what should I build?* and actually build.

This project scrapes live problem statements posted by real users (bugs, blockers, pain points) and displays them through a clean UI.

---

## 🚀 Features (Planned)

- ✅ GitHub issue scanner (open issues with real bugs or problems)
- 🔄 Reddit post scanner (from dev subs like r/learnprogramming)
- 🔄 Hacker News problem post scanner (Ask HN / startup ideas)
- 🔄 Real-time alert system (Discord / CLI)
- 🔄 Search + filter in frontend (by platform, keyword, date)
- 🔄 Daily summary mode

---

## 🛠️ Tech Stack

- **Frontend:** React.js + Tailwind (or ShadCN UI)
- **Backend:** Node.js + Express
- **Database:** MongoDB (with Mongoose)
- **Scraping/API:** GitHub REST API (for now)
- **Deployment:** Vercel (frontend), Render/Railway (backend), MongoDB Atlas

---

## ⚙️ Current Status:  
> 🔨 Phase 1: GitHub scanner + backend API implemented.  
> 🧪 Frontend integration in progress.

---

👀 Inspiration
The idea came from constantly seeing devs stuck asking:

“What should I build?”
This tool answers that.
We hunt the problems. You solve them.

---

## 📦 How to Run Locally

### Clone the repo
```bash
git clone https://github.com/shikha4-aa/problemhunter.git
cd problemhunter

## Backend
cd server
npm install
# Create a .env file with your MongoDB URI and GitHub token
npm run dev

##Frontend
cd client
npm install
npm start



