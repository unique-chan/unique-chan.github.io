export type Patent = {
  title: string;
  inventors: string;
  country: string;
  filingNumber: string;
  filingDate: string;
  registrationNumber?: string;
  year: number;
  status: "Filed" | "Registered";
  links?: { label: string; href: string }[];
};

// Source: https://sites.google.com/view/mlv/publications/patent-software
export const patents: Patent[] = [
  {
    title: "경계 상자 보정 장치 및 방법",
    inventors: "김예찬, 주종민, 김수연, 전문구, 김지아, 이송재, 박상아, 박정호, 강선종",
    country: "KOR",
    filingNumber: "10-2026-0092318",
    filingDate: "2026.05.21",
    year: 2026,
    status: "Filed",
    links: []
  },

  {
    title: "Crowd Density Estimation Model Learning Method And System And Crowd Density Estimation Method And System Using the Same",
    inventors: "Yechan Kim, Moongu Jeon",
    country: "US",
    filingNumber: "19/454,613",
    filingDate: "2026.01.21",
    year: 2026,
    status: "Filed",
    links: []
  },

  {
    title: "시각 질의 응답 모델의 학습을 위한 학습 데이터 생성 방법 및 장치",
    inventors: "김지아, 권철희, 조규태, 진정훈, 박종현, 김성헌, 김예찬, 전문구",
    country: "KOR",
    filingNumber: "10-2025-0039703",
    filingDate: "2025.03.27",
    year: 2025,
    status: "Filed",
    links: []
  },

  {
    title: "군중밀도 추정 모델 학습 방법, 시스템 및, 이를 이용한 군중밀도 추정 방법, 시스템",
    inventors: "김예찬, 김기웅, 전문구",
    country: "KOR",
    filingNumber: "10-2025-0008645",
    filingDate: "2025.01.21",
    year: 2025,
    status: "Filed",
    links: []
  },

  {
    title: "군중 밀도 추정 모델 학습에 이용 가능한 가상 데이터 생성 방법 및 시스템",
    inventors: "김예찬, 김성헌, 김시현, 전문구",
    country: "KOR",
    filingNumber: "10-2024-0090992",
    filingDate: "2024.07.10",
    year: 2024,
    status: "Filed",
    links: []
  },

  {
    title: "표적 탐지를 위한 가상 영상 데이터 생성 장치, 방법 및 컴퓨터 프로그램",
    inventors: "김예찬, 박종현, 전문구",
    country: "KOR",
    filingNumber: "10-2023-0156525",
    filingDate: "2023.11.13",
    year: 2023,
    status: "Filed",
    links: []
  },

  {
    title: "대중교통 빅데이터 기반의 관광객 이동 패턴 식별 및 관광 코스 추천을 위한 시스템, 방법 및 프로그램",
    inventors: "김예찬, 윤용상, 한명훈, 전문구",
    country: "KOR",
    filingNumber: "10-2022-0025940",
    filingDate: "2022.02.28",
    year: 2022,
    status: "Filed",
    links: []
  },

  {
    title: "노이즈 개선 네트워크 기반 보행 인식 장치 및 방법",
    inventors: "윤용상, 김예찬, 전문구",
    country: "KOR",
    filingNumber: "10-2021-0115818",
    filingDate: "2021.08.31",
    registrationNumber: "10-2636549",
    year: 2021,
    status: "Registered",
    links: []
  },

  {
    title: "보완 교차 엔트로피를 이용한 불균형 데이터 학습 방법",
    inventors: "김예찬, 이윤관, 전문구",
    country: "KOR",
    filingNumber: "10-2021-0114804",
    filingDate: "2021.08.30",
    year: 2021,
    status: "Filed",
    links: []
  }
];
