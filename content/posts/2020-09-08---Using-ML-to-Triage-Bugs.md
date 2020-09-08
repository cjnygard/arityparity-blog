---
title: Using ML to Triage Bugs
date: '2020-09-07T19:06:32.169Z'
template: 'post'
draft: true
slug: 'ml-bug-triage'
category: 'Research'
tags:
  - 'Testing'
  - 'Software Development'
description: 'When your test suite takes too long to run, what do you do?  Apply ML strategies to rank and apply the most relevant tests first.'
socialImage: '/media/software-development-media.jpg'
author: cjnygard
---

### Learning for Test Prioritization: An Industrial Case Study

#### http://taoxie.cs.illinois.edu/publications/fse16industry-learning.pdf

As software systems grow, and especially as the rate of change increases, it becomes harder and harder to provide fast feedback to the developer.
What was once a ten-second build and test cycle lengthens as the complexity of services and systems grows, eventually becoming long enough to impact the development flow.

Techniques such as test selection (choosing relevant tests) and test prioritization (ordering tests) can be used to focus the testing efforts on the tests most likely to yield useful information to the developer.
This paper introduces the concept of using ML to rank the tests most likely to provide useful information based on the specific changes to the code.

#### The Approach

The approach taken combines a number of independent heuristics that can be applied to the problem independently, including:

- Text similarity
- Test age
- Coverage data
- Historical performance

Each of these individual strategies accel in specific scenarios.
Text similarity performs well for non-code changes, for example configuration files often share similar terms with the code.
Considering the test age allows for boosting new tests.
Using code coverage data can identify seemingly unrelated tests.
Code coverage combined with historical test performance can also identify tests which have detected issues in previous changes to similar code.

> The main practical benefits of our approach are that it leverages abundant data of test results available in practice, facilitates exploration of new predictive features, and performs well for various types of changes and tests.
> To the best of our knowledge, our work is the first that reduces the problem of test prioritization to that of learning to rank.

#### The Results

![ml-test-rank-fig0.png](/media/ml-test-rank-fig0.png)

_Figure 0: Average Recall_

The graph in Figure 0 shows the result curves for each of the individual strategies, as well as the results given by the model.

As you can see in the following table of results, the ML model significantly outperforms any individual ranking heuristic.
With 50% of failures being detected by just 0.2% of the test suite (72 total) and 75% of test failures detected by 3% (1368 total) of the tests, executing the test suite in the ranked order _specific to the change_ has potential to significantly reduce the developer cycle-time.
The speed with which developers can gain confidence in their code is correspondingly increased.

![ml-test-rank-table0.png](/media/ml-test-rank-table0.png)

_Table 0: Average recall by number of tests_

#### The Future

The ranking model is (currently) built on only five features: Java code coverage, text path similarity, text content similarity, failure history, and test age.
Future work is planned to investigate other features such as file types and coverage for other languages.
