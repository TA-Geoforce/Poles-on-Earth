# Poles on Earth 0.11

- [Poles on Earth 0.11](#poles-on-earth-011)
- [License](#license)
- [1. Introduction](#1-introduction)
- [2. Project Structure](#2-project-structure)
- [3. Methodology](#3-methodology)
  - [3.1 Imagery pipeline](#31-imagery-pipeline)
  - [3.1 Re-executing case areas](#31-re-executing-case-areas)
- [4. Results](#4-results)
  - [4.1 Koropi](#41-koropi)
  - [4.2 Tinos](#42-tinos)
  - [4.3 Palairos](#43-palairos)
- [5. Issues](#5-issues)
- [6. Changelog](#6-changelog)
  - [Poles on Earth 0.11](#poles-on-earth-011-1)
  - [Poles on Earth 0.10](#poles-on-earth-010)
- [7. Conclusions](#7-conclusions)


# License

These documents are licensed under the Apache 2 license, quoted below.

Copyright © 2020 T.A. Geoforce [https://tageoforce.com] All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    [http://www.apache.org/licenses/LICENSE-2.0]

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.

Contact: info@tageoforce.com

# 1. Introduction

Utility poles also called power poles or electricity poles, which support wires and electric cables that carry electricity from power companies to end users. These support three facilities including electric power, cable television, and telephone. Material used in the production of utility pole is wood, concrete, composite, and steel, and depending on the use of the material, life span of typical utility pole varies.

![](images/Power%20Poles%201.jpg "Utility pole")
*Chart 1. Source [web](https://www.materialsperformance.com/articles/material-selection-design/2019/01/control-of-environmental-degradation-of-concrete-power-poles)*

By Type: 
 - Transmission Poles
 - Distribution Poles
  
By Material:
 - Concrete
 - Wood
 - Steel
 - Composites
  
By Pole Size
 - Below 40ft
 - Between 40 & 70ft
 - Above 70ft

By Use
 - Electricity Transmission & Distribution
 - Telecommunication
 - Street Lighting
 - Heavy Power Lines
 - Subtransmission Lines
 - Others

**Poles on Earth** (https://polesonearth.com) is an AI project, which detects utility poles in global scale from satellite images using Deep Learning techniques.

The problem that **Poles on Earth** is answering is:
 - Detect the current status (or past status) of utility networks.
 - Compares and finds differences with past utility poles detections and discovers events (e.g. natural disasters, war etc.) the effect on the network development.
 - Perform network analytics depending transmission and distribution of electricity and telecommunication development and maintenance.

# 2. Project Structure

**Poles on Earth** (https://polesonearth.com) is separated in three parts:
 - Website (client): Users can select an area by drawing a rectangle and post a *Poles Object Detection* job to the **Poles on Earth** AI services.
 - AI services: API for posting poles detection jobs to **Poles on Earth** infrastructure.
 - Documentation: Open source documents where users can inform about **Poles on Earth** systems, technologies, ideas.

# 3. Methodology

**Poles on Earth** is designed and developed to handle large scale of job requests in a highly demand compute-processing resources. Using cloud scale infrastructure (AWS) and instances with GPU capacity, **Poles on Earth** can scale and increase compute capacity for any kind of ML training procedure.

## 3.1 Imagery pipeline

**Poles on Earth** proceed to contact all the possible satellite imagery provides that can provide:
 - global scale imagery service
 - ultra high resolution images
 - images that can be retrieved from a specific period.

![](images/imagary-download.jpg "Poles on Earth download pipeline")
*Chart 2. Poles on Earth imagery download pipeline*

After the selection of multiple satellite imagery providers, **Poles on Earth** developed custom APIs for communicating in-process with other satellite download data APIs.

## 3.1 Re-executing case areas

Since the data input of the ML pipeline was resigned, **Poles on Earth** set and new environment for executing ML pipelines that will:
 - increase the performance of the trained models
 - use the new data input pipeline 
 - decrease the training time

Evaluating from previous training procedures and detect bottlenecks into **Poles on Earth** pipelines and we developed the new strategies for fast performing training techniques.

Also, using the download imagery pipeline we increase dramatically the performance of handling large datasets and decrease the waiting time for downloading.

![alt txt](images/pipeline.jpg "Poles on Earth pipeline")
*Chart 3. Poles on Earth pipeline.*


Using our previous train datasets we re-executed all the case areas using other ML models with different parameters. **Poles on Earth** created new evaluation reports and maps.

| Experiment | Scenes | Model | Valid time   | Results |
|------------|--------|-------|--------------|---------|
|     1      |    3   |  0.10 |   4 hours    |   YES   |
|     2      |    2   |  0.10 |   4.7 hours  |   YES   |
|     3      |    3   |  0.11 |   4.9 hours  |   NO    |
|     4      |    1   |  0.11 |   1.2 hours  |   NO    |
|     5      |    3   |  0.10 |   3.5 hours  |   YES   |
|     6      |    2   |  0.10 |   3.2 hours  |   YES   |
|     7      |    3   |  0.11 |   2.5 hours  |   YES   |
|     8      |    2   |  0.11 |   1.8 hours  |   NO    |
|     9      |    3   |  0.11 |   2.4 hours  |   YES   |
*Table 1. **Poles on Earth** experiments evaluation performance execution pipeline.* 

The `Results` = `NO` means that either was stopped or crashed.

# 4. Results

## 4.1 Koropi

| Metric    | Telecommunication pole | Electricity pole | Lighting pole | Average |
|-----------|------------------------|------------------|---------------|---------|
| Precision |        0.25            |      0.57        |        0.5    |  0.511  |
| Recall    |        0.016           |      0.24        |        0.033  |  0.19   |
| F1        |        0.030           |      0.34        |        0.06   |  0.26   |
| Count Error |      -0.93           |     -0.56        |       -0.93   |  -0.661 |
| Ground Truth Count| 62.0           |      271         |        30.0   |   363   |
*Table 2. Koropi case area prediction metrics using model 0.11* 

![](images/koropi-good.0.11.png "Koropi electrical poles good performance")
*Chart 4. Koropi good performance of model 0.11* 


![](images/koropi-bad.0.11.png "Koropi electrical poles bad performance")
*Chart 5. Koropi bad performance of model 0.11*

![](images/Epoch_vs_Train_loss.png "Model evaluation 0.11 for Koropi scene - Epoch vs Train loss")
*Chart 6. Model evaluation 0.11 for Koropi scene - Epoch vs Train loss*

![](images/Epoch_vs_mAP.png "Model evaluation 0.11 for Koropi scene - Epoch vs medium Average Precision")
*Chart 7. Model evaluation 0.11 for Koropi scene - Epoch vs medium Average Precision*

## 4.2 Tinos

| Metric    | Telecommunication pole | Electricity pole | Lighting pole | Average |
|-----------|------------------------|------------------|---------------|---------|
| Precision |        0.31            |       0.42       |        0.89   |  0.43   |
| Recall    |        0.325           |      0.50        |        0.653  |  0.45   |
| F1        |        0.321           |      0.46        |        0.75   |  0.44   |
| Count Error |      0.023           |     0.186        |       -0.26   |  0.076  |
| Ground Truth Count| 86.0           |      123         |        26.0   |   235   |
*Table 3. Tinos case area prediction metrics using model 0.11* 

![](images/tinos-good.0.11.png "Tinos model's good performance")
*Chart 6. Tinos good performance of model 0.11* 

![](images/tinos-good2.0.11.png "Tinos model's good performance")
*Chart 7. Tinos good performance of model 0.11* 

## 4.3 Palairos

| Metric    | Telecommunication pole | Electricity pole | Lighting pole | Average |
|-----------|------------------------|------------------|---------------|---------|
| Precision |        0.22            |      0.71        |        0.73    |  0.59  |
| Recall    |        0.239           |      0.41        |        0.21  |  0.31   |
| F1        |        0.229           |      0.52        |        0.33  |  0.39   |
| Count Error |      0.086           |     -0.41        |       -0.70   |  -0.37 |
| Ground Truth Count| 46.0           |      84         |        51.0   |   181   |
*Table 4. Palairos case area prediction metrics using model 0.11* 

![](images/palairos-good.0.11.png "Palairos model's good performance")
*Chart 8. Palairos good performance of model 0.11* 


![](images/palairos-bad.0.11.png "Palairos model's bad performance")
*Chart 9. Palairos bad performance of model 0.11*


![](images/palairos-good-comparison.0.11.png "Palairos comparison with 0.10 model")
*Chart 10. Palairos comparison with 0.10 model. 0.10 with dashed line borders, 0.11 with continues line borders.*

# 5. Issues

 - Pipeline stability is still and issue and also the quality of the images still needs to be implemented.
 - Model's accuracy which still is in urban areas is very low. 
 - Uncertainty high of the current technique 
 - More models training consumes big resources of the project. 

# 6. Changelog

## Poles on Earth 0.11
 - Predictions are experimental
 - Model's average prediction 0.5
 - Download imagery pipeline from satellite providers (RTM)

## Poles on Earth 0.10

 - Predictions are experimental.
 - Initial results of 3 case areas were posted to [Poles on Earth demo] (https://polesonearth.com/demo)
 - Model's average prediction 0.4 
 - Payment service on production

# 7. Conclusions

**Poles on Earth** re-executing ML-pipelines:
  1. Manage to develop a stable environment for training large scale of datasets and decreasing the training time.
  2. Did not manage to discover a ML model that will perform significancy better than version 0.10
  3. Manage to decrease the True-Negatives (TN) results, so definitely are in the right direction.   