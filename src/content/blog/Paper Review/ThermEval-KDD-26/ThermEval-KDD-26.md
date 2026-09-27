---
title: "ThermEval: A Structured Benchmark for Evaluation of Vision-Language Models on Thermal Imagery"
description: "ACM KDD 2026"
publishedAt: 2026-09-01
tags: ["Paper Review"]
language: "ko"
draft: false # false로 해야 웹 사이트에 표시됨!
---

<style>
img {
  width: 800px;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
    border-radius: 16px;
}
</style>



오늘 읽어볼 논문:
- Shrivastava, Ayush, et al. "ThermEval: A Structured Benchmark for Evaluation of Vision-Language Models on Thermal Imagery." Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining. 2026.


## 요약

- `ThermEval-B`라는 벤치마크와 `ThermEval-D`라는 데이터셋을 제안한다.

    - 참고
        - 벤치마크: 모델 성능을 공정하게 비교하기 위한 평가 체계 전체
            - 즉, 벤치마크 = 데이터 + 태스크 + 평가 메트릭 + 평가 프로토콜
        - 데이터셋: 학습이나 평가에 사용하는 데이터 자체

- 위 벤치마크 및 데이터셋을 이용하여, 현재 존재하는 Vision-Language Model (VLM) 대부분이 RGB 이미지는 잘 이해하지만, 열화상 이미지에서 ``**온도**라는 물리량''을 실제로 이해하고 추론하는 능력은 상당히 부족하다는 사실을 밝힌다.





## 연구 동기

열화상 영상은 RGB와 본질적으로 다릅니다. RGB는 색과 질감 (Texture)를 담습니다. 반면, 열화상 영상은 **온도 (Temperature)** 및 **복사 (Emitted Radiation) 에너지**를 표현합니다.
따라서 열화상 영상에서는 단순히 객체를 인식 (Object Recognition)하는 것만이 중요하지 않죠. 대신 다음과 같은 **Physical Grounding**(- 모델이 열화상 영상에 관측된 신호를 실제 온도/복사 물리량과 연결해 해석하는 능력 -)도 필요합니다:


- 이것이 진짜 열화상 영상인가?
- 열화상 영상이 따르는 컬러 바 (팔레트)는?
- 사람 A와 사람 B 중 누가 더 뜨거운가?
- 특정 픽셀 및 신체 부위의 온도는 얼마인가?


기존에는 이러한 역량을 평가하는 벤치마크가 없었습니다. 이에 따라 저자들은 `ThermEval-B`라는 벤치마크를 제안합니다.


## ThermEval-B: 벤치마크

ThermEval-B 벤치마크는 아래 3가지 데이터셋을 활용합니다:

- FLIR [1] (기존 RGB-열화상 쌍 데이터셋) 
- LLVIP [2] (기존 RGB-열화상 쌍 데이터셋)
- ThermEval-D (저자가 제안하는 추가 열화상 데이터셋)
  - ThermEval-D는 뒤에서 자세히 설명합니다.


위 세 데이터셋을 바탕으로 저자들은 총 7개 Task, 약 55.9K VQA 샘플로 벤치마크를 구성하였습니다.

![Overview of ThermEval-B](./Overview.png)


| Task | 질문 | 사용 데이터셋 |
| --- | --- | --- |
| T1 | Thermal인가? RGB인가? | FLIR, LLVIP (RGB-T 쌍 모두 사용) |
| T2 | Colormap이 바뀌어도 Thermal임을 알아보는가? | FLIR, LLVIP (T만 활용) |
| T3 | Thermal Image에서 People Counting을 잘 하는가? | FLIR, LLVIP (T만 활용) |
| T4 | Color Bar를 찾고 Min/Max Temperature를 읽는가? | ThermEval-D |
| T5 | 어느 사람이 더 뜨거운가? 또, 어느 신체 부위 (이마/코/...)가 더 뜨거운가? | ThermEval-D |
| T6 | 특정 Pixel/Region의 절대 온도를 추정할 수 있는가? | ThermEval-D |
| T7 | 촬영 거리 변화에 강건한 온도 추정이 가능한가? | ThermEval-D |


