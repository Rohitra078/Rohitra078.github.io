# Rohit Hiraman Rajput — Robotics & AI Engineer Portfolio

A state-of-the-art personal portfolio website for **Rohit Hiraman Rajput**, crafted for **GitHub Pages**.

Features a dark "robotics laboratory" theme with real-time simulated LiDAR point-cloud sweeps, interactive bento grid showcases, video/hardware demonstrations, and dedicated deep-dive technical project pages.

---

## ⚡ Adding New Projects in 30 Seconds

You can add any new project simply by passing a document and a link:

```powershell
.\add-project.ps1 -Doc "path\to\notes.md" -Link "https://github.com/Rohitra078/my-repo"
```
Or double-click **`add-project.bat`** on Windows!

See **[EDITING_GUIDE.md](EDITING_GUIDE.md)** for full documentation.

---

## 📁 Clean Repository Structure

All content is cleanly separated and easy to find:

```
├── content/
│   └── projects/            # 📝 Individual project Markdown files (easy to edit!)
│       ├── m4-morphobot-autonomy.md
│       ├── aerobat-bio-inspired-uav.md
│       ├── lidar-mapping-nuance.md
│       ├── face-assistive-device.md
│       └── covid-xray-cnn-svm.md
│
├── assets/
│   ├── img/                 # Profile photos & avatars
│   ├── docs/                # Academic papers, slide decks & reports (PDF)
│   └── projects/            # Media organized cleanly by project slug
│       ├── m4/              # M4 Morphobot photos & MP4 simulations
│       ├── aerobat/         # Bat UAV renders & tests
│       ├── lidar/           # NUance car & point-cloud maps
│       ├── face/            # FACE wearable diagrams & demo
│       └── covid/           # Radiograph grids & training graphs
│
├── css/
│   └── style.css            # Dark robotics lab design system (glassmorphism & cybernetic accents)
│
├── js/
│   ├── data.js              # Compiled site database (profile, skills, projects)
│   └── main.js              # LiDAR canvas sweep, bento grid, filter tabs, lightbox zoom
│
├── scripts/
│   └── sync-content.ps1     # Compiles content/projects/*.md -> js/data.js
│
├── add-project.ps1          # 🚀 Fast CLI tool: give it a doc & link and it builds the page!
├── add-project.bat          # Double-click shortcut for add-project.ps1
├── sync.bat                 # Double-click shortcut to re-sync all Markdown files
│
├── index.html               # Main landing page (Hero, Bento Grid, About, Experience, Skills, Docs, Contact)
├── project.html             # Dynamic deep-dive project detail page template (?id=<slug>)
├── EDITING_GUIDE.md         # 📘 Detailed instructions for adding projects & customizing
└── README.md                # Repository overview (this file)
```

---

## 🌐 Live URL & Hosting

- **Target URL**: [https://rohitra078.github.io](https://rohitra078.github.io)
- **Repository**: `Rohitra078/Rohitra078.github.io`
- **Zero Build Dependencies**: Runs directly on GitHub Pages with vanilla HTML/CSS/JS.

---

## 📜 License

Content & Research &copy; Rohit Hiraman Rajput. Template licensed under the MIT License.
