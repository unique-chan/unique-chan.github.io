---
title: "Kullback-Leibler Divergence"
description: "KLD가 어떻게 등장하게 되었을까?"
publishedAt: 2026-09-01
tags: ["Machine Learning"]
language: "ko"
draft: false # false로 해야 웹 사이트에 표시됨!
---

Kullback-Leibler Divergence (KL 발산)은 두 확률분포의 차이를 측정하는 양입니다. 예로 같은 표본공간 위에 두 확률분포 $P$와 $Q$가 있다고 합시다. 일단은 두 분포 모두 이산확률분포라고 가정하고, 각각의 확률질량함수를 각각 $p(\cdot)$와 $q(\cdot)$라고 씁시다. 이때 $P$와 $Q$에 대한 KL 발산 $D_{\mathrm{KL}}(P || Q)$은 다음과 같의 정의합니다:

$$
\begin{aligned}
D_{\mathrm{KL}}(P||Q) &= \sum_x p(x)\log\frac{p(x)}{q(x)} \\
&= \mathbb{E}_{X \sim P} \left[ \log\frac{p(X)}{q(X)}  \right]. 
\end{aligned}
$$

위 정의를 보면 다음과 같은 의문이 듭니다:
- 왜 확률 (정확하게는 가능도)의 차이 $P(x)-Q(x)$ 대신에, **확률의 비율**인 $\frac{P(x)}{Q(x)}$를 사용할까?
- 확률비에 로그 ($\log$)를 씌어 **로그 확률비**로 만든 이유는?
- 왜 모든 $x$에 대해, $p(x)$를 로그 확률비에 곱해 **평균** (정확하게는 **기댓값**)을 구할까요?


KL 발산은 **두 확률분포 (혹은 확률모델)을 구별하는 로그 증거량의 기댓값**으로 볼 수 있습니다. (증거량이 무엇인지는 뒤에 나옵니다.) 이러한 관점에서 KL 발산을 설명하도록 하겠습니다.


## 1. Likelihood Ratio?

아까와 마찬가지로, 같은 표본공간 위에 두 확률분포 $P$와 $Q$가 있다고 합시다. 우선 모두 이산확률분포라고 가정하고, 각각의 확률질량함수를 각각 $p(\cdot)$와 $q(\cdot)$라고 합시다.

데이터 하나 (예로, $x$)를 관찰했을 때, 두 확률모델의 비교결과를 하나의 숫자 (Scalar)로 표현하는 가장 직접적인 방법은 **Likelihood Ratio** (가능도비)입니다:

$$
\begin{aligned}
r(x) = \frac{p(x)}{q(x)}.
\end{aligned}
$$

예로,
$$
\begin{aligned}
r(x) = \frac{p(x)}{q(x)}=2
\end{aligned}
$$

라면, 관측 $x$는 $Q$보다 $P$에서 나올 가능성이 2배 높다는 의미입니다. 더 들어가면, 위 가능도비는 아래 3가지 중 하나로 해석될 수 있습니다:

- $r(x) > 1$: 관측 $x$은 $P$를 더 지지한다;
- $r(x) < 1$: 관측 $x$은 $Q$를 더 지지한다;
- $r(x) = 1$: 관측 $x$은 어느 모델도 지지하지 않는다.


주의할 점은 $r(x) = 2$는 ``P가 Q보다 2배 더 참일 확률을 가진다''는 뜻이 아니라는 것입니다. 두 모델의 Prior (사전확률) $\Pr$까지 고려한 Posterior Odds (사후확률에 대한 비)는

$$
\begin{aligned}
\frac{\Pr(P)}{\Pr(Q)}
\frac{p(x)}{q(x)}
\end{aligned}
$$

이기 때문입니다. 즉 Likelihood Ratio $r(x)$는 관측 $x$가 기존 Odd를 몇 배 변화시키는지를 나타냅니다.


## 2. 독립적인 증거들의 Likelihood Ratio가 곱해지면? 여기서 Log를 만나면?

