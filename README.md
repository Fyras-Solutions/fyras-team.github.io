#  Intern Info System – Frontend (React + TailwindCSS)

##  Overview

The **Intern Info System Frontend** is a responsive web interface built using **React** and **TailwindCSS**.  
It displays intern information fetched from the backend API in a clean, modern, and professional card layout.  

Each intern profile card includes:
- Name  
- Role  
- Join date  
- About section  
- GitHub username (with icon & clickable link)  
- Skills displayed as badges  

This frontend is designed to integrate seamlessly with the backend (`knowledge-base`) FastAPI server.

---

##  Features

✅ **Responsive Grid Layout** – Adjusts automatically across desktop, tablet, and mobile.  
✅ **Professional Card Design** – Smooth shadows, rounded corners, hover effects.  
✅ **Skill Badges** – Clean and colorful indicators for technologies.  
✅ **Search & Filter** – Filter interns by name, role, or skills.  
✅ **Sorting** – Sort by intern name or date of joining.  
✅ **Lightweight Stack** – Uses only React & TailwindCSS (no external UI libraries).  
✅ **Live Data Fetch** – Pulls intern data dynamically from the backend’s `/interns` endpoint.  

---

##  Tech Stack

| Component      | Technology |
|----------------|-------------|
| Frontend Framework | React |
| Styling        | TailwindCSS |
| Icons          | React Icons |
| Build Tool     | react-scripts (Create React App) |
| API Source     | FastAPI backend (knowledge-base) |

---

##  Requirements

Before starting, ensure you have:

- **Node.js** ≥ 18.x  
- **npm** ≥ 9.x  
- Backend (`knowledge-base`) running locally at:  http://127.0.0.1:8000/interns

---

## ️Installation & Setup

###  Clone the Repository

```bash
  git clone https://github.com/Fyras-Solutions/fyras-team.github.io.git
  cd fyras-team.github.io
```

### Install Dependencies

```bash
  npm install
```

### Setup TailwindCSS (if not already configured)
If you don’t see `tailwind.config.js` and `postcss.config.js`, generate them:

```bash
  npx tailwindcss init -p
```
Also, ensure your `src/index.css` has:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Run the Application

```bash
  npm start
```

---

## How It Works

1. The frontend sends a request to the backend’s `/interns` endpoint.

2. The backend reads data from `interns.json` and returns the intern list.

3. React dynamically renders intern cards with Tailwind styling.

4. Any updates made to the backend’s `interns.json` file are reflected in real-time on page reload.

---

## Maintainers

[🔗 Intern Info System Backend (knowledge-base)](https://github.com/Fyras-Solutions/knowledge-base)

