---
title: "Autonomous M4 Morphobot: Traversability Mapping & 3D Path Planning"
slug: "m4-morphobot-autonomy"
year: "2023"
role: "Researcher (M.S. Thesis)"
org: "Northeastern University"
category: ["robotics", "perception", "research"]
tags: ["ROS", "Gazebo", "ArduPilot", "Elevation Mapping", "CNN", "Path Planning", "RealSense"]
cover: "assets/projects/m4/m4-hero.jpg"
coverVideo: "assets/projects/m4/m4-modes.mp4"
size: "lg"
links:
  - label: "Read the thesis"
    url: "https://repository.library.northeastern.edu/files/neu:4f21z8919"
    icon: "doc"
metrics:
  - value: "2"
    label: "Locomotion modes planned jointly (ground + aerial)"
  - value: "~92%"
    label: "Less energy than a drone-only path in the crater test"
  - value: "2.5D"
    label: "Elevation and traversability maps from one depth camera"
---

## Overview

This thesis makes the **M4 (Multi-Modal Mobility Morphobot)** more autonomous. M4 is a transforming robot designed for Mars exploration and search-and-rescue. My work lets it pick its own locomotion mode and path through complex terrain. I focused on the walking (wheeled) and flying modes and built a Gazebo simulation plus custom perception and navigation pipelines.

A deep-learning model reads a **2.5D elevation map** and decides when the robot should switch modes. An energy-aware path planner, also built on the 2.5D map, was implemented and validated in simulation. The design can take on more modes later.

![M4: a transforming robot that can drive on the ground, fly, crouch, tumble and balance as an MIP.](assets/projects/m4/m4-hero.jpg)

<video src="assets/projects/m4/m4-modes.mp4" caption="M4's different modes of operation."></video>

## System Architecture

The pipeline has two halves. **Perception** turns point clouds from a single RealSense depth camera into localization, a 2.5D elevation map, a CNN traversability map and a combined multi-modal costmap. **Navigation** runs a 3D path planner (with path pruning and collision checks) that outputs waypoints tagged with a locomotion-mode flag. A mode selector then sends each segment to either the ArduPilot flight controller or the differential-drive controller.

![Perception and navigation pipeline for autonomous M4.](assets/projects/m4/pipeline.png){light}

![ROS computation graph of the full stack running in simulation.](assets/projects/m4/ros-graph.png){light}

## Simulation

I built a URDF model of M4 for Gazebo, with a LiftDrag plugin for aerial mode, and connected it to **ArduPilot SITL** through MAVROS. That gave me a realistic flight controller in the loop alongside the ground controllers.

![Simulated ground mode](assets/projects/m4/sim-ground.png)
![Simulated aerial mode](assets/projects/m4/sim-aerial.png)

![Gazebo ↔ ArduPilot SITL ↔ MAVROS ↔ ROS integration.](assets/projects/m4/ardupilot-sitl.png){light}

<video src="assets/projects/m4/elevation-mapping.mp4" caption="Live elevation mapping in Gazebo in a Mars-like environment."></video>

## Traversability & Mode Switching

A pre-trained CNN scores each cell of the height map for traversability. The planner uses those scores to decide where the robot can drive and where it should fly. When the mode flag changes along the path, the robot morphs, publishes the next segment and hands control to the right follower.

![CNN-based traversability / foothold scoring on height maps.](assets/projects/m4/traversability-cnn.jpg)

![Mode-switching state machine between ground and aerial path following.](assets/projects/m4/mode-switch-flow.png){light}

## 3D Path Planning: Edge Cases

The 3D planner runs on the 2.5D elevation data. I tested it on three edge cases:

![Edge case 1: an area wheels can't reach. The planner computes the cost and finds the best mixed path.](assets/projects/m4/edge-case-1.png){light}

![Edge case 2: barriers where flying reaches the goal faster. Energy cost decides the trade-off.](assets/projects/m4/edge-case-2.png){light}

![Edge case 3: crater exploration. Drive to the edge, detect the slope, fly over and land on flat ground.](assets/projects/m4/edge-case-3.png){light}

## Results

Compared with a drone-only baseline, the multi-modal planner used much less energy in every test. In the crater scenario it used **60 W vs 734 W**, because it drove wherever it could and flew only when needed.

![Path length, energy and time: M4 (flying + walking) vs drone-only.](assets/projects/m4/results-table.png){light}

> Future work: deploy on the physical M4, add more locomotion modes, and move perception fully on board for exploration and rescue missions.