$n$개의 관측 데이터 ${x_1, \ldots, x_n}$이 있다고 합시다. 또, 이 관측들은 확률분포 $P$와 $Q$ 모두에서 각각 Independent (독립)이라고 가정합시다. 그러면 $n$개 관측에 대한, $P$와 $Q$ 각각에서 결합확률은 

$$
p(x_{1})=\prod_{i=1}^n p(x_i),
\qquad
q(x_{1})=\prod_{i=1}^n q(x_i)
$$

이고, 전체 Likelihood Ratio는

$$
\prod_{i=1}^n \frac{p(x_i)}{q(x_i)}
$$

가 됩니다.

예로, 각 관측의 Likelihood Ratio가 모두 2라면 (즉, $\forall_{i=1}^n$, $\frac{p(x_i)}{q(x_i)}=2$), 

| 관측 개수 | 관측 | 전체 Likelihood Ratio |
| --- | --- | --- |
| 1 | $x_1$ | $\frac{p(x_1)}{q(x_1)} = 2$ |
| 2 | $x_1$, $x_3$ | $\frac{p(x_1)}{q(x_1)} \times \frac{p(x_3)}{q(x_3)} = 2^2 = 4$ |
| 3 | $x_1$, $x_3$, $x_2$ | $\frac{p(x_1)}{q(x_1)} \times \frac{p(x_3)}{q(x_3)} \times \frac{p(x_2)}{q(x_2)} = 2^3 = 8$ |

확률비가 증거가 추가될 때마다 곱해집니다. 그런데 만약 이 Likelihood Ratio에 Log를 씌우면 어떻게 될까요?

$$
\log ( a \times b ) = \log a + \log b
$$

위 성질을 이해하면, 다음과 같이 독립적인 관측들의 증거량이 정확히 더해지는 것을 알 수 있습니다. 단, 밑이 2인 Log를 사용한다고 합시다. 고로, 여기서 관측들의 증거량은 ``어떤 관측을 할 때, 확률분포 $Q$보다 확률분포 $P$에서 나올 가능성이 2배 더 높다''를 지지하는 관측의 갯수로 보면 됩니다.

| 관측 개수 | 관측 | 전체 Likelihood Ratio |
| --- | --- | --- |
| 1 | $x_1$ | $\log \frac{p(x_1)}{q(x_1)} = \log 2 = 1$ |
| 2 | $x_1$, $x_3$ | $\log ( \frac{p(x_1)}{q(x_1)} \times \frac{p(x_3)}{q(x_3)} ) =  \log 2 + \log 2 = 2$ |
| 3 | $x_1$, $x_3$, $x_2$ | $\log (\frac{p(x_1)}{q(x_1)} \times \frac{p(x_3)}{q(x_3)} \times \frac{p(x_2)}{q(x_2)} ) = \log 2 + \log 2 + \log 2 = 3$ |


물론 ``증거량''이 반드시 가산적이어야 할 필요는 없습니다. 하지만 우리는 Log를 사용함으로써, 증거량이 가산이 되도록 만들었을 뿐입니다.


## 3. Log의 밑은 증거량의 단위!

Log의 밑은 증거량의 단위를 결정합니다. 예로 밑이 2라면,

$$
\begin{aligned}
\log_2 \frac{p(x)}{q(x)}
\end{aligned}
$$

이며, 증거량의 단위는 Bit입니다. Likelihood Ratio가 2배가 되는 것을 1 Bit의 증거로 정하겠다는 의미입니다.

만약 Likelihood Ratio가 3이라면, 증거량은

$$
\begin{aligned}
\log_2 3 \approx 1.585 \text{ Bits}
\end{aligned}
$$

입니다. 3배는 2배와 4배 사이이니까, 증거량이 1 Bit와 2 Bits 사잇값인 것을 알 수 있습니다.

Log는 동일한 Likelihood Ratio를 갖는 독립적인 증거가 반복되면, 동일한 양의 Log 증거가 계속 가산되도록 만들어줍니다.

