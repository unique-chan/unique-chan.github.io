---
title: "ThermEval: A Structured Benchmark for Evaluation of Vision-Language Models on Thermal Imagery"
description: "ACM KDD 2026"
publishedAt: 2026-09-01
tags: ["Paper Review"]
language: "ko"
draft: false # false로 해야 웹 사이트에 표시됨!
---


오늘 읽어볼 논문:
- Shrivastava, Ayush, et al. "ThermEval: A Structured Benchmark for Evaluation of Vision-Language Models on Thermal Imagery." Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining. 2026.


## 요약

> ThermEval-B라는 벤치마크와 ThermEval-D라는 추가 데이터셋을 제안한다.

> 위 벤치마크 및 데이터셋을 이용하여, 현재 존재하는 Vision-Language Model (VLM)은 RGB 이미지는 잘 이해하지만, 열화상 이미지에서 ``**온도**라는 물리량''을 실제로 이해하고, 추론하는 능력은 상당히 부족하다는 사실을 밝힌다.



## 연구 동기

열화상 영상은 RGB와 본질적으로 다릅니다. RGB는 색과 질감 (Texture)를 담습니다. 반면, 열화상 영상은 **온도 (Temperature)** 및 **복사 (Emitted Radiation) 에너지**를 표현합니다.
따라서 열화상 영상에서는 단순히 객체를 인식 (Object Recognition)하는 것만이 중요한 것이 아닙니다. 다음과 같은 Physical Grounding도 필요합니다:
- 이것이 진짜 열화상 영상인가?
- 열화상 영상이 따르는 컬러 바 (팔레트)는?
- 사람 A와 사람 B 중 누가 더 뜨거운가?
- 특정 픽셀 및 신체 부위의 온도는 얼마인가?

기존에는 이러한 역량을 평가하는 벤치마크가 없었습니다.

