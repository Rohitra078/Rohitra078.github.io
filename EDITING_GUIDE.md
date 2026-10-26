# Website Editing & Maintenance Guide

This guide explains how to edit your portfolio, add new robotics/AI projects, update your work experience, and deploy changes to GitHub.

---

## 🎯 Quick Rule: Everything Lives in `js/data.js`

To make future updates effortless, the entire site is data-driven. You **do not need to touch HTML** to add new projects, update your bio, or edit skills. 

All content is defined in [`js/data.js`](js/data.js).

---

## 1. How to Add a New Project

### Step 1: Save your media
1. Create a new folder inside `assets/projects/<project-name>/` (e.g., `assets/projects/quadruped/`).
2. Place your photos, diagrams, and video clips (`.mp4`) inside that folder.

### Step 2: Add an entry in `js/data.js`
Open [`js/data.js`](js/data.js), locate the `PROJECTS` array, and paste your new project at the **top** (so it appears first):

```javascript
{
  slug: "my-new-robot",                           // Unique URL slug (e.g. project.html?id=my-new-robot)
  title: "Autonomous Quadruped Locomotion",       // Card and page title
  short: "Short 1-2 sentence pitch for the home card.",
  year: "2026",
  role: "Lead Autonomy Engineer",
  org: "Lab or Company Name",
  category: ["robotics", "perception"],           // Options: "robotics", "perception", "ai", "research"
  tags: ["ROS 2", "Nav2", "C++", "PyTorch"],      // Display pills
  cover: "assets/projects/my-new-robot/cover.jpg",// Thumbnail image
  coverVideo: "assets/projects/my-new-robot/demo.mp4", // Optional: hover video clip
  size: "lg",                                     // Bento size: "lg", "md", or "tall"
  links: [
    { label: "GitHub Code", url: "https://github.com/Rohitra078/repo", icon: "github" },
    { label: "Paper (PDF)", url: "assets/docs/my-paper.pdf", icon: "doc" }
  ],
  body: [
    { type: "h", text: "Overview" },
    { type: "p", text: "Explain the project goals and methodology here. You can use <strong>bold tags</strong>." },

    { type: "img", src: "assets/projects/my-new-robot/diagram.png", caption: "System architecture", light: true },
    
    { type: "metrics", items: [
        { value: "40 Hz", label: "Control loop rate" },
        { value: "99.2%", label: "Obstacle detection accuracy" }
    ]},

    { type: "h", text: "Hardware & Sensors" },
    { type: "list", items: [
        "Velodyne LiDAR for 3D point cloud generation",
        "NVIDIA Jetson Orin running ROS 2 Humble",
        "Custom motor controllers via CAN bus"
    ]},

    { type: "video", src: "assets/projects/my-new-robot/demo.mp4", caption: "Hardware field test" },
    
    // If you have a YouTube video:
    // { type: "youtube", id: "YOUTUBE_VIDEO_ID", caption: "YouTube demonstration" },

    { type: "callout", text: "Key Takeaway: The controller maintained dynamic stability across rough incline terrain." }
  ]
},
```

---

## 2. Available Block Types in `project.body`

You can assemble project breakdowns using any combination of these blocks:

| Block Type | Code Snippet | What it Does |
|---|---|---|
| **Heading** | `{ type: "h", text: "Section Name" }` | Creates an `<h2>` and automatically adds it to the sticky side navigation |
| **Paragraph** | `{ type: "p", text: "Description..." }` | Body paragraph (supports `<strong>` and `<a>` links) |
| **Bullet List** | `{ type: "list", items: ["Point 1", "Point 2"] }` | Clean bullet points with custom cyan markers |
| **Image** | `{ type: "img", src: "path.png", caption: "Desc", light: true }` | Image with automatic click-to-zoom lightbox (`light: true` adds clean white backing for black-line schematics) |
| **Local Video** | `{ type: "video", src: "clip.mp4", caption: "Demo" }` | Embedded HTML5 video with controls |
| **YouTube** | `{ type: "youtube", id: "VIDEO_ID", caption: "Demo" }` | Fast-loading lite YouTube player (no tracking cookies until clicked) |
| **Image Gallery**| `{ type: "gallery", items: [{src, caption}, ...] }` | Side-by-side comparison images (e.g. Loop closure ON vs OFF) |
| **Metrics** | `{ type: "metrics", items: [{value: "10x", label: "Speed"}] }` | Large cybernetic stat badges |
| **Callout** | `{ type: "callout", text: "Important takeaway..." }` | Glowing border notification box |

---

## 3. How to Update Your Profile & Contact Details

In [`js/data.js`](js/data.js), look at the `PROFILE` object:

```javascript
const PROFILE = {
  name: "Rohit Hiraman Rajput",
  title: "Robotics & AI Engineer",
  email: "rajput.ro@northeastern.edu", // Update email here
  location: "Boston, MA",
  photo: "assets/img/profile.jpg",     // Change profile photo path here
  roles: [                             // Typewriter words on the hero section:
    "autonomous navigation",
    "perception & SLAM",
    "multi-modal robots",
    "deep learning for robotics",
    "computer vision"
  ],
  socials: {
    github: "https://github.com/Rohitra078",
    gitlab: "https://gitlab.com/Rohitra078",
    linkedin: "https://www.linkedin.com/in/rohit-rajput1/"
  }
};
```

---

## 4. How to Update Experience / Career Timeline

In [`js/data.js`](js/data.js), look at `EXPERIENCE`:
Add or edit any position by modifying the role, organization, dates, and bullet points.

---

## 5. How to Update Skills

In [`js/data.js`](js/data.js), look at `SKILLS`:
Each category contains an `items` array. Simply add or remove technology keywords like `"Isaac Sim"`, `"Nav2"`, or `"TensorRT"`.

---

## 6. How to Commit & Push Changes to GitHub

Once you make edits in `js/data.js`:

```powershell
# 1. Check what changed
git status

# 2. Stage your changes
git add js/data.js assets/

# 3. Commit with a message
git commit -m "Add new autonomous robot project"

# 4. Push to GitHub (Pages will update automatically in ~60 seconds)
git push origin main
```