참고로 자연로그를 사용하면 단위가 Bit에서 Nat로 변경됩니다.


## 4. Log 증거량의 기댓값이 KL 발산!

관측 $x$ 하나의 Log 증거량은

$$
\log\frac{p(x)}{q(x)}
$$

이며, 이 값은 $x$에 따라 달라집니다.

관측 $x$가 확률모델 $P$에서 나온다고 가정합시다. 이것이 뜻하는 바는 무엇일까요? $x$는 $p(x)$의 확률로 관측된다는 것을 말합니다. 여기서 $P$에서 관측 하나를 얻었을 때, 로그 증거량의 Expectation (기댓값)은:

$$
\begin{aligned}
\mathbb E_{X\sim P}
\left[
\log\frac{p(X)}{q(X)}
\right]
&=
\sum_xp(x)\log\frac{p(x)}{q(x)}.
\end{aligned}
$$

이 값이 바로 KL 발산 $D_{\mathrm{KL}}(P||Q)$입니다. 다시 요약해보자면 $D_{\mathrm{KL}}(P||Q)$은 다음과 같이 해석할 수 있습니다:

> 데이터가 실제로 확률모델 $P$에서 생성될 때, 관측 하나가 평균적으로 $P$를 다른 확률모델 $Q$보다 얼마나 더 지지하는가?

단, 여기서 ``평균''은 관측된 표본들의 산술평균이 아닌, $P$에 대한 이론적 기댓값.


## 5. KL 발산이 비대칭인 이유?

일반적으로 KL 발산은 대칭이 아닙니다. 즉,

$$
D_{\mathrm{KL}}(P || Q)
\neq
D_{\mathrm{KL}}(Q || P).
$$


두 방향 ($P \rightarrow Q$ 및 $Q \rightarrow P$)에 대해 KL 발산은 각각
$$
\mathbb E_P
\left[
\log\frac pq
\right],
\quad
\mathbb E_Q
\left[
\log\frac qp
\right]
$$

입니다.

위 두 식의 차이는 단순합니다.

> 어떤 분포에서 데이터를 관측하는가? $P$? $Q$?

$D_{\mathrm{KL}}(P || Q)$는 $P$가 생성하는 영역 (혹은 $P$에서 관측/샘플링된 관측 값들의 영역)을 중요하게 여기고, $D_{\mathrm{KL}}(Q||P)$는 그 반대입니다. 따라서 두 값이 다르게 나오는 것은 자연스럽습니다.

이 현상을 조금 있어보이게 말하면, ``KL 발산은 대칭성을 만족하지 않으므로 (- 삼각부등식도 만족하지 않지만 -), 엄밀하게는, 거리 (Distance)로 이용할 수 없다"입니다.


## 7. 절대연속성과 무한대인 KL 발산

$D_{\mathrm{KL}}(P || Q)$가 유한하려면, $P$에서 관측 가능한 결과가 $Q$에서도 관측할 수 있어야 합니다.

특히, 이산분포에서는 

$$
p(x) > 0 \implies q(x) > 0
$$

이어야 합니다. 이를 좀 있어보이게 말하면, $P$가 $Q$에 대해 절대연속이라고 하고,

$$
P \ll Q
$$ 

라고 표기합니다.


만약 어떤 $x$에서

$$
p(x) > 0, \quad q(x) = 0
$$

이라면, $P$에서 실제로 발생할 수 있는 사건이 $Q$에서는 불가능하다고 선언한 것입니다. 이 경우
$$
% \frac{p(x)}{q(x)} = \infty
\lim_{q(x)\to 0} \left| \frac{p(x)}{q(x)} \right| =\infty
$$ 
이므로,

$$
D_{\mathrm{KL}}(P||Q)=\infty
$$ 
로 이어집니다.


반대로 $p(x) = 0$이고 $q(x) > 0$인 영역은 $D_{\mathrm{KL}}(P||Q)$의 기댓값에 직접 나타나지 않습니다. $P$에서는 해당 영역이 관측되지 않기 때문입니다. 이것 역시 KL 발산이 비대칭인 이유 중 하나입니다.


