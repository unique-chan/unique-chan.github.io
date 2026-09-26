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
- 왜 모든 $x$에 대해, $P(x)$를 로그 확률비에 곱해 **평균** (정확하게는 **기댓값**)을 구할까요?


KL 발산은 **두 확률분포 (혹은 확률모델)을 구별하는 로그 증거량의 기댓값**으로 볼 수 있습니다. 이러한 관점에서 KL 발산을 설명하도록 하겠습니다.


## 1. 두 확률모델을 비교하는 KL 발산

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


## 3. Log의 밑은 증거량의 단위를 결정한다.

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


## 4. Log 증거량의 기댓값

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


## 5. KL 발산이 비대칭인 이유

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

이어야 합니다. 이를 측도론적으로 $P$가 $Q$에 대해 절대연속이라고 하고,

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
\lim_{x\to 0} \left| \frac{p(x)}{q(x)} \right| =\infty
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

즉 음수의 증거량이 존재할 수 있습니다. 어떤 관측은 분포 $P$보다 분포 $Q$를 지지할 수 있기 때문입니다.

그러나, KL 발산은 그럼에도 **항상 0 이상**입니다. 분포 $P$와 분포 $Q$가 완전히 동일하면 KL 발산은 0, 그렇지 않을 경우 0보다 큰 양수입니다:

$$
D_{\mathrm{KL}}(P||Q) \ge 0.
$$

이는 Jensen 부등식으로 증명할 수 있습니다. 분포 $P$의 Support를 
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

> 위 수식에서는, $P$의 Support, $\operatorname{supp}(P)$ (- 즉 $p(x)$가 양수인 $x$ 영역 -)에 대해서만 $q(x)$를 적분하므로, 보통은 확률의 총합인 1 (- 즉 $\sum_{x}q(x) = 1$ -)보다 작은 경우가 일반적입니다.

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

$D_{\mathrm{KL}}(P|Q)$이라는 KL 발산은 확률분포 $P$에 대한 기댓값입니다:

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

다만 큰수의 법칙에 따라, 
$$
\widehat D_n
\xrightarrow{\mathrm{a.s.}}
D_{\mathrm{KL}}(P||Q)
$$

따라서 $\widehat D_n$은 이론적 KL 발산의 Monte Carlo 추정량으로 사용할 수도 있습니다.

물론 유한한 표본에서 $\widehat D_n$이 KL과 정확히 같지 않으며, 표본에 따라 음수가 될 수도 있습니다.

