---
title: Music Auto Tagging
categories: projects
tags: [AI, music-tag, classification, metric-learning]
math: false
mermaid: false
---

2021 GCT634 hw2

***

## SUMMARY
In this homework, I implemented the given model of question 1 and the given metric of question 3, which are explained in section 1. I implemented and performed related experiments to verify the improvement suggestion for the multi-label classification of question 2 and the metric learning of question 4. I applied data augmentation, multi-channel mel-spectograms and practical searching for hyperparameters as common strategies for the two improved models. Further, musically motivated CNN, residual connection and focal loss function are suggested for the multi-label classification. In metric learning problem, I mainly focused on building a triplet data sampling strategy and suggested classification-based triplet sampling. Through the suggested approaches, the final improved models result in 0.86% roc accuracy and ({'R@1': 0.47634560692813116, 'R@2': 0.6166209464753155, 'R@4': 0.7485045429220182, 'R@8': 0.8455286622762342}) recall for each task. The approaches and detailed methods for the improvement are explained in section 2. Remained discussion and future study are summarized in section 3.


https://github.com/YoonjinXD/Music-Auto-Tagging

