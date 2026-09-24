---
title: "Kullback-Leibler Divergence"
description: "KLD가 어떻게 등장하게 되었을까?"
publishedAt: 2026-09-01
tags: ["Machine Learning"]
language: "ko"
draft: false # false로 해야 웹 사이트에 표시됨!
---

어떤 두 확률분포 $P$와 $Q$가 있다고 합시다. 데이터 $x$ 하나를 관찰했을 때, 

$\frac{P(x)}{Q(x)}=2$

라면, $x$는 $P$에서 나올 가능성이 $Q$보다 2배 높다는 것을 의미합니다.


위와 같은 강도를 갖는 독립적인 증거를 $x^{(2)}$과 $x^{(3)}$를 더 관측하면 어떻게 될까요?

| 증거 | 증거 개수 | $P$가 지지받는 배수 | $\log_{2}$ 값 |
|---|---|---:|---:|
| $x$                       | 1 | $\frac{P(x)}{Q(x)}=2$                                                                                | 1 |
| $x$, $x^{(2)}$            | 2 | $\frac{P(x) \times P(x^{(2)})}{Q(x) \times Q(x^{(2)})}=2 ^ 2 = 4$                                    | 2 |
| $x$, $x^{(2)}$, $x^{(3)}$ | 3 | $\frac{P(x) \times P(x^{(2)}) \times P(x^{(3)})}{Q(x) \times Q(x^{(2)}) \times Q(x^{(3)})}=2 ^ 3= 8$ | 3 |


똑같은 증거가 하나씩 추가됨에 따라, 증거량도 1, 2, 3처럼 일정하게 증가하는 것이 자연스럽습니다. 이를 가능케 하는 함수가 Log입니다: 

$\log(ab) = \log a + \log b$.


