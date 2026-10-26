---
title: "Evaluating CNN vs SVM Classifiers for COVID-19 Chest X-Rays"
slug: "covid-xray-cnn-svm"
year: "2021"
role: "Team Project"
org: "Northeastern University"
category: ["ai", "research"]
tags: ["Deep Learning", "VGG16", "SVM", "scikit-learn", "Keras", "Medical Imaging"]
cover: "assets/projects/covid/xray-grid.png"
size: "md"
links:
  - label: "Full paper (PDF)"
    url: "assets/docs/covid-xray-classifier.pdf"
    icon: "doc"
metrics:
  - value: "~200"
    label: "Samples needed for 0.85+ accuracy"
  - value: "0.90"
    label: "CNN validation accuracy at 500 samples"
  - value: "0.91"
    label: "SVM accuracy, plateaus at 200 samples"
---

## Overview

X-ray imaging is a non-invasive way to check the lungs for disease, but a medical specialist has to read the images, which limits mass screening. Image-processing tools can help by ruling out negative cases. This study measures how well a **VGG16-based CNN** and a **Support Vector Machine** identify COVID-19 and pneumonia in chest radiographs, and how training-set size affects each.

![Sample chest X-rays from the dataset.](assets/projects/covid/xray-grid.png)

## Method

- Dataset: three classes (COVID-19, pneumonia, normal) from a Kaggle dataset collected by medical professionals.
- CNN: a pre-trained **VGG16** head for RGB feature extraction, fine-tuned for 3-class classification.
- SVM: the C-Support Vector Classification model from scikit-learn, fitted to the dataset.
- Pre-processing: normalized all images, because different machines and calibrations produced very different histograms.

## Results

![CNN training/validation loss and accuracy (N = 1000).](assets/projects/covid/training-curve.png)

![CNN validation accuracy vs training samples](assets/projects/covid/cnn-accuracy.png)
![SVM validation accuracy vs training samples](assets/projects/covid/svm-accuracy.png)

## Conclusions

- Both models need at least ~200 samples to reach 0.85+ accuracy on 3 classes.
- The CNN takes longer to train, and its accuracy depends heavily on dataset size. The SVM reaches its accuracy with less data.
- The SVM slightly outperforms the CNN on small training sets. They are about equal at ~500 samples.
- Both approaches could be extended to more lung conditions and reduce the load on specialists.