## ThermEval-D: 데이터셋

저자들은 기존에 공개된 열화상 데이터셋들이 실제 **Pixel-Level Temperature Ground Truth**가 없다는 점을 지적합니다.

그래서 저자들은 ThermEval-D 데이터셋을 구축했습니다:

- 35명 성인을 섭외하여 실내/외에서 1,000장의 열화상 영상 취득;
- Pixel별 Temperature (즉, $(x, y) \rightarrow T [^\circ C]$) 정보 제공;
- 이마 / 코 / 가슴 / 사람 세그멘테이션 Annotation 실시.


## VLM 벤치마킹 실험

### - 사용한 VLM 모델

25개 VLM = 17개 오픈소스 모델, 4개 클로즈드 소스 모델, 3개의 오픈소스 차트 특화 모델, 1개의 특별하게 미세조정된 오픈소스 모델

| 모델 | 파라미터 크기 | 비고 |
| --- | --- | --- |
| InternVL 3 [3] (CVPR 24, 상하이AI연구소) | 8B, 14B, 38B | 오픈소스 |
| LLaVA 1.5 [4] (ICCV 25, 베이징대) | 7B | 오픈소스 |
| LLaMA 3.2 [5] (Arxiv 24, Meta) | 11B | 오픈소스 |
| MiniCPM-V 2.6 [6] (Nature Communications 25, 청화대) | 8B | 오픈소스 |
| Phi-3 [7] (Arxiv 24, Microsoft) | 4.2B | 오픈소스 |
| Phi-3.5 [7] | 7B | 오픈소스 |
| Qwen-VL [8] (Arxiv 23, Alibaba) | 7B | 오픈소스 |
| Qwen-VL 2.5 | 7B, 33B | 오픈소스 |
| Qwen A22 | 235B | 오픈소스 |
| PaliGemma-2 [9] (Arxiv 24, Google DeepMind) | 3B | 오픈소스 |
| IDEFICS-3 [10] (Arxiv 24, HuggingFace) | 6.7B | 오픈소스 |
| Smol-VLM [11] (Arxiv 25, HuggingFace) | 256M | 오픈소스 |
| Jina-VLM [12] (ICLR-W 26, Jina AI) | 2.4B | 오픈소스 |
| BLIP-2 [13] (ICML 23, Salesforce) | 9B | 오픈소스 |
| Gemini 3 Pro [14-15] (Google DeepMind) | - | 클로즈드 |
| Gemini 3 Flash | - | 클로즈드 |
| Gemini 2.5 Pro | - | 클로즈드 |
| Gemini 2.5 Flash | - | 클로즈드 |
| ChartGemma [16] (COLING 25, 요크대) | 3B | 오픈소스 (차트 특화) |
| ChartInstruct LLaMA-2 [17] (ACL-F 24, 요크대) | 7B | 오픈소스 (차트 특화) |
| TinyCharts [18] (EMNLP 24, 중국인민대) | 3B | 오픈소스 (차트 특화) |
| Qwen-VL 2.5 | 7B | 오픈소스 (저자가 직접 파인튜닝) |


### - 평가 프로토콜

- [Step 1] 기본 평가는 모든 모델에 대해 **Zero-Shot Prompting** 방식으로 수행합니다.
    - 열화상 데이터로 별도의 미세조정을 하지 않은 상태에서 고정된 프롬프트 템플릿을 사용해 성능을 측정합니다.

- [Step 2] 이후 **Prompting**만으로 성능이 좋아질 수 있는지 확인합니다.
    - Standard Zero-Shot Prompt vs. Context-Augmented Prompt

- [Step 3] 최종적으로, **Supervised Fine-Tuning (SFT)**을 하여 성능이 얼마나 더 좋아지는지 확인합니다.
    - Qwen-VL-2.5 (7B) 활용


### - 평가 트릭 (A) LLM as a Parser

