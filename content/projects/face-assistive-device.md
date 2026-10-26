---
title: "FACE: An Assistive Wearable for Face Recognition"
slug: "face-assistive-device"
year: "2021"
role: "Team Project"
org: "Northeastern University"
category: ["ai", "perception"]
tags: ["Python", "OpenCV", "FaceNet", "SVM", "Raspberry Pi", "Firebase", "Android"]
cover: "assets/projects/face/demo.png"
size: "md"
links:
  - label: "Full report (PDF)"
    url: "assets/docs/face-report.pdf"
    icon: "doc"
  - label: "Code on GitHub"
    url: "https://github.com/Rohitra078"
    icon: "github"
---

## Overview

FACE is for people with **prosopagnosia**, a common condition that makes it hard to recognize faces. It is more serious than a bad memory for faces, and there are no widely used assistive technologies for it. We took the basic idea of AR glasses and narrowed it to one job, face recognition, while keeping the device easy to use and cheap.

The final device recognized a person's face and sent their name to the user through an **Android app**.

![FACE in use: a head-mounted camera and compute module, with the recognized name shown in the app.](assets/projects/face/demo.png)

## Architecture

A camera captures frames and a Raspberry Pi runs face detection and classification against a database of known faces. Results go through Firebase to the Android app.

![System architecture: camera → Raspberry Pi → Firebase → Android app.](assets/projects/face/architecture.png){light}

## Algorithm

OpenCV's pre-trained Caffe face detector finds faces. A **FaceNet** model extracts 128-D embeddings, and a linear **SVM** (scikit-learn) classifies them. Everything is written in Python.

![Recognition pipeline: detection → 128-D embedding → SVM classification.](assets/projects/face/pipeline.png){light}

## Demo

<youtube id="_BbqPGF5ySw" caption="Demo of the FACE device."></youtube>

<youtube id="0iKLYriaLk8" caption="Face-detection backend captured on a laptop."></youtube>

> FACE is small and portable, and it could make daily life much easier for people with prosopagnosia.
