---
title: "Aerobat: A Bio-Inspired Bat-Morphology Flapping-Wing UAV"
slug: "aerobat-bio-inspired-uav"
year: "2022"
role: "Research Assistant"
org: "SiliconSynapse Lab, Northeastern"
category: ["robotics", "perception", "research"]
tags: ["Flapping-wing UAV", "Gazebo", "PyTorch", "RGB-D", "Calibration", "RTOS"]
cover: "assets/projects/aerobat/aerobat-render.jpg"
size: "tall"
links:
  - label: "SiliconSynapse Lab"
    url: "https://web.northeastern.edu/silicon-synapse/"
    icon: "link"
---

## Overview

**Aerobat** is a wing-flapping UAV inspired by bat morphology. It was developed at the SiliconSynapse Lab under Prof. Alireza Ramezani, where I worked for more than 8 months. The robot weighs only **70 grams** and carries an onboard camera and IMU.

![Aerobat render (SiliconSynapse Lab).](assets/projects/aerobat/aerobat-render.jpg){light}

## My Contributions

- Worked on Aerobat from design through flight control to a working prototype, with simulation in Gazebo.
- Built a real-time computer-vision system for **depth estimation and obstacle avoidance** on an RGB-D camera with low latency.
- The CV system runs a deep neural network trained in **PyTorch**, based on the open-source MonoDepth algorithm.
- Wrote a robust sensor-calibration routine for launcher stability and camera calibration, which **cut testing time by 10%**.

## Flapping-Wing Test

<youtube id="X_UhhCvFC_Q" caption="Aerobat flapping-wing test."></youtube>

> This page covers Phase I only; newer results are still unpublished. Next steps: onboard image processing, onboard or offboard perception, and navigation in complex spaces such as tunnels.