VLM들에게 "한 단어만 답해라," "숫자 하나만 반환해라"고 지시해도, 실제 출력 형식이 제각각인 경우가 많습니다. 예로, 정답 형식이
$$
34.2
$$
여야 하는데, 모델이

    > The estimated temperature is around 34.2 degrees Celsius!

라고 답할 수 있습니다.

이를 그대로 Exact Match 방식으로 채점하면, 내용은 맞는데 형식 때문에 틀린 답으로 처리됩니다.

이에 따라, 저자들은 Gemini 2.5 계열의 Language-Only LLM을 Parser로 사용합니다. 이 Parser는 입력 이미지에는 접근하지 않고 VLM이 생성한 텍스트만 봅니다. 분류 (Classification) 태스크에서는 Class Label을, Regression 태스크에서는 Numerical Value를 추출합니다.

저자들은 정규표현식 (Regex) 기반의 Parsing도 고려했지만, 모델 출력 형식이 다양해서 다루기 힘들어 (Brittle), [19-20]와 같이 LLM-Based Parsing을 채택했다고 제시합니다.



### - 평가 트릭 (B) Benchmarking the Parser


그런데 LLM-Based Parsing도 여전히 틀릴 수 있습니다. 고로 저자들은 Parser 자체를 직접 검증했습니다.

아래와 같이 Stratified Gold Set (- 전체 데이터에서 종류 (Strata)별로 골고루 뽑아서 만든 검증용 표본집합 -)을 만들고, 사람이 정답 Parsing 결과를 확인합니다.

$$
\text{전체 데이터}
\rightarrow
\begin{cases}
\text{Task별}\\
\text{VLM Model별}\\
\text{Answer Type별}
\end{cases}
\rightarrow
\text{각 그룹에서 추출}
\rightarrow
\text{인간 검수}
$$

그 다음 Gemini Parser의 출력과 Human-verified 결과가 얼마나 일치하는지 측정했습니다. 그 결과는:

- Gemini 2.5 Pro: 99.01%;
- Gemini 2.5 Flash: 99.07%;
- Gemini 2.5 Flash Lite: 98.24%

의 모델-사람 간 Consensus를 보였습니다. 오류 대부분은 Parser 자체의 명백한 실패라기보다, 원래 VLM response가 애매하게 생성된 경우에서 발생했다고 설명합니다.


