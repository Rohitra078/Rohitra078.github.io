# 📘 Website Editing & Maintenance Guide

Adding new robotics and AI projects to your website is designed to be **fast, efficient, and zero-headache**. 

You can add a new project in **two ways**:
1. **One-Command Auto-Importer** (`add-project.ps1` or `add-project.bat`): Give it a document & link, and it sets up everything automatically.
2. **Manual Markdown File** (`content/projects/your-project.md`): Drop a markdown file in the folder and double-click `sync.bat`.

---

## ⚡ Method 1: The One-Command Importer (Recommended)

Whenever you have a new project with a README, notes doc, paper PDF, or GitHub link, just run:

### Using PowerShell:
```powershell
.\add-project.ps1 -Doc "path\to\notes.md" -Link "https://github.com/Rohitra078/my-new-repo"
```

### With optional custom cover image or title:
```powershell
.\add-project.ps1 `
  -Title "Autonomous Drone Swarm Navigation" `
  -Doc "C:\Users\rohit\Documents\drone-report.md" `
  -Link "https://github.com/Rohitra078/drone-swarm" `
  -Cover "C:\Users\rohit\Pictures\drone-flight.jpg" `
  -Tags "ROS 2, PX4, Nav2, C++"
```

### Or simply double-click `add-project.bat`:
A prompt will ask you for:
1. Document path (Markdown, text notes, or PDF report)
2. Project link (GitHub repo, demo video, or paper)
3. Title (or press Enter to auto-detect from doc)
4. Cover image (optional)

**What it does automatically:**
- Copies the document and cover image into `assets/projects/<slug>/`
- Creates the markdown project file in `content/projects/<slug>.md`
- Automatically compiles the site database (`js/data.js`)
- Previews the local URL so you can inspect it immediately!

---

## 📝 Method 2: Create a Markdown File Directly

If you prefer writing Markdown by hand:

1. Create a file inside `content/projects/<slug>.md` (e.g. `content/projects/quadruped-rl.md`).
2. Add this frontmatter at the top:

```markdown
---
title: "Quadruped Locomotion via Reinforcement Learning"
slug: "quadruped-rl"
year: "2026"
role: "Lead Autonomy Engineer"
org: "SiliconSynapse / Northeastern"
category: ["robotics", "ai"]
tags: ["PyTorch", "Isaac Sim", "ROS 2", "Sim-to-Real"]
cover: "assets/projects/quadruped/cover.jpg"
links:
  - label: "Code on GitHub"
    url: "https://github.com/Rohitra078/quadruped-rl"
    icon: "github"
  - label: "Paper (PDF)"
    url: "assets/docs/quadruped-paper.pdf"
    icon: "doc"
metrics:
  - value: "500 Hz"
    label: "Inference loop frequency"
  - value: "94%"
    label: "Sim-to-real success rate"
---

## Overview

Description of the problem, robot platform, and control strategy. You can use **bold text**, [links](https://...), and lists.

![System architecture](assets/projects/quadruped/arch.png){light}

## Hardware Validation

Details on motor torque limits, sensor feedback, and sim-to-real transfer.

<video src="assets/projects/quadruped/sim-test.mp4" caption="Terrain traversal in Isaac Sim"></video>

> The controller adapted to unanticipated payload changes within 120 ms.
```

3. Double-click `sync.bat` (or run `powershell scripts\sync-content.ps1`).  
   **Done!** Your project is compiled and rendered on the home page and in its own dedicated detail page.

---

## 🎨 Available Markdown Elements

You can freely mix these elements in your project markdown:

| Feature | Syntax in Markdown |
|---|---|
| **Headings** | `## System Architecture` (automatically populates the side Table of Contents) |
| **Images** | `![Caption](assets/path/diagram.png)` (click-to-zoom lightbox enabled) |
| **White-backed Diagrams** | `![Caption](assets/path/ros-graph.png){light}` (adds clean white background for black schematics) |
| **Embedded MP4 Video** | `<video src="assets/path/test.mp4" caption="Hardware field test"></video>` |
| **Embedded YouTube Video**| `<youtube id="VIDEO_ID" caption="Walkthrough demo"></youtube>` (ultra-fast lite embed) |
| **Callout / Highlights** | `> Important result or takeaway message` (styled with glowing cybernetic border) |
| **Metric Stat Badges** | Listed in the frontmatter `metrics:` (generates large gradient numbers) |

---

## 👤 Updating Profile, Bio & Skills

Your global profile and competencies are stored in [`js/data.js`](js/data.js):

- **Profile bio & contact**: Search for `const PROFILE = { ... }` in `js/data.js`. Change your email, location, or social links.
- **Hero typewriter keywords**: Edit the `roles:` array inside `PROFILE`.
- **Experience timeline**: Search for `const EXPERIENCE = [ ... ]` in `js/data.js`.
- **Skills matrix**: Search for `const SKILLS = [ ... ]` in `js/data.js`.

---

## 🚀 Pushing Updates to GitHub Pages

Whenever you add a project or make edits, run:

```powershell
git add .
git commit -m "Add new project"
git push
```

Within ~60 seconds, GitHub Pages automatically deploys the latest version to your site!