## 7. 왜 KL 발산은 항상 0 이상일까?

개별 관측에서

$$
\log \frac{p(x)}{q(x)} < 0,
$$

즉 음수의 증거량이 존재할 수 있습니다. 어떤 관측은 분포 $P$보다 분포 $Q$를 더 지지할 수 있기 때문입니다.

그러나, KL 발산은 그럼에도 **항상 0 이상**입니다. 분포 $P$와 분포 $Q$가 완전히 동일하면 KL 발산은 0, 그렇지 않을 경우 0보다 큰 양수입니다:

$$
D_{\mathrm{KL}}(P||Q) \ge 0.
$$

이는 [Jensen 부등식](#부록-jensen-부등식)으로 증명할 수 있습니다. 분포 $P$의 Support를 
$$
\operatorname{supp}(P)
=
\{x:p(x)>0\}
$$

라고 합시다. $\operatorname{supp}(P)$에서 

$$
R(X)=\frac{q(X)}{p(X)}
$$ 

라고 두면, $D_{\mathrm{KL}}(P||Q)$는 다음과 같이 쓸 수 있습니다:

$$
\begin{aligned}
D_{\mathrm{KL}}(P||Q) &=   \sum_x p(x)\log\frac{p(x)}{q(x)}  \\
&= \sum_x p(x) \left[ \log p(x) - \log q(x) \right] \\
&= - \sum_x p(x) \left[ \log q(x) - \log p(x)  \right] \\
&= - \sum_x p(x) \log \frac{q(x)}{p(x)} \\
&= - \mathbb{E}_{X \sim P} \left[ \log R(X) \right]
\end{aligned}
$$

Log는 오목함수 (Concave)이므로, Jensen 부등식에 따라서,

$$
\mathbb E_P[\log R(X)]
\le
\log\mathbb E_P[R(X)].
$$

그리고

$$
\begin{aligned}
\mathbb E_P[R(X)] &= \sum_{x \sim \operatorname{supp}(P)} p(x) \cdot \frac{q(x)}{p(x)}  \\
&= \sum_{x \sim \operatorname{supp}(P)}q(x) \le 1
\end{aligned}
$$

> 위 수식은 $P$의 Support, $\operatorname{supp}(P)$ (- 즉 $p(x)$가 양수인 $x$ 영역 -)에 대해서만 $q(x)$를 적분하므로, 확률의 총합인 1 (- 즉 $\sum_{x}q(x) = 1$ -)보다 작을 수 있습니다.

이므로, 

$$
\begin{aligned}
\mathbb E_P[\log R(X)]
& \le
\log\mathbb E_P[R(X)] \\
& \le 
\log 1 = 0
\end{aligned}
$$
이고, 따라서

$$
D_{\mathrm{KL}}(P||Q)\ge0
$$
입니다.

## 8. 기댓값과 표본평균의 구분

$D_{\mathrm{KL}}(P||Q)$이라는 KL 발산은 확률분포 $P$에 대한 기댓값입니다:

$$
\mathbb E_P
\left[
\log\frac pq
\right].
$$

위 값은 두 확률분포 $P$와 $Q$가 정해지면 결정됩니다.

이제 다음과 같은 $n$개의 관측이 있고, 이 관측들이 $P$에서 (독립적으로) 샘플링되었다고 합시다:
$$
x_1,\ldots,x_n\overset{\mathrm{iid}}{\sim}P
$$

또, 모든 $i$에 대해, $(p(x_i),q(x_i))$를 모두 계산할 수 있다고 합시다.

그러면 로그 증거량에 대한 표본평균 $\widehat D_n$을
$$
\frac1n\sum_{i=1}^n
\log\frac{p(x_i)}{q(x_i)}
$$
라고 계산할 수 있습니다.

$\widehat D_n$은 KL 자체가 아니라 표본에 따라 값이 달라지는 확률변수입니다. 

다만 큰 수의 법칙에 따라, 
$$
\widehat D_n
\xrightarrow{\mathrm{a.s.}}
D_{\mathrm{KL}}(P||Q).
$$

따라서 $\widehat D_n$은 이론적 KL 발산의 Monte Carlo 추정량으로 사용할 수도 있습니다.

물론 유한한 표본에서 $\widehat D_n$이 KL과 정확히 같지 않으며, 표본에 따라 음수가 될 수도 있습니다.


## 9. MLE (Maximum Likelihood Estimation)와 KL 발산 최소화?

실제 데이터 분포를 $P$, 학습하려는 모델의 분포를 $Q_\theta$라고 하겠습니다. 모집단 수준에서 모델의 기대 Negative Log-Likelihood는

$$
\mathcal L(\theta) = \mathbb E_{X\sim P}
\left[
-\log q_\theta(X)
\right]
$$

입니다.

위 식에 $\log p(X)$를 더하고 빼면,

$$
\begin{aligned}
\mathcal L(\theta)
&=
\mathbb E_P[-\log p(X)]
+
\mathbb E_P
\left[
\log\frac{p(X)}{q_\theta(X)}
\right] \\
&=
H(P)
+
D_{\mathrm{KL}}(P || Q_\theta).
\end{aligned}
$$

여기서 $H(P)$는 실제 데이터 분포 $P$에 대한 Entropy입니다. ($P$가 고정되어 있으면) $H(P)$는 모델 파라미터 ($\theta$)와 무관한 상수이므로,

$$
\arg\min_\theta
D_{\mathrm{KL}}(P || Q_\theta).
$$

즉, 모집단의 기대 Negative Log-Likelihood를 최소화하는 모델은 $D_{\mathrm{KL}}(P|| Q_\theta)$를 최소화하는 모델과 같습니다.

다만 실제로는 $P$에 대한 기댓값으로 $D_{\mathrm{KL}}(P|| Q_\theta)$를 직접 구할 수 없습니다. $p(x)$를 알 수 없기 때문이죠. 대신 $P$에서 (독립적으로) 얻은 관측 데이터 

$$
x_1,\ldots, x_n\overset{\mathrm{iid}}{\sim}P
$$

를 사용하여 Empirical Negative Log-Likelihood

$$
-\frac1n
\sum_{i=1}^n
\log q_\theta(X_i)
$$

를 최소화합니다 (사실 $n$은 모델 파라미터와 무관하므로, $\frac1n$을 생략한 $- \sum_{i=1}^n
\log q_\theta(X_i)$를 최소화합니다). 그런데 잘 살펴보니, 이것은 사실 Maximum Likelihood Estimation 입니다.

$$
\begin{aligned}
\widehat\theta_n
&\in
\arg\max_\theta
\prod_{i=1}^n q_\theta(x_i)\\
& =
\arg\max_\theta
\sum_{i=1}^n\log q_\theta(x_i)\\
&=
\arg\min_\theta
\left[ - \sum_{i=1}^n
\log q_\theta(x_i) \right] \\
& \approx
\arg\min_\theta
D_{\mathrm{KL}}(P || Q_\theta).
\end{aligned}
$$

## 10. 연속확률분포

지금까지는 편의상 이산확률분포를 이용해서 KL 발산을 설명했습니다. 다만, KL 발산은 연속확률분포에서도 정의 가능합니다.

연속확률분포에서는 확률질량함수 대신 동일한 기준측도에 대한 확률밀도함수 ($p$, $q$)를 사용합니다. 그리고 이를 통해 KL 발산을 정의하면:
$$
\int p(x)\log\frac{p(x)}{q(x)}dx
$$
입니다.


## [부록] Jensen 부등식과 Log 함수

젠센 부등식 (Jensen's Inequality)은 

> ``평균을 먼저 계산해서 함수에 넣는 것``과 

> ``각각 함수에 넣은 다음, 평균을 내는 것``을 

비교하는 부등식 입니다.


Log는 아래로 휘어진 오목 함수 (Concave)라서,



<div id="jensen-demo" style="max-width:860px;margin:28px 0;padding:24px;border:1px solid #d8dee8;border-radius:18px;background:#fff;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#111827;box-sizing:border-box;">

<div style="font-size:26px;font-weight:800;margin-bottom:8px;">
Jensen's Inequality for <span style="color:#2563eb;">Log(x)</span>
</div>

<div style="font-size:16px;line-height:1.7;color:#4b5563;margin-bottom:18px;">
두 점을 잇는 직선은 Log 곡선보다 아래에 놓입니다.
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px;">

<div style="padding:14px 16px;border:1px solid #dbe3ef;border-radius:14px;background:#f8fafc;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
<span style="font-size:14px;font-weight:700;color:#374151;">x₁</span>
<span id="x1-value" style="font-size:14px;font-weight:800;color:#2563eb;">1.0</span>
</div>
<input
id="x1-slider"
type="range"
min="0.5"
max="9.5"
step="0.1"
value="1"
style="width:100%;cursor:pointer;"
>
</div>

<div style="padding:14px 16px;border:1px solid #dbe3ef;border-radius:14px;background:#f8fafc;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
<span style="font-size:14px;font-weight:700;color:#374151;">x₂</span>
<span id="x2-value" style="font-size:14px;font-weight:800;color:#2563eb;">9.0</span>
</div>
<input
id="x2-slider"
type="range"
min="0.5"
max="9.5"
step="0.1"
value="9"
style="width:100%;cursor:pointer;"
>
</div>

</div>

<div id="jensen-summary" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;font-size:13px;color:#4b5563;">
</div>

<div style="position:relative;width:100%;aspect-ratio:16/9;min-height:340px;">
<canvas id="jensen-canvas" style="display:block;width:100%;height:100%;"></canvas>
</div>

</div>

<script>
(() => {
const root = document.getElementById("jensen-demo");
const canvas = document.getElementById("jensen-canvas");
const x1Slider = document.getElementById("x1-slider");
const x2Slider = document.getElementById("x2-slider");
const x1Value = document.getElementById("x1-value");
const x2Value = document.getElementById("x2-value");
const summary = document.getElementById("jensen-summary");

if (!root || !canvas || !x1Slider || !x2Slider) return;

const ctx = canvas.getContext("2d");

const COLORS = {
text: "#111827",
muted: "#6b7280",
axis: "#94a3b8",
grid: "#e8edf4",
curve: "#3b82f6",
chord: "#f87171",
green: "#22c55e",
greenDark: "#15803d",
greenBg: "#f0fdf4",
greenBorder: "#bbf7d0",
red: "#ef4444",
redDark: "#dc2626",
redBg: "#fef2f2",
redBorder: "#fecaca",
black: "#111827",
white: "#ffffff"
};

function roundRect(x, y, w, h, r) {
const rr = Math.min(r, w / 2, h / 2);
ctx.beginPath();
ctx.moveTo(x + rr, y);
ctx.arcTo(x + w, y, x + w, y + h, rr);
ctx.arcTo(x + w, y + h, x, y + h, rr);
ctx.arcTo(x, y + h, x, y, rr);
ctx.arcTo(x, y, x + w, y, rr);
ctx.closePath();
}

function label(text, x, y, opts = {}) {
const {
bg = COLORS.white,
border = "#e5e7eb",
color = COLORS.text,
font = "600 14px system-ui",
padX = 10,
radius = 10,
align = "left"
} = opts;

ctx.save();
ctx.font = font;
ctx.textBaseline = "middle";

const tw = ctx.measureText(text).width;
const w = tw + padX * 2;
const h = 32;

let bx = x;
if (align === "center") bx = x - w / 2;
if (align === "right") bx = x - w;

const by = y - h / 2;

ctx.fillStyle = bg;
ctx.strokeStyle = border;
ctx.lineWidth = 1;

roundRect(bx, by, w, h, radius);
ctx.fill();
ctx.stroke();

ctx.fillStyle = color;
ctx.fillText(text, bx + padX, y);

ctx.restore();
}

function point(x, y, fill, r = 8, halo = null) {
ctx.save();

if (halo) {
ctx.beginPath();
ctx.arc(x, y, r + 9, 0, Math.PI * 2);
ctx.fillStyle = halo;
ctx.fill();
}

ctx.beginPath();
ctx.arc(x, y, r, 0, Math.PI * 2);
ctx.fillStyle = fill;
ctx.fill();

ctx.restore();
}

function pill(text, bg, color, border) {
return `
<span style="
display:inline-block;
padding:5px 9px;
border-radius:999px;
background:${bg};
color:${color};
border:1px solid ${border};
font-weight:700;
">
${text}
</span>
`;
}

function draw() {
const X1 = Number(x1Slider.value);
const X2 = Number(x2Slider.value);
const XM = (X1 + X2) / 2;

x1Value.textContent = X1.toFixed(1);
x2Value.textContent = X2.toFixed(1);

const log = x => Math.log(x);

const meanCurveValue = log(XM);
const meanChordValue = (log(X1) + log(X2)) / 2;

summary.innerHTML =
pill(
`Log(mean) = ${meanCurveValue.toFixed(3)}`,
COLORS.greenBg,
COLORS.greenDark,
COLORS.greenBorder
) +
pill(
`mean(Log) = ${meanChordValue.toFixed(3)}`,
COLORS.redBg,
COLORS.redDark,
COLORS.redBorder
) +
pill(
`gap = ${(meanCurveValue - meanChordValue).toFixed(3)}`,
"#f8fafc",
COLORS.text,
"#e5e7eb"
);

const rect = canvas.getBoundingClientRect();
const dpr = Math.max(1, window.devicePixelRatio || 1);

const W = Math.round(rect.width);
const H = Math.round(rect.height);

canvas.width = Math.round(W * dpr);
canvas.height = Math.round(H * dpr);

ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
ctx.clearRect(0, 0, W, H);

const margin = {
left: 62,
right: 28,
top: 24,
bottom: 46
};

const plotW = W - margin.left - margin.right;
const plotH = H - margin.top - margin.bottom;

const xmin = 0.45;
const xmax = 10;
const ymin = -0.9;
const ymax = 2.5;

const sx = x =>
margin.left + ((x - xmin) / (xmax - xmin)) * plotW;

const sy = y =>
margin.top + ((ymax - y) / (ymax - ymin)) * plotH;

ctx.save();
ctx.strokeStyle = COLORS.grid;
ctx.lineWidth = 1;

for (let i = 0; i <= 8; i++) {
const x = margin.left + (plotW * i) / 8;
ctx.beginPath();
ctx.moveTo(x, margin.top);
ctx.lineTo(x, margin.top + plotH);
ctx.stroke();
}

for (let i = 0; i <= 6; i++) {
const y = margin.top + (plotH * i) / 6;
ctx.beginPath();
ctx.moveTo(margin.left, y);
ctx.lineTo(margin.left + plotW, y);
ctx.stroke();
}

ctx.restore();

ctx.save();
ctx.strokeStyle = COLORS.axis;
ctx.lineWidth = 1.5;

ctx.beginPath();
ctx.moveTo(margin.left, margin.top);
ctx.lineTo(margin.left, margin.top + plotH);
ctx.lineTo(margin.left + plotW, margin.top + plotH);
ctx.stroke();

ctx.fillStyle = COLORS.muted;
ctx.font = "600 14px system-ui";
ctx.fillText("Log(x)", 8, margin.top + 4);
ctx.fillText("x", margin.left + plotW - 2, margin.top + plotH + 30);

ctx.restore();

ctx.save();
ctx.strokeStyle = COLORS.curve;
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.beginPath();

const N = 500;

for (let i = 0; i <= N; i++) {
const x = xmin + ((xmax - xmin) * i) / N;
const px = sx(x);
const py = sy(log(x));

if (i === 0) {
ctx.moveTo(px, py);
} else {
ctx.lineTo(px, py);
}
}

ctx.stroke();
ctx.restore();

const p1 = {
x: sx(X1),
y: sy(log(X1))
};

const p2 = {
x: sx(X2),
y: sy(log(X2))
};

const meanCurve = {
x: sx(XM),
y: sy(meanCurveValue)
};

const meanChord = {
x: sx(XM),
y: sy(meanChordValue)
};

ctx.save();
ctx.strokeStyle = COLORS.chord;
ctx.lineWidth = 4;
ctx.lineCap = "round";

ctx.beginPath();
ctx.moveTo(p1.x, p1.y);
ctx.lineTo(p2.x, p2.y);
ctx.stroke();

ctx.restore();

point(p1.x, p1.y, COLORS.black, 8);
point(p2.x, p2.y, COLORS.black, 8);

ctx.save();

ctx.strokeStyle = COLORS.green;
ctx.lineWidth = 2.5;
ctx.setLineDash([6, 5]);

ctx.beginPath();
ctx.moveTo(meanCurve.x, meanCurve.y);
ctx.lineTo(meanChord.x, meanChord.y);
ctx.stroke();

ctx.restore();

point(
meanCurve.x,
meanCurve.y,
COLORS.green,
9,
"rgba(34,197,94,0.16)"
);

point(
meanChord.x,
meanChord.y,
COLORS.red,
9,
"rgba(239,68,68,0.16)"
);

const leftPoint = X1 <= X2 ? p1 : p2;
const rightPoint = X1 <= X2 ? p2 : p1;

const leftText = X1 <= X2
? `x₁ = ${X1.toFixed(1)}`
: `x₂ = ${X2.toFixed(1)}`;

const rightText = X1 <= X2
? `x₂ = ${X2.toFixed(1)}`
: `x₁ = ${X1.toFixed(1)}`;

label(
leftText,
leftPoint.x + 8,
leftPoint.y + 34,
{
font: "500 13px system-ui"
}
);

label(
rightText,
rightPoint.x - 4,
rightPoint.y - 36,
{
align: "center",
font: "500 13px system-ui"
}
);

label(
"log(mean)",
meanCurve.x + 24,
meanCurve.y - 34,
{
bg: COLORS.greenBg,
border: COLORS.greenBorder,
color: COLORS.greenDark,
font: "700 14px system-ui"
}
);

label(
"mean(log)",
meanChord.x + 24,
meanChord.y + 34,
{
bg: COLORS.redBg,
border: COLORS.redBorder,
color: COLORS.redDark,
font: "700 14px system-ui"
}
);

ctx.save();

ctx.fillStyle = COLORS.curve;
ctx.font = "700 14px system-ui";

ctx.fillText(
"y = Log(x)",
sx(7.4),
sy(log(7.4)) - 18
);

ctx.restore();
}

x1Slider.addEventListener("input", draw);
x2Slider.addEventListener("input", draw);

const ro = new ResizeObserver(draw);
ro.observe(root);

draw();
})();
</script>



즉,

$$
\log\left(\frac{x_1+x_2}{2}\right)
\ge
\frac{\log x_1+\log x_2}{2}
$$

입니다.

예를 들어 $(x_1=1, x_2=9)$이면,

$$
\log 5 \approx 1.609
$$

이고,

$$
\frac{\log 1+\log 9}{2}
\approx 1.099
$$

이므로,

$$
1.609 \ge 1.099
$$

가 됩니다.


두 점에 대한 경우를 확률변수 (단, $X > 0$)의 기댓값으로 일반화하면,

$$
\boxed{
\mathbb E[\log X]
\le
\log\mathbb E[X]
}
$$

입니다.


즉, **먼저 Log를 취한 뒤 평균내는 것**보다 **먼저 평균을 낸 뒤 Log를 취하는 것**이 항상 크거나 같습니다.