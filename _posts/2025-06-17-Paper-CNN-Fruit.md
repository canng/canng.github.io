---
layout: post
title: 📰 Deep learning for Fruit tree Classification on RSASE
date: 2025-06-17 00:00:00
description: Leveraging Convolutional Neural Networks and Textural Features for Tropical Fruit Tree Species Classification
tags: work publication 
categories: work
---

<hr>
<br>

### Abstract 

Mapping fruit tree species is an essential task in agricultural planning and management. However, the classification of tropical fruit tree species faces many technical challenges because of their identical leaf characteristics, especially in developing countries with limited accessibility to data and advanced technologies. This study attempts to evaluate the effectiveness of currently available satellite images (Sentinel-2 and Planet) and Gray-level co-occurrence matrix (GLCM) textural features in discriminating tropical fruit trees using a conventional neural network (CNN) compared to other machine learning algorithms. Spectral bands and textural features from Sentinel-2 and Planet images were extracted to input into the CNN model, as well as other five commonly used machine learning models, including K-Nearest Neighbor (KNN), Gradient Boosting Machine (GBM), Naive Bayes (NB), Random Forest (RF), and Support Vector Machine (SVM). The classification results were evaluated based on performance metrics of accuracy, F1-score, and spatial agreement of classified maps. The contribution of each variable in the classification was identified using permutation feature importance. The research findings revealed that the CNN model outperformed the other machine learning models in detecting five major fruit trees (i.e., coconut, coconut intercropping, durian, pomelo, and rambutan). The most important contributions to mapping performance were constituted by spectral bands from Sentinel-2 (e.g., shortwave infrared-SWIR, Blue, and Vegetation Red-Edge bands), while Planet image provides vital textural information such as Entropy (ENT), Angular Second Moment (ASM), sum average (SA), and homogeneity (HOM). The research provides valuable insights into classifying tropical fruit trees using entirely free data sources, avoiding the need for costly and complex alternatives. It also presents significant potential for applications in other tropical regions, contributing to sustainable agricultural management.
<br>

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/pubpic/2025/CNN_Fruit_01.jpg" width="80%" %}
</div>
<div class="caption">
    Chau Thanh district in Southern Vietnam and locations of ground truth points collected during field survey campaigns. The background is Sentinel-2 image (True color composite).
</div>


<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/pubpic/2025/CNN_Fruit_01.jpg" width="80%" %}
</div>
<div class="caption">
    Field photos of five major fruit tree species demonstrate potential differences in distribution and canopy structure. Source: Authors own field photos.
</div>

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/pubpic/2025/CNN_Fruit_02.jpg" width="80%" %}
</div>
<div class="caption">
    The proposed concept of CNN model architecture.
</div>


<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/pubpic/2025/CNN_Fruit_03.jpg" width="80%" %}
</div>
<div class="caption">
    Heatmap illustrates overlapping rates between different pairs of fruit trees over spectral bands and textural indices. Prefix P. indicates Planet-derived information. Dendrograms group fruit tree combination and indices into identical clusters.
</div>


<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/pubpic/2025/CNN_Fruit_05.jpg" width="80%" %}
</div>
<div class="caption">
    Fruit tree maps obtained from different machine learning and CNN models based on spectral and textural indices from Sentinel-2 and Planet images (left panel) and spatial agreement between classified maps and reference layer (right panel). True = Matched, False = Unmatched.
</div>


<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/pubpic/2025/CNN_Fruit_06.jpg" width="80%" %}
</div>
<div class="caption">
    Classified fruit tree map obtained from CNN model using spectral and textural indices from Sentinel-2 and Planet images.
</div>

<br>

> <p style="font-size:15px"> <b>Nguyen, C. T.*</b>, Diem, K. P.*, Nghia, D. H., Diem, N. K., Diep, N. T. H., Phan, T. N., Minh, V. Q., Quang, N. H., 2025. <b>Leveraging Convolutional Neural Networks and Textural Features for Tropical Fruit Tree Species Classification</b>. Remote Sensing Applications: Society and Environment. 39, August 2025, 101633   <a href="https://doi.org/10.1016/j.rsase.2025.101633">DOI: 10.1016/j.rsase.2025.101633</a><a href="https://canng.github.io/assets/pdf/2025_RSASE_CNN_TropiTrees.pdf">  <i class="fa-solid fa-file-pdf"></i></a></p> 