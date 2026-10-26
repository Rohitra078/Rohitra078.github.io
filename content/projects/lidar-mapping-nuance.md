---
title: "LiDAR Mapping of Northeastern's Campus with the NUance Car"
slug: "lidar-mapping-nuance"
year: "2022"
role: "Team Project (Group 5)"
org: "Northeastern University"
category: ["robotics", "perception"]
tags: ["LeGO-LOAM", "SLAM", "Velodyne VLP-16", "ROS", "Loop Closure", "A-LOAM", "SC-LeGO-LOAM"]
cover: "assets/projects/lidar/map-cover.png"
size: "md"
links:
  - label: "Project slides (PDF)"
    url: "assets/docs/lidar-mapping-nuance.pdf"
    icon: "doc"
  - label: "Code on GitHub"
    url: "https://github.com/Rohitra078"
    icon: "github"
---

## Overview

We built a point-cloud map of part of the Northeastern campus by running the **LeGO-LOAM** SLAM algorithm on data from the NUance autonomous car. We modified the existing LeGO-LOAM code to work with our dataset.

LeGO-LOAM is a lightweight, ground-optimized LiDAR odometry and mapping system for ROS-compatible UGVs. It takes point clouds from a VLP-16 LiDAR and outputs a 6-DoF pose in real time, with much less computation than earlier LOAM implementations.

![The NUance car, Northeastern's autonomous-vehicle research platform.](assets/projects/lidar/nuance-car.jpg)

## Data Collection

We recorded rosbags around the Boston campus from the car's sensor suite: a **Velodyne VLP-16 Puck LiDAR**, a **VectorNav 9-DoF IMU**, **GPS** and a **thermal camera**.

## LeGO-LOAM Implementation

<youtube id="qz6qWGG_iS0" caption="Full walkthrough of the LeGO-LOAM implementation."></youtube>

![Final LeGO-LOAM point-cloud map of the campus.](assets/projects/lidar/legoloam-map.png)

![Trajectory: GPS vs LeGO-LOAM odometry.](assets/projects/lidar/gps-vs-legoloam.png)

We also ran **A-LOAM** and **SC-LeGO-LOAM** for comparison.

## Loop Closure

![Trajectory with loop closure OFF](assets/projects/lidar/loop-closure-off.png)
![Trajectory with loop closure ON](assets/projects/lidar/loop-closure-on.png)

> Conclusion: LeGO-LOAM handles loop closures well over short distances in static environments, but it struggles in dynamic environments and over long distances.
