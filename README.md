# Rohit Hiraman Rajput — Robotics & AI Engineer Portfolio

A modern, high-performance personal portfolio website for **Rohit Hiraman Rajput**, designed specifically for hosting on **GitHub Pages**. 

Featuring a dark "robotics laboratory" aesthetic with real-time simulated LiDAR point-cloud sweeps, interactive bento grid showcases, video/hardware demonstrations, and dedicated deep-dive technical project pages.

---

## 🚀 Live Demo & Hosting

- **Target URL**: [https://rohitra078.github.io](https://rohitra078.github.io)
- **Primary Domain / Repository**: `Rohitra078/Rohitra078.github.io`
- **Tech Stack**: Vanilla HTML5, CSS3 (Modern Glassmorphism & Cybernetic Accents), Vanilla JavaScript (Zero build step, instant load time on GitHub Pages).

---

## 📁 Repository Structure

```
├── index.html               # Main landing page (Hero, Bento Grid, About, Experience, Skills, Docs, Contact)
├── project.html             # Dynamic deep-dive project detail page template (loads content by ?id=<slug>)
│
├── css/
│   └── style.css            # Complete design system (Dark robotics lab palette, glass cards, responsive grid)
│
├── js/
│   ├── data.js              # ⭐ SINGLE SOURCE OF TRUTH: All profile info, projects, skills, & experience
│   └── main.js              # Interactive LiDAR canvas sweep, category filters, typing effect, lightbox zoom
│
├── assets/
│   ├── img/
│   │   └── profile.jpg      # Profile photograph
│   │
│   ├── docs/                # Academic papers, slide decks & reports
│   │   ├── covid-xray-classifier.pdf
│   │   ├── face-report.pdf
│   │   └── lidar-mapping-nuance.pdf
│   │
│   └── projects/            # Media organized by project slug
│       ├── m4/              # M4 Morphobot images & simulation MP4s
│       ├── aerobat/         # Flapping-wing UAV renders & test visuals
│       ├── lidar/           # NUance car & LeGO-LOAM point clouds
│       ├── face/            # FACE assistive wearable diagrams & demo
│       └── covid/           # Radiograph grids & accuracy graphs
│
├── README.md                # Repository overview & setup guide (this file)
├── EDITING_GUIDE.md         # 📘 Step-by-step instructions for adding projects & future edits
└── .gitignore               # Keeps raw archive files and scratch scripts out of git
```

---

## ✨ Features

1. **Simulated LiDAR Canvas Sweep**:
   - Canvas-rendered 3D point cloud scanner reflecting LiDAR elevation color maps (blue → cyan → lime → amber).
   - Dynamically reacts to mouse movements with interactive proximity bloom and continuous scanner rotation.

2. **Bento Grid Showcase**:
   - Displays projects in a responsive Apple-style asymmetrical bento layout.
   - Hovering over cards automatically previews looping video clips (e.g. M4 locomotion modes).
   - Category filtering (Robotics, Perception & SLAM, Deep Learning, Research).

3. **Dynamic Deep-Dive Project Pages**:
   - Each project opens in `project.html?id=<slug>` with structured sections:
     - High-resolution architecture and ROS computation graphs with full-screen lightbox zoom.
     - Embedded YouTube video demos (using high-performance lite facades).
     - Local video playback (`.mp4`) for Gazebo simulations and robot hardware runs.
     - Side navigation sticky Table of Contents.
     - Previous / Next project footer navigation.

4. **Zero-Dependency Architecture**:
   - No `npm`, `node_modules`, or complex build step required.
   - Edit `js/data.js` and push to GitHub — changes go live immediately on GitHub Pages.

---

## 🛠️ How to Add or Edit Projects

All website text, projects, and experiences are managed in **`js/data.js`**. 
You **never** need to write HTML to add new content.

👉 **See [EDITING_GUIDE.md](EDITING_GUIDE.md) for full instructions and copy-paste templates.**

---

## 🌐 Local Development

To preview the website locally on your computer:
1. Open the project folder in VS Code or your editor of choice.
2. Launch with any local static server (e.g., Live Server extension in VS Code, or Python `python -m http.server 8000`).
3. Open `http://localhost:8000` in your web browser.

---

## 📜 License & Copyright

Content & Research &copy; 2021–2026 Rohit Hiraman Rajput. All rights reserved.
Code and design template available under the MIT License.
