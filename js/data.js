/* ==========================================================================
   SITE CONTENT
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to update the website.
   To add a new project:
     1. Put its images/videos in  assets/projects/<your-slug>/
     2. Copy one of the objects in PROJECTS below, change the fields,
        and add it to the TOP of the list (newest first).
   Block types you can use inside `body`:
     { type: "h",       text: "Section heading" }           -> also appears in the side nav
     { type: "p",       text: "Paragraph (HTML allowed)" }
     { type: "list",    items: ["...", "..."] }
     { type: "img",     src: "path", caption: "...", light: true }  (light = white bg diagrams)
     { type: "video",   src: "path.mp4", caption: "..." }
     { type: "youtube", id: "VIDEO_ID", caption: "..." }
     { type: "gallery", items: [{ src, caption, light }] }
     { type: "callout", text: "Highlighted note" }
     { type: "metrics", items: [{ value: "90%", label: "..." }] }
   ========================================================================== */

const PROFILE = {
  name: "Rohit Hiraman Rajput",
  shortName: "Rohit",
  initials: "RR",
  title: "Robotics & AI Engineer",
  roles: [
    "autonomous navigation",
    "perception & SLAM",
    "multi-modal robots",
    "deep learning for robotics",
    "computer vision",
  ],
  tagline:
    "I build robots that perceive, plan and move on their own — from transforming Mars-rover concepts and bat-inspired drones to LiDAR mapping and vision systems.",
  email: "rajput.ro@northeastern.edu",
  location: "Boston, MA",
  photo: "assets/img/profile.jpg",
  socials: {
    github: "https://github.com/Rohitra078",
    gitlab: "https://gitlab.com/Rohitra078",
    linkedin: "https://www.linkedin.com/in/rohit-rajput1/",
  },
  about: [
    "I'm a <strong>robotics and AI engineer</strong> who enjoys hard problems in autonomy, especially where <strong>computer vision</strong> meets real hardware. I hold an <strong>M.S. in Robotics from Northeastern University</strong>, where my thesis made the M4 Morphobot choose its own locomotion mode and path across rough terrain.",
    "My background is in <strong>Mechanical Engineering (B.E.)</strong>. I worked as a design engineer at <strong>Faurecia</strong> and co-founded <strong>Tectural Technology</strong>, where I led the robotics division. Because I work across mechanical, electrical and computer science, I like designing whole systems, from CAD and sensors up to perception and planning.",
    "Day to day I work in <strong>Python, C++, ROS, PyTorch and Linux</strong>. If you have an interesting idea to build together, or just want to talk robots, get in touch.",
  ],
  stats: [
    { value: "MS", label: "Robotics, Northeastern" },
    { value: "5+", label: "Robotics & AI projects" },
    { value: "3", label: "Research labs & industry roles" },
  ],
};

const EXPERIENCE = [
  {
    role: "Graduate Researcher — M.S. Thesis",
    org: "Northeastern University · SiliconSynapse Lab & Field Robotics Lab",
    date: "2022 — 2023",
    points: [
      "Made the M4 Multi-Modal Mobility Morphobot autonomous: perception, 2.5D traversability mapping and a 3D path planner that knows about energy use.",
      "Built a Gazebo + ArduPilot SITL simulation stack and a CNN-based selector that switches between locomotion modes.",
      "Advised by Dr. Alireza Ramezani and Dr. Hanumant Singh.",
    ],
  },
  {
    role: "Robotics Research Assistant — Aerobat",
    org: "SiliconSynapse Lab, Northeastern University",
    date: "2022",
    points: [
      "Worked on the 70 g bat-inspired flapping-wing UAV, from design through flight control, with Gazebo simulation.",
      "Built a low-latency depth-estimation and obstacle-avoidance vision pipeline on an RGB-D camera (PyTorch, MonoDepth-based).",
      "Wrote sensor and camera calibration routines for the launcher, which cut testing time by 10%.",
    ],
  },
  {
    role: "M.S. Robotics Engineering",
    org: "Northeastern University, Boston",
    date: "2021 — 2023",
    points: [
      "Focus areas: mobile robotics, SLAM, computer vision, machine learning and deep learning.",
    ],
  },
  {
    role: "Co-founder & Head of Robotics",
    org: "Tectural Technology",
    date: "Before 2021",
    points: [
      "Co-founded the company and led the robotics division, building systems from concept to prototype.",
    ],
  },
  {
    role: "Design Engineer",
    org: "Faurecia",
    date: "Before 2021",
    points: [
      "Did mechanical design and CAD automation for automotive systems.",
    ],
  },
  {
    role: "B.E. Mechanical Engineering",
    org: "Undergraduate",
    date: "",
    points: ["Background in mechanical design, mechatronics and manufacturing."],
  },
];