그런데, 70만개 출력 (50,000 VQA 예시 $\times$ 14개 모델)이 있을 때, LLM Parser가 정말 믿을 만한지 검증하려면, 최소 몇 개를 사람이 직접 확인해야 할까요? (단, $95\% \pm 3\%$의 정밀도를 목표로 한다고 합시다.) 통계적으로 1,065개입니다. (- 논문에는 1,067이라고 나와있으나 잘못 기술된 것으로 보입니다 -) 더 상세한 이야기는 [여기](#부록-a-llm-파서-평가를-위한-샘플-크기-정당화)를 살펴주시기 바랍니다.


### - 실험 결과 <작성 예정>

<작성 예정>






## [부록-A] LLM 파서 평가를 위한 샘플 크기 정당화

### - Cochran 공식

Cochran 공식 [21]은 **모집단의 어떤 비율 $p$을 추정하기 위해 표본을 몇 개 뽑아야 하는지**를 정할 때 사용하는 대표적인 표본크기 산정 공식입니다.

예로, 전체 고객 중 몇 %가 특정 서비스를 만족하는지 알고 싶다고 하죠 (이 값이 위에서 말한 $p$겠죠?). 모든 고객을 조사할 수 있다면 가장 정확하겠지만, 실제로는 시간과 비용 문제로 인해 일부만 조사하게 됩니다 (- 또, 설문조사에 응하지 않는 고객들도 많을테니까요... -). 이때 중요한 질문은 다음과 같습니다.

    > p을 어느 정도 정확도 (신뢰도)로 추정하려면, 최소 몇 명을 조사해야 할까?

Cochran 공식은 바로 이 질문에 답하기 위한 방법입니다.

기본식은 다음과 같습니다:
$$
n_0=\frac{Z^2p(1-p_0)}{e^2},
$$

여기서
- $n_0$: 필요한 표본 수 (- 우리가 구하고자 하는 값 -);
- $Z$: 원하는 신뢰수준에 대응하는 값;
- $p_0$: 모집단에서 관심 대상이 차지할 것으로 예상하는 비율 (실제 모집단 비율이 아님);
- $e$: 허용하고 싶은 오차 범위.

가령 95% 신뢰수준에서 결과를 $\pm$5% 포인트 오차로 $n_0$를 추정하고 싶다고 합시다. 그런데, 모집단에서 관심 대상이 차지할 것으로 예상하는 비율 $p_0$는 사실 알 수 없습니다. 이 경우 보통 가장 보수적인 값 $p_0=0.5$로 쓰면 됩니다 (이유가 궁금하면 [여기](#부록-a-1-cochran-공식에서-p0를-모를-때-p005를-쓰는-이유)를 클릭하세요!). 이때,
$$
n_0=
\frac{1.96^2 \times 0.5\times0.5}{0.05^2}
\approx384
$$
가 됩니다.

참고로, $Z=1.96$을 쓴 이유는, 95%의 신뢰수준에 해당하는 표준정규분포 ($N(0,1)$)의 임계값이 1.96이기 때문입니다. 대표적으로는:
- 90% 신뢰수준 → $Z \approx 1.645$;
- 95% 신뢰수준 → $Z \approx 1.96$;
- 99% 신뢰수준 → $Z \approx 2.576$.


다시 돌아와서, 모집단이 충분히 크다면, 약 384명만 조사하면 원하는 수준의 정확도로 모집단 비율을 추정할 수 있다는 의미입니다.

그다음 실제로 384명을 조사합니다. 예를 들어 230명이 “만족한다”고 답했다면, 데이터에서 얻은 표본 비율은
$$
\hat p=\frac{230}{384}\approx0.6
$$
입니다.

여기서 중요한 점은 처음에 사용한
$$
p_0=0.5
$$
와 조사 후 얻은
$$
\hat p=0.6
$$
은 서로 다른 값이라는 것입니다.

$p_0=0.5$는 **표본 수를 정하기 위한 사전 가정값**이고, $\hat p=0.6$은 **실제 표본조사에서 관측된 비율**입니다.

그리고 우리가 궁극적으로 알고 싶은 것은 모집단의 실제 비율 $p$입니다. 전수조사를 하지 않았기 때문에 정확한 $p$는 여전히 모르지만, 표본 결과를 바탕으로
$$
p \approx 0.6
$$
이라고 추정할 수 있습니다.


다만 정확히 60%라고 단정하지 않고 오차범위를 함께 제시합니다. 위에서  $\pm$5% 포인트 오차를 가정했으므로,

$$
p \approx 0.60 \pm 0.05
$$

즉 모집단의 실제 만족 비율은 대략 55%에서 65% 범위일 것으로 추정할 수 있습니다.

### - 유한모집단 보정 (FPC)

앞서 Cochran 공식으로 구한
$$
n_0=\frac{Z^2p_0(1-p_0)}{e^2}
$$
은 **모집단이 매우 크다**고 가정했을 때의 표본 수입니다.

예를 들어 95% 신뢰수준, 허용오차 ±5%p, 그리고 사전 비율을 $p_0=0.5$로 두면
$$
n_0 \approx 384
$$
가 나옵니다.

그런데 실제 모집단이 500명뿐이라면? 사실 384명을 조사하면 모집단의 대부분을 이미 조사하는 셈입니다.
$$
\frac{384}{500}=76.8\%
$$
이 경우에는 "모집단이 매우 크다"는 가정이 더 이상 적절하지 않습니다.

**유한한 모집단**에서 비복원추출을 하면, 한 명을 조사할 때마다 아직 조사하지 않은 모집단의 수가 빠르게 줄어들기 때문입니다. (**모집단이 매우 큰 경우보다 불확실성이 더 빠르게 감소**)

이 효과를 반영하는 것이 **유한모집단 보정 (Finite Population Correction, FPC)** 입니다. 표본 수를 계산할 때는 Cochran 기본식으로 구한 $n_0$를 다음과 같이 보정합니다:
$$
\boxed{
n=
\frac{n_0}
{1+\frac{n_0-1}{N}}
},
$$

여기서
- $n_0$: 큰 모집단을 가정한 원래 표본 수
- $N$: 실제 모집단 크기
- $n$: 유한모집단 보정 후 필요한 표본 수 (- 우리가 구하고자 하는 값 -)

예를 들어
$$
n_0=384,\qquad N=500
$$
이라면
$$
n=
\frac{384}
{1+\frac{383}{500}}
$$
이므로
$$
n\approx217
$$
이 됩니다.
즉,
$$
\boxed{
384\text{명}\rightarrow217\text{명}
}
$$
으로 꼭 조사해야 하는 표본 수가 줄어듭니다.

이를 직관적으로 이해하면 다음과 같습니다.

    > 100만 명 중 384명을 조사하는 것과 전체 500명 중 384명을 조사하는 것은 정보량이 다르다!


### - ThermEval 논문에서 LLM 파서 평가를 위한 샘플 크기 계산

이제 ThermEval 논문으로 돌아옵시다. 저자들은 LLM 파서 평가를 위해, 사람이 직접 조사할 샘플 크기를 1,200개로 정했다고 합니다. 왜 이 값이 나왔을까요?

우선, 저자들은 95% Confidence Level과 ±3%p Margin of Error를 기준으로 정했습니다. 이때 저자들은 사전에 실제 비율을 알 수 없으므로 가장 보수적인 조건인
$$
p_0=0.5
$$
를 사용했습니다.

Cochran의 비율 추정 표본크기 공식에 따르면,
$$
n_0=
\frac{Z^2p_0(1-p_0)}{e^2}
$$
이고,
$$
Z=1.96,\qquad
p_0=0.5,\qquad
e=0.03
$$
을 대입하면
$$
n_0
=
\frac{1.96^2\times0.5\times0.5}{0.03^2}
\approx1067
$$
이 됩니다.

즉, 모집단이 충분히 큰 경우 약 1,067개 이상의 표본을 확보하면, 비율 형태의 평가 결과를 95% 신뢰수준에서 약 ±3%p의 오차범위로 추정할 수 있습니다.

이번 데이터의 모집단은 약 700,000개로 매우 크고, 실제 표본 1,067개가 전체에서 차지하는 비율은
$$
\frac{1067}{700000}\approx0.0015
$$
이므로, 약 **0.15%** 에 불과합니다.

따라서 유한모집단 보정(Finite Population Correction)을 적용하더라도 필요한 표본 수는 거의 변하지 않습니다. 실제로
$$
n=
\frac{n_0}
{1+\frac{n_0-1}{N}}
$$
에 $N=700{,}000$을 적용하면 필요한 표본 수는 약 1,065개 수준으로, 보정 전 1,067개와 거의 동일합니다.

- 참고로 ThermEval 논문 Appendix B.4에서는 FPC가 포함된 표본크기 산정식을 제시하면서 최소 표본 크기를 약 1,067개로 보고하고 있습니다. 그러나 제시된 파라미터들을 해당 식에 직접 대입하면 약 1,065개가 계산됩니다. 1,067개는 FPC를 적용하지 않은 Cochran 기본식의 결과인데요! 논문을 기술하는 과정에서 실수가 있었던 것이 아닐까 싶습니다. (🤔)

다만, 저자들은 조금 더 안전하게 1,200개 (> 1,067)를 샘플링하여 LLM Parser의 안정성을 직접 평가했다고 밝혔습니다.



### - [부록-A-1] Cochran 공식에서 p0를 모를 때 p0=0.5를 쓰는 이유?
실제 모집단 비율 $p$을 추정하기 위한 각 샘플 $x$는
$$
x=
\begin{cases}
1 & \text{예상이 정확함}\\
0 & \text{예상이 정확하지 않음}
\end{cases}
$$
인 Bernoulli Random Variable입니다.

참고로 Bernoulli Random Variable의 분산 (Variance)는 
$$
p_0(1-p_0)
$$
입니다. 이 분산이 가장 커지는 경우는 $p_0=0.5$일 때입니다.

예를 들면:
$$
p_0=0.5
\Rightarrow
p_0(1-p_0)=0.25
$$
반면,
$$
p_0=0.9
\Rightarrow
p_0(1-p_0)=0.09
$$
이고,
$$
p_0=0.99
\Rightarrow
p_0(1-p_0)=0.0099
$$
입니다.

즉 $p_0=0.5$를 넣으면 Variance를 가장 크게 가정하게 되고, 따라서 필요한 표본 크기 (Sample Size)도 가장 커집니다. 불확실성이 큰 경우를 가정해서 충분히 많은 샘플을 확보했다고 주장하려면, $p_0=0.5$로 하는 것이 좋겠죠!




## 참고문헌

1. Teledyne FLIR. "Flir adas dataset: Thermal-visible fusion for autonomous driving." https://oem.flir.com/en-in/solutions/automotive/adas-dataset-form/, 2024.
2. Jia, Xinyu, et al. "LLVIP: A visible-infrared paired dataset for low-light vision." IEEE/CVF International Conference on Computer Vision Workshops (ICCVW). 2021.
3. Chen, Zhe, et al. "Internvl: Scaling up vision foundation models and aligning for generic visual-linguistic tasks." Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR). 2024.
4. Xu, Guowei, et al. "Llava-cot: Let vision language models reason step-by-step." IEEE/CVF International Conference on Computer Vision (ICCV). 2025.
5. Grattafiori, Aaron, et al. "The llama 3 herd of models." arXiv:2407.21783 (2024).
6. Yao, Yuan, et al. "Efficient GPT-4V level multimodal large language model for deployment on edge devices." Nature Communications 16.1 (2025): 5509.
7. Abdin, Marah, et al. "Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone." arxiv:2404.14219 (2024).
8. Bai, Jinze, et al. "Qwen-VL: A versatile vision-language model for understanding, localization, text reading, and beyond." arXiv:2308.12966 (2023).
9. Steiner, Andreas, et al. "Paligemma 2: A family of versatile vlms for transfer." arXiv:2412.03555 (2024).
10. Laurençon, Hugo, et al. "Building and better understanding vision-language models: insights and future directions." arXiv:2408.12637 (2024).
11. Marafioti, Andrés, et al. "Smolvlm: Redefining small and efficient multimodal models." arXiv:2504.05299 (2025).
12. Koukounas, Andreas, et al. "Jina-VLM: Small Multilingual Vision Language Model." DATA-FM Workshop @ ICLR 2026.
13. Li, Junnan, et al. "Blip-2: Bootstrapping language-image pre-training with frozen image encoders and large language models." International Conference on Machine Learning (ICML). 2023.
14. Team, Gemini, et al. "Gemini: a family of highly capable multimodal models." arXiv:2312.11805 (2023).
15. Team, Gemini, et al. "Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context." arXiv:2403.05530 (2024).
16. Masry, Ahmed, et al. "Chartgemma: Visual instruction-tuning for chart reasoning in the wild." International Conference on Computational Linguistics (COLING). 2025.
17. Masry, Ahmed, et al. "Chartinstruct: Instruction tuning for chart comprehension and reasoning." Findings of the Association for Computational Linguistics (ACL Findings). 2024.
18. Zhang, Liang, et al. "TinyChart: Efficient chart understanding with program-of-thoughts learning and visual token merging." Conference on Empirical Methods in Natural Language Processing (EMNLP). 2024.
19. Gu, Jiawei, et al. "A survey on llm-as-a-judge." The Innovation 7.6 (2026).
20. Li, Dawei, et al. "From generation to judgment: Opportunities and challenges of llm-as-a-judge." Conference on Empirical Methods in Natural Language Processing (EMNLP). 2025.
21. Cochran, Wiliam G. "Sampling Techniques 3rd edJohn Wiley and Sons." New York, NY 428 (1977).