const SKILLS = [
  {
    title: "Robotics & Autonomy",
    icon: "robot",
    items: ["ROS / ROS 2", "Gazebo", "ArduPilot SITL", "MAVROS", "SLAM (LeGO-LOAM, A-LOAM)", "Path Planning (A*)", "Elevation Mapping", "Sensor Fusion", "Flight Control"],
  },
  {
    title: "AI & Perception",
    icon: "brain",
    items: ["PyTorch", "TensorFlow / Keras", "OpenCV", "scikit-learn", "CNNs / VGG16", "SVM", "FaceNet", "Monocular Depth", "Point Clouds"],
  },
  {
    title: "Programming",
    icon: "code",
    items: ["Python", "C++", "MATLAB", "Bash", "Linux", "Git", "Docker"],
  },
  {
    title: "Hardware & Design",
    icon: "cpu",
    items: ["CAD Design & Automation", "Raspberry Pi", "NVIDIA Jetson", "Intel RealSense", "Velodyne VLP-16", "IMU / GPS", "Prototyping"],
  },
];

const PROJECTS = [
    {
        "slug":  "m4-morphobot-autonomy",
        "title":  "Autonomous M4 Morphobot: Traversability Mapping \u0026 3D Path Planning",
        "short":  "This thesis makes the \u003cstrong\u003eM4 (Multi-Modal Mobility Morphobot)\u003c/strong\u003e more autonomous. M4 is a transforming robot designed for Mars exploration and search-and-rescue. My work lets it pick its own locomotion mode and path through complex terrain. I focused on the walking (wheeled) and flying modes and built a Gazebo simulation plus custom perception and navigation pipelines.",
        "year":  "2023",
        "role":  "Researcher (M.S. Thesis)",
        "org":  "Northeastern University",
        "category":  [
                         "robotics",
                         "perception",
                         "research"
                     ],
        "tags":  [
                     "ROS",
                     "Gazebo",
                     "ArduPilot",
                     "Elevation Mapping",
                     "CNN",
                     "Path Planning",
                     "RealSense"
                 ],
        "cover":  "assets/projects/m4/m4-hero.jpg",
        "coverVideo":  "assets/projects/m4/m4-modes.mp4",
        "size":  "lg",
        "links":  {

                  },
        "body":  [
                     {
                         "type":  "h",
                         "text":  "Overview"
                     },
                     {
                         "type":  "p",
                         "text":  "This thesis makes the \u003cstrong\u003eM4 (Multi-Modal Mobility Morphobot)\u003c/strong\u003e more autonomous. M4 is a transforming robot designed for Mars exploration and search-and-rescue. My work lets it pick its own locomotion mode and path through complex terrain. I focused on the walking (wheeled) and flying modes and built a Gazebo simulation plus custom perception and navigation pipelines."
                     },
                     {
                         "type":  "p",
                         "text":  "A deep-learning model reads a \u003cstrong\u003e2.5D elevation map\u003c/strong\u003e and decides when the robot should switch modes. An energy-aware path planner, also built on the 2.5D map, was implemented and validated in simulation. The design can take on more modes later."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/m4-hero.jpg",
                         "caption":  "M4: a transforming robot that can drive on the ground, fly, crouch, tumble and balance as an MIP."
                     },
                     {
                         "type":  "video",
                         "src":  "assets/projects/m4/m4-modes.mp4",
                         "caption":  "M4"
                     },
                     {
                         "type":  "h",
                         "text":  "System Architecture"
                     },
                     {
                         "type":  "p",
                         "text":  "The pipeline has two halves. \u003cstrong\u003ePerception\u003c/strong\u003e turns point clouds from a single RealSense depth camera into localization, a 2.5D elevation map, a CNN traversability map and a combined multi-modal costmap. \u003cstrong\u003eNavigation\u003c/strong\u003e runs a 3D path planner (with path pruning and collision checks) that outputs waypoints tagged with a locomotion-mode flag. A mode selector then sends each segment to either the ArduPilot flight controller or the differential-drive controller."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/pipeline.png",
                         "caption":  "Perception and navigation pipeline for autonomous M4.",
                         "light":  true
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/ros-graph.png",
                         "caption":  "ROS computation graph of the full stack running in simulation.",
                         "light":  true
                     },
                     {
                         "type":  "h",
                         "text":  "Simulation"
                     },
                     {
                         "type":  "p",
                         "text":  "I built a URDF model of M4 for Gazebo, with a LiftDrag plugin for aerial mode, and connected it to \u003cstrong\u003eArduPilot SITL\u003c/strong\u003e through MAVROS. That gave me a realistic flight controller in the loop alongside the ground controllers."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/sim-ground.png",
                         "caption":  "Simulated ground mode"
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/sim-aerial.png",
                         "caption":  "Simulated aerial mode"
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/ardupilot-sitl.png",
                         "caption":  "Gazebo ↔ ArduPilot SITL ↔ MAVROS ↔ ROS integration.",
                         "light":  true
                     },
                     {
                         "type":  "video",
                         "src":  "assets/projects/m4/elevation-mapping.mp4",
                         "caption":  "Live elevation mapping in Gazebo in a Mars-like environment."
                     },
                     {
                         "type":  "h",
                         "text":  "Traversability \u0026 Mode Switching"
                     },
                     {
                         "type":  "p",
                         "text":  "A pre-trained CNN scores each cell of the height map for traversability. The planner uses those scores to decide where the robot can drive and where it should fly. When the mode flag changes along the path, the robot morphs, publishes the next segment and hands control to the right follower."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/traversability-cnn.jpg",
                         "caption":  "CNN-based traversability / foothold scoring on height maps."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/mode-switch-flow.png",
                         "caption":  "Mode-switching state machine between ground and aerial path following.",
                         "light":  true
                     },
                     {
                         "type":  "h",
                         "text":  "3D Path Planning: Edge Cases"
                     },
                     {
                         "type":  "p",
                         "text":  "The 3D planner runs on the 2.5D elevation data. I tested it on three edge cases:"
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/edge-case-1.png",
                         "caption":  "Edge case 1: an area wheels can\u0027t reach. The planner computes the cost and finds the best mixed path.",
                         "light":  true
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/edge-case-2.png",
                         "caption":  "Edge case 2: barriers where flying reaches the goal faster. Energy cost decides the trade-off.",
                         "light":  true
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/edge-case-3.png",
                         "caption":  "Edge case 3: crater exploration. Drive to the edge, detect the slope, fly over and land on flat ground.",
                         "light":  true
                     },
                     {
                         "type":  "h",
                         "text":  "Results"
                     },
                     {
                         "type":  "p",
                         "text":  "Compared with a drone-only baseline, the multi-modal planner used much less energy in every test. In the crater scenario it used \u003cstrong\u003e60 W vs 734 W\u003c/strong\u003e, because it drove wherever it could and flew only when needed."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/m4/results-table.png",
                         "caption":  "Path length, energy and time: M4 (flying + walking) vs drone-only.",
                         "light":  true
                     },
                     {
                         "type":  "callout",
                         "text":  "Future work: deploy on the physical M4, add more locomotion modes, and move perception fully on board for exploration and rescue missions."
                     }
                 ]
    },
    {
        "slug":  "aerobat-bio-inspired-uav",
        "title":  "Aerobat: A Bio-Inspired Bat-Morphology Flapping-Wing UAV",
        "short":  "\u003cstrong\u003eAerobat\u003c/strong\u003e is a wing-flapping UAV inspired by bat morphology. It was developed at the SiliconSynapse Lab under Prof. Alireza Ramezani, where I worked for more than 8 months. The robot weighs only \u003cstrong\u003e70 grams\u003c/strong\u003e and carries an onboard camera and IMU.",
        "year":  "2022",
        "role":  "Research Assistant",
        "org":  "SiliconSynapse Lab, Northeastern",
        "category":  [
                         "robotics",
                         "perception",
                         "research"
                     ],
        "tags":  [
                     "Flapping-wing UAV",
                     "Gazebo",
                     "PyTorch",
                     "RGB-D",
                     "Calibration",
                     "RTOS"
                 ],
        "cover":  "assets/projects/aerobat/aerobat-render.jpg",
        "coverVideo":  null,
        "size":  "tall",
        "links":  {

                  },
        "body":  [
                     {
                         "type":  "h",
                         "text":  "Overview"
                     },
                     {
                         "type":  "p",
                         "text":  "\u003cstrong\u003eAerobat\u003c/strong\u003e is a wing-flapping UAV inspired by bat morphology. It was developed at the SiliconSynapse Lab under Prof. Alireza Ramezani, where I worked for more than 8 months. The robot weighs only \u003cstrong\u003e70 grams\u003c/strong\u003e and carries an onboard camera and IMU."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/aerobat/aerobat-render.jpg",
                         "caption":  "Aerobat render (SiliconSynapse Lab).",
                         "light":  true
                     },
                     {
                         "type":  "h",
                         "text":  "My Contributions"
                     },
                     {
                         "type":  "list",
                         "items":  [
                                       "Worked on Aerobat from design through flight control to a working prototype, with simulation in Gazebo.",
                                       "Built a real-time computer-vision system for **depth estimation and obstacle avoidance** on an RGB-D camera with low latency.",
                                       "The CV system runs a deep neural network trained in **PyTorch**, based on the open-source MonoDepth algorithm.",
                                       "Wrote a robust sensor-calibration routine for launcher stability and camera calibration, which **cut testing time by 10%**."
                                   ]
                     },
                     {
                         "type":  "h",
                         "text":  "Flapping-Wing Test"
                     },
                     {
                         "type":  "youtube",
                         "id":  "X_UhhCvFC_Q",
                         "caption":  "Aerobat flapping-wing test."
                     },
                     {
                         "type":  "callout",
                         "text":  "This page covers Phase I only; newer results are still unpublished. Next steps: onboard image processing, onboard or offboard perception, and navigation in complex spaces such as tunnels."
                     }
                 ]
    },
    {
        "slug":  "covid-xray-cnn-svm",
        "title":  "Evaluating CNN vs SVM Classifiers for COVID-19 Chest X-Rays",
        "short":  "X-ray imaging is a non-invasive way to check the lungs for disease, but a medical specialist has to read the images, which limits mass screening. Image-processing tools can help by ruling out negative cases. This study measures how well a \u003cstrong\u003eVGG16-based CNN\u003c/strong\u003e and a \u003cstrong\u003eSupport Vector Machine\u003c/strong\u003e identify COVID-19 and pneumonia in chest radiographs, and how training-set size affects each.",
        "year":  "2021",
        "role":  "Team Project",
        "org":  "Northeastern University",
        "category":  [
                         "ai",
                         "research"
                     ],
        "tags":  [
                     "Deep Learning",
                     "VGG16",
                     "SVM",
                     "scikit-learn",
                     "Keras",
                     "Medical Imaging"
                 ],
        "cover":  "assets/projects/covid/xray-grid.png",
        "coverVideo":  null,
        "size":  "md",
        "links":  {

                  },
        "body":  [
                     {
                         "type":  "h",
                         "text":  "Overview"
                     },
                     {
                         "type":  "p",
                         "text":  "X-ray imaging is a non-invasive way to check the lungs for disease, but a medical specialist has to read the images, which limits mass screening. Image-processing tools can help by ruling out negative cases. This study measures how well a \u003cstrong\u003eVGG16-based CNN\u003c/strong\u003e and a \u003cstrong\u003eSupport Vector Machine\u003c/strong\u003e identify COVID-19 and pneumonia in chest radiographs, and how training-set size affects each."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/covid/xray-grid.png",
                         "caption":  "Sample chest X-rays from the dataset."
                     },
                     {
                         "type":  "h",
                         "text":  "Method"
                     },
                     {
                         "type":  "list",
                         "items":  [
                                       "Dataset: three classes (COVID-19, pneumonia, normal) from a Kaggle dataset collected by medical professionals.",
                                       "CNN: a pre-trained **VGG16** head for RGB feature extraction, fine-tuned for 3-class classification.",
                                       "SVM: the C-Support Vector Classification model from scikit-learn, fitted to the dataset.",
                                       "Pre-processing: normalized all images, because different machines and calibrations produced very different histograms."
                                   ]
                     },
                     {
                         "type":  "h",
                         "text":  "Results"
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/covid/training-curve.png",
                         "caption":  "CNN training/validation loss and accuracy (N = 1000)."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/covid/cnn-accuracy.png",
                         "caption":  "CNN validation accuracy vs training samples"
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/covid/svm-accuracy.png",
                         "caption":  "SVM validation accuracy vs training samples"
                     },
                     {
                         "type":  "h",
                         "text":  "Conclusions"
                     },
                     {
                         "type":  "list",
                         "items":  [
                                       "Both models need at least ~200 samples to reach 0.85+ accuracy on 3 classes.",
                                       "The CNN takes longer to train, and its accuracy depends heavily on dataset size. The SVM reaches its accuracy with less data.",
                                       "The SVM slightly outperforms the CNN on small training sets. They are about equal at ~500 samples.",
                                       "Both approaches could be extended to more lung conditions and reduce the load on specialists."
                                   ]
                     }
                 ]
    },
    {
        "slug":  "face-assistive-device",
        "title":  "FACE: An Assistive Wearable for Face Recognition",
        "short":  "FACE is for people with \u003cstrong\u003eprosopagnosia\u003c/strong\u003e, a common condition that makes it hard to recognize faces. It is more serious than a bad memory for faces, and there are no widely used assistive technologies for it. We took the basic idea of AR glasses and narrowed it to one job, face recognition, while keeping the device easy to use and cheap.",
        "year":  "2021",
        "role":  "Team Project",
        "org":  "Northeastern University",
        "category":  [
                         "ai",
                         "perception"
                     ],
        "tags":  [
                     "Python",
                     "OpenCV",
                     "FaceNet",
                     "SVM",
                     "Raspberry Pi",
                     "Firebase",
                     "Android"
                 ],
        "cover":  "assets/projects/face/demo.png",
        "coverVideo":  null,
        "size":  "md",
        "links":  {

                  },
        "body":  [
                     {
                         "type":  "h",
                         "text":  "Overview"
                     },
                     {
                         "type":  "p",
                         "text":  "FACE is for people with \u003cstrong\u003eprosopagnosia\u003c/strong\u003e, a common condition that makes it hard to recognize faces. It is more serious than a bad memory for faces, and there are no widely used assistive technologies for it. We took the basic idea of AR glasses and narrowed it to one job, face recognition, while keeping the device easy to use and cheap."
                     },
                     {
                         "type":  "p",
                         "text":  "The final device recognized a person\u0027s face and sent their name to the user through an \u003cstrong\u003eAndroid app\u003c/strong\u003e."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/face/demo.png",
                         "caption":  "FACE in use: a head-mounted camera and compute module, with the recognized name shown in the app."
                     },
                     {
                         "type":  "h",
                         "text":  "Architecture"
                     },
                     {
                         "type":  "p",
                         "text":  "A camera captures frames and a Raspberry Pi runs face detection and classification against a database of known faces. Results go through Firebase to the Android app."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/face/architecture.png",
                         "caption":  "System architecture: camera → Raspberry Pi → Firebase → Android app.",
                         "light":  true
                     },
                     {
                         "type":  "h",
                         "text":  "Algorithm"
                     },
                     {
                         "type":  "p",
                         "text":  "OpenCV\u0027s pre-trained Caffe face detector finds faces. A \u003cstrong\u003eFaceNet\u003c/strong\u003e model extracts 128-D embeddings, and a linear \u003cstrong\u003eSVM\u003c/strong\u003e (scikit-learn) classifies them. Everything is written in Python."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/face/pipeline.png",
                         "caption":  "Recognition pipeline: detection → 128-D embedding → SVM classification.",
                         "light":  true
                     },
                     {
                         "type":  "h",
                         "text":  "Demo"
                     },
                     {
                         "type":  "youtube",
                         "id":  "_BbqPGF5ySw",
                         "caption":  "Demo of the FACE device."
                     },
                     {
                         "type":  "youtube",
                         "id":  "0iKLYriaLk8",
                         "caption":  "Face-detection backend captured on a laptop."
                     },
                     {
                         "type":  "callout",
                         "text":  "FACE is small and portable, and it could make daily life much easier for people with prosopagnosia."
                     }
                 ]
    },
    {
        "slug":  "lidar-mapping-nuance",
        "title":  "LiDAR Mapping of Northeastern\u0027s Campus with the NUance Car",
        "short":  "We built a point-cloud map of part of the Northeastern campus by running the \u003cstrong\u003eLeGO-LOAM\u003c/strong\u003e SLAM algorithm on data from the NUance autonomous car. We modified the existing LeGO-LOAM code to work with our dataset.",
        "year":  "2022",
        "role":  "Team Project (Group 5)",
        "org":  "Northeastern University",
        "category":  [
                         "robotics",
                         "perception"
                     ],
        "tags":  [
                     "LeGO-LOAM",
                     "SLAM",
                     "Velodyne VLP-16",
                     "ROS",
                     "Loop Closure",
                     "A-LOAM",
                     "SC-LeGO-LOAM"
                 ],
        "cover":  "assets/projects/lidar/map-cover.png",
        "coverVideo":  null,
        "size":  "md",
        "links":  {

                  },
        "body":  [
                     {
                         "type":  "h",
                         "text":  "Overview"
                     },
                     {
                         "type":  "p",
                         "text":  "We built a point-cloud map of part of the Northeastern campus by running the \u003cstrong\u003eLeGO-LOAM\u003c/strong\u003e SLAM algorithm on data from the NUance autonomous car. We modified the existing LeGO-LOAM code to work with our dataset."
                     },
                     {
                         "type":  "p",
                         "text":  "LeGO-LOAM is a lightweight, ground-optimized LiDAR odometry and mapping system for ROS-compatible UGVs. It takes point clouds from a VLP-16 LiDAR and outputs a 6-DoF pose in real time, with much less computation than earlier LOAM implementations."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/lidar/nuance-car.jpg",
                         "caption":  "The NUance car, Northeastern\u0027s autonomous-vehicle research platform."
                     },
                     {
                         "type":  "h",
                         "text":  "Data Collection"
                     },
                     {
                         "type":  "p",
                         "text":  "We recorded rosbags around the Boston campus from the car\u0027s sensor suite: a \u003cstrong\u003eVelodyne VLP-16 Puck LiDAR\u003c/strong\u003e, a \u003cstrong\u003eVectorNav 9-DoF IMU\u003c/strong\u003e, \u003cstrong\u003eGPS\u003c/strong\u003e and a \u003cstrong\u003ethermal camera\u003c/strong\u003e."
                     },
                     {
                         "type":  "h",
                         "text":  "LeGO-LOAM Implementation"
                     },
                     {
                         "type":  "youtube",
                         "id":  "qz6qWGG_iS0",
                         "caption":  "Full walkthrough of the LeGO-LOAM implementation."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/lidar/legoloam-map.png",
                         "caption":  "Final LeGO-LOAM point-cloud map of the campus."
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/lidar/gps-vs-legoloam.png",
                         "caption":  "Trajectory: GPS vs LeGO-LOAM odometry."
                     },
                     {
                         "type":  "p",
                         "text":  "We also ran \u003cstrong\u003eA-LOAM\u003c/strong\u003e and \u003cstrong\u003eSC-LeGO-LOAM\u003c/strong\u003e for comparison."
                     },
                     {
                         "type":  "h",
                         "text":  "Loop Closure"
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/lidar/loop-closure-off.png",
                         "caption":  "Trajectory with loop closure OFF"
                     },
                     {
                         "type":  "img",
                         "src":  "assets/projects/lidar/loop-closure-on.png",
                         "caption":  "Trajectory with loop closure ON"
                     },
                     {
                         "type":  "callout",
                         "text":  "Conclusion: LeGO-LOAM handles loop closures well over short distances in static environments, but it struggles in dynamic environments and over long distances."
                     }
                 ]
    }
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'robotics', label: 'Robotics' },
  { id: 'perception', label: 'Perception' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'research', label: 'Research' }
];
