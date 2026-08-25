export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "Conference" | "Journal" | "Preprint" | "Workshop" | "Korean Journal" | "Korean Conference";
  image?: string;
  imageAlt?: string;
  tags?: string[];
  ranking?: string;
  citations?: number;
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const publications: Publication[] = [


    {
    title: "[Double Blind]",
    authors: "Yechan Kim, Dongho Yoon, Younkwan Lee, Wei Cheng, Juhua Hu, Moongu Jeon",
    venue: "Submitted to IEEE",
    year: 2026,
    type: "Preprint",
    // image: "/paper_snapshots/gmad.png",
    // imageAlt: "-",
    // ranking: "CORE A*",
    // citations: 0,
    tags: ["Semantic Segmentation", "Change Detection", "Label Uncertainty"],
    links: [
      // { label: "Paper", href: "https://doi.org/10.1145/3767308.3834743" },
      // { label: "Code", href: "https://unique-chan.github.io/G-MAD-Project/" },
      // { label: "Dataset", href: "https://unique-chan.github.io/AMOD-Project/" }

    ],
    featured: false
  },

    {
    title: "ShadowCast: On-the-Fly Context-Aware Shadow Augmentation for Remote Sensing Image Segmentation",
    authors: "Dongho Yoon, Yechan Kim✝, JongHyun Park, Jongmin Joo, Moongu Jeon",
    venue: "Submitted to IEEE",
    year: 2026,
    type: "Preprint",
    // image: "/paper_snapshots/gmad.png",
    // imageAlt: "-",
    // ranking: "CORE A*",
    // citations: 0,
    tags: ["Semantic Segmentation", "Shadow-robust", "Augmentation"],
    links: [
      // { label: "Paper", href: "https://doi.org/10.1145/3767308.3834743" },
      // { label: "Code", href: "https://unique-chan.github.io/G-MAD-Project/" },
      // { label: "Dataset", href: "https://unique-chan.github.io/AMOD-Project/" }

    ],
    featured: false
  },

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    title: "NSegment+: Scale-aware Label-only Elastic Deformations for Semantic Segmentation",
    authors: "Yechan Kim, Dongho Yoon, Unse Fatima, Jongmin Joo, SungHeon Kim, JongHyun Park, Mingi Lee, Moongu Jeon",
    venue: "Annual AAAI Conference on Artificial Intelligence (AAAI) - AI4UP Workshop",
    year: 2026,
    type: "Workshop",
    // image: "/paper_snapshots/gmad.png",
    // imageAlt: "-",
    // ranking: "CORE A*",
    // citations: 0,
    tags: ["Semantic Segmentation", "Change Detection", "Label Uncertainty"],
    links: [
      // { label: "Paper", href: "https://doi.org/10.1145/3767308.3834743" },
      // { label: "Code", href: "https://unique-chan.github.io/G-MAD-Project/" },
      // { label: "Dataset", href: "https://unique-chan.github.io/AMOD-Project/" }

    ],
    featured: false
  },


  
  {
    title: "Towards Large-scale Benchmark Dataset for Remote Sensing Object Detection on Battlefield",
    authors: "Yechan Kim, JongHyun Park, Sihyun Kim, SeongHeon Kim, SooYeon Kim, YeongMin Ko, Junggyun Oh, Moongu Jeon,",
    venue: "IEEE International Conference on Consumer Electronics-Asia (ICCE-Asia)",
    year: 2024,
    type: "Workshop",
    // image: "/paper_snapshots/gmad.png",
    // imageAlt: "-",
    // ranking: "CORE A*",
    // citations: 0,
    tags: ["Object Detection", "Benchmark"],
    links: [
      // { label: "Paper", href: "https://doi.org/10.1145/3767308.3834743" },
      // { label: "Code", href: "https://unique-chan.github.io/G-MAD-Project/" },
      // { label: "Dataset", href: "https://unique-chan.github.io/AMOD-Project/" }

    ],
    featured: false
  },


  {
    title: "Social Media Tri-Domain Analysis for Detection of Potential/Likely Malicious Users",
    authors: "Zafran Khan, Yechan Kim, Yeonsu Seul, Moongu Jeon,",
    venue: "International Conference on Intelligent and Fuzzy Systems (INFUS)",
    year: 2023,
    type: "Workshop",
    // image: "/paper_snapshots/gmad.png",
    // imageAlt: "-",
    // ranking: "CORE A*",
    // citations: 0,
    tags: ["Social Media Analysis", "Malicious User Detection", "Tri-Domain Analysis"],
    links: [
      // { label: "Paper", href: "https://doi.org/10.1145/3767308.3834743" },
      // { label: "Code", href: "https://unique-chan.github.io/G-MAD-Project/" },
      // { label: "Dataset", href: "https://unique-chan.github.io/AMOD-Project/" }

    ],
    featured: false
  },



    {
    title: "Self-Supervised Attribute-Aware Refinement Network for Low-Quality Text Recognition",
    authors: "Younkwan Lee, Hyeonjun Yoo, Yechan Kim, Jihun Jeong, Moongu Jeon",
    venue: "European Conference on Computer Vision (ECCV) - RLQ Workshop",
    year: 2020,
    type: "Workshop",
    // image: "/paper_snapshots/gmad.png",
    // imageAlt: "-",
    // ranking: "CORE A*",
    // citations: 0,
    tags: ["Text Recognition", "Self-Supervised Learning", "Refinement"],
    links: [
      // { label: "Paper", href: "https://doi.org/10.1145/3767308.3834743" },
      // { label: "Code", href: "https://unique-chan.github.io/G-MAD-Project/" },
      // { label: "Dataset", href: "https://unique-chan.github.io/AMOD-Project/" }

    ],
    featured: false
  },

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  {
    title: "G-MAD: A Game-Based Data Generation Framework for Multi-View RGB-T Aerial Object Detection",
    authors: "Yechan Kim, JongHyun Park, Dongho Yoon, Namhoon Jung, Moongu Jeon",
    venue: "ACM International Conference on Multimedia (MM)",
    year: 2026,
    type: "Conference",
    image: "/paper_snapshots/gmad.png",
    // imageAlt: "-",
    ranking: "CORE A* | CCF A",
    // citations: 0,
    tags: ["Object Detection", "RGB-T", "Multi-View", "Benchmark"],
    links: [
      { label: "Paper", href: "https://doi.org/10.1145/3767308.3834743" },
      { label: "Supp. Material (Arxiv)", href: "https://arxiv.org/pdf/2607.19942" },
      { label: "Code", href: "https://unique-chan.github.io/G-MAD-Project/" },
      { label: "Dataset", href: "https://unique-chan.github.io/AMOD-Project/" }

    ],
    featured: true
  },



  {
    title: "High Fidelity and Real-time Video Face Swapping",
    authors: "Jongmin Yu, Hyeontaek Oh, Jangwon Lee, Yechan Kim, Moongu Jeon, Jinhong Yang",
    venue: "IEEE International Conference on Automatic Face and Gesture Recognition (FG)",
    year: 2026,
    type: "Conference",
    image: "/paper_snapshots/fg-face.png",
    // imageAlt: "-",
    ranking: "CORE B", //  | CCF C
    // citations: 0,
    tags: ["Face Swapping", "Real-time", "Video Processing"],
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/FG67764.2026.11557069" },

    ],
    featured: false
  },

  {
    title: "NSegment: Label-specific Deformations for Remote Sensing Image Segmentation",
    authors: "Yechan Kim, Dongho Yoon, SooYeon Kim, Moongu Jeon",
    venue: "IEEE Geoscience and Remote Sensing Letters (GRSL)",
    year: 2025,
    type: "Journal",
    image: "/paper_snapshots/nseg.png",
    // imageAlt: "-",
    ranking: "Q1",
    tags: ["Semantic Segmentation", "Label Uncertainty" ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/LGRS.2025.3595851" },
      { label: "Supp. Material (Arxiv)", href: "https://arxiv.org/abs/2504.19634" },
      { label: "Code", href: "https://github.com/unique-chan/nsegment" }
    ],
    featured: true
  },


  {
    title: "NBBOX: Noisy Bounding Box Improves Remote Sensing Object Detection",
    authors: "Yechan Kim, SooYeon Kim, Moongu Jeon",
    venue: "IEEE Geoscience and Remote Sensing Letters (GRSL)",
    year: 2025,
    type: "Journal",
    image: "/paper_snapshots/nbbox.png",
    // imageAlt: "-",
    ranking: "Q1",
    tags: ["Object Detection", "Label Uncertainty" ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/LGRS.2025.3527712" },
      { label: "Supp. Material (Arxiv)", href: "https://arxiv.org/abs/2409.09424" },
      { label: "Code", href: "https://github.com/unique-chan/NBBOX" }
    ],
    featured: true
  },


  {
    title: "Resource Efficient Framework for Remote Sensing Visual Recognition",
    authors: "Unse Fatima, Khan Zafran, Yechan Kim, Joonmo Kim, Witold Pedrycz, Moongu Jeon",
    venue: "IEEE Sensors Journal",
    year: 2025,
    type: "Journal",
        image: "/paper_snapshots/sens.jpg",
    // imageAlt: "-",
    ranking: "Q1",
    tags: ["Image Classification", "Lightweight" ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/JSEN.2025.3595936" },
    ],
    featured: false
  },


    {
    title: "Investigating Long-term Training for Remote Sensing Object Detection",
    authors: "JongHyun Park, Yechan Kim✝, Moongu Jeon",
    venue: "Machine Vision and Applications (MVA)",
    year: 2025,
    type: "Journal",
        image: "/paper_snapshots/dbf.png",
    // imageAlt: "-",
    // ranking: "CCF C",
    tags: ["Object Detection", "Fine-tuning" ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1007/s00138-025-01747-z" },
      { label: "Code", href: "https://github.com/unique-chan/dbf" }
    ],
    featured: false
  },


    {
    title: "Learning to Remove Bad Weather: Towards Robust Visual Perception for Self-Driving",
    authors: "Younkwan Lee, Yechan Kim, Jongmin Yu, Moongu Jeon",
    venue: "IEEE Robotics and Automation Letters (RA-L) (⭐ ICRA Presentation)",
    year: 2022,
    type: "Journal",
            image: "/paper_snapshots/ral-bad.png",
    // image: "/publications/learning-to-remove-bad-weather.png",
    // imageAlt: "-",
    // ranking: "Q1",
    tags: ["Object Detection", "Enhancement", "Depth Estimation" ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/LRA.2022.3154830" },
    ],
    featured: false
  },

      {
    title: "Perception-Friendly Video Enhancement for Autonomous Driving under Adverse Weather Conditions",
    authors: "Younkwan Lee, Yeongmin Ko, Yechan Kim, Moongu Jeon",
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2022,
    type: "Conference",
    image: "/paper_snapshots/icra_younkwan.png",
    // imageAlt: "-",
    ranking: "CORE A*", //  | CCF B
    tags: ["Object Detection", "Enhancement", "Depth Estimation", "Contrastive Learning" ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/ICRA46639.2022.9811870" },
      
    ],
    featured: false
  },


      {
    title: "Imbalanced Image Classification with Complement Cross Entropy",
    authors: "Yechan Kim, Younkwan Lee, Moongu Jeon",
    venue: "Pattern Recognition Letters (PRL)",
    year: 2021,
    type: "Journal",
    image: "/paper_snapshots/cce.png",
    // imageAlt: "-",
    // ranking: "Q1",
    tags: ["Imbalanced Learning", "Image Classification" ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1016/j.patrec.2021.07.017" },
      { label: "Code", href: "https://github.com/unique-chan/Complement-Cross-Entropy" }
    ],
    citations: 100,
    featured: false
  },



  // {
  //   title: "Another Research Project or Preprint",
  //   authors: "Collaborator One, Your Name",
  //   venue: "arXiv preprint",
  //   year: 2025,
  //   type: "Preprint",
  //   tags: ["Preprint"],
  //   links: [{ label: "Preprint", href: "#" }]
  // }

  // Korean-language (domestic) publications, from https://sites.google.com/view/mlv/publications/domestic-papers
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  {
    title: "군중 계수를 위한 밀도 적응형 점 어노테이션 노이즈 주입 기법",
    authors: "이민기, 김예찬, 전문구",
    venue: "Korea Computer Congress",
    year: 2026,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "대형 언어 모델의 공간 추론을 위한 지도 이미지 및 텍스트 기반 지형 표현에 대한 비교",
    authors: "박종현, 김성헌, 김예찬, 권철희, 조규태, 진정훈, 김지아, 강선종, 전문구",
    venue: "Journal of KIIT (한국정보기술학회논문지)",
    year: 2026,
    type: "Korean Journal",
    links: [
      { label: "Paper", href: "http://dx.doi.org/10.14801/jkiit.2026.24.3.61" }
    ],
    featured: false
  },

  {
    title: "LLM의 공간 정보 이해를 위한 텍스트 기반 벡터 표현 압축에 관한 연구",
    authors: "박종현, 김예찬, 김성헌, 주종민, 이민기, 전문구",
    venue: "KICS Winter Conference",
    year: 2026,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "게임 엔진에서 획득한 가상 데이터의 경계 상자 레이블의 자동화된 정제 기법",
    authors: "김예찬*, 주종민*, 김수연, 이민기, 전문구",
    venue: "Korea Software Congress (KSC)",
    year: 2025,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "열화상 객체 탐지 성능 향상을 위한 비지도 이미지 변환 및 노이즈 주입 프레임워크",
    authors: "김수연*, 김예찬*, 주종민, 박종현, 윤동호, 전문구",
    venue: "Korea Software Congress (KSC)",
    year: 2025,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "모달리티간 차이에 강인한 비지도 영상 정합용 특징 기반 Focused Structural Fidelity Loss",
    authors: "윤동호, 김예찬, 김수연, 전문구",
    venue: "Korea Software Congress (KSC)",
    year: 2025,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "Arma 3로 생성한 군사용 가상 데이터를 활용한 실세계 일반 객체탐지 성능 향상에 관한 연구",
    authors: "김수연*, 김예찬*, 박종현, 김성헌, 김기웅, 전문구",
    venue: "한국소프트웨어공학학술대회 (KCSE)",
    year: 2025,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "전장 상황 인식을 위한 Arma 3 기반의 Scene Graph 생성 및 VQA 데이터 자동 생성에 관한 연구",
    authors: "김성헌, 박종현, 김예찬, 권철희, 조규태, 진정훈, 김지아, 전문구",
    venue: "Journal of KIIT (한국정보기술학회논문지)",
    year: 2025,
    type: "Korean Journal",
    links: [
      { label: "Paper", href: "http://dx.doi.org/10.14801/jkiit.2025.23.5.13" }
    ],
    featured: false
  },

  {
    title: "A Diffusion-based Data Augmentation Method for SAR Object Detection",
    authors: "한대영, 김예찬, 박종현, 윤동호, 전문구",
    venue: "Journal of KIIT (한국정보기술학회논문지)",
    year: 2025,
    type: "Korean Journal",
    links: [
      { label: "Paper", href: "http://dx.doi.org/10.14801/jkiit.2025.23.1.149" }
    ],
    featured: false
  },

  {
    title: "위성영상에서의 군 표적탐지를 위한 ARMA3 기반의 가상 데이터 생성 연구",
    authors: "김예찬*, 박종현*, 김수연*, 김시현*, 김성헌*, 고영민, 오중균, 윤동호, 전문구",
    venue: "Journal of KIISE (정보과학회논문지) (Invited)",
    year: 2025,
    type: "Korean Journal",
    links: [
      { label: "Paper", href: "https://doi.org/10.5626/JOK.2025.52.1.9" }
    ],
    featured: false
  },

  {
    title: "IDEA: 실내 밀도추정 연구를 위한 ARMA3 기반 데이터 생성 프레임워크",
    authors: "김성헌*, 김예찬*, 김시현, 전문구",
    venue: "Korea Computer Congress",
    year: 2024,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "전장에서의 군중 밀도추정을 위한 ARMA3 기반 데이터 생성에 관한 연구",
    authors: "김시현*, 김예찬*, 김성헌, 전문구",
    venue: "Korea Computer Congress",
    year: 2024,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "ABS: 전장 상황인식을 위한 Arma3 기반 가상 데이터 생성 프레임워크",
    authors: "김예찬*, 임재서*, 박종현*, 김시현, 전문구, 조규태, 진정훈, 김지아",
    venue: "Korea Computer Congress",
    year: 2024,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "LLM 기반 한국수어 데이터셋 구축 방안 및 번역 성능 연구",
    authors: "오중균, 김예찬, 전문구",
    venue: "Korea Software Congress (🏆 Best Paper Award)",
    year: 2023,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "Dynamic Backbone Freezing: 원격탐사 표적탐지 모델에 적합한 특징 추출을 위한 백본의 새로운 미세조정 기법",
    authors: "김예찬, 박종현, 오중균, 오수연, 전문구",
    venue: "Korea Software Congress",
    year: 2023,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "군 표적탐지를 위한 광학-열화상 쌍의 위성영상 가상 데이터 생성 연구",
    authors: "김예찬, 박종현, 오중균, 고영민, 전문구",
    venue: "Korea Software Congress",
    year: 2023,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "위성영상에서의 군 표적탐지 고도화를 위한 가상 데이터 생성 연구",
    authors: "김예찬, 박종현, 오중균, 고영민, 전문구",
    venue: "Korea Computer Congress (🏆 Best Paper Award)",
    year: 2023,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "국방 AI 감시체계 구축을 위한 ARMA3 기반 위성 데이터셋 합성 방안",
    authors: "박종현, 김예찬, 전문구",
    venue: "Korea Software Congress",
    year: 2022,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "위변조 번호판 식별을 위한 딥러닝 모델 훈련용 데이터셋 구축 방안",
    authors: "오중균, 김예찬, 전문구",
    venue: "Korea Software Congress",
    year: 2022,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "레이블 노이즈에 강건한 학습을 위한 교사-학생 모델 간 증류에서의 지식 정제 방법",
    authors: "오중균, 김예찬, 전문구",
    venue: "Korea Computer Congress (🏆 Outstanding Paper Award)",
    year: 2022,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "클래스별 규제 엔트로피를 이용한 시각적으로 유사한 객체의 분류",
    authors: "김예찬, 이윤관, 고영민, 유형준, 전병관, 전문구",
    venue: "Korea Computer Congress (🏆 Outstanding Paper Presentation Award)",
    year: 2021,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "관광도시 출입 유형을 고려한 대중교통 이용 관광객 식별 알고리즘 개선",
    authors: "한명훈, 김예찬, 김성백",
    venue: "KIISE Transactions on Computing Practices (정보과학회 컴퓨팅의 실제 논문지)",
    year: 2021,
    type: "Korean Journal",
    links: [
      { label: "Paper", href: "https://doi.org/10.5626/KTCP.2021.27.7.314" }
    ],
    featured: false
  },

  {
    title: "악천후 자율주행을 위한 Deep Joint Deraining and Dehazing 네트워크",
    authors: "이윤관, 김예찬, 유형준, Abhijeet Borgule, 전문구",
    venue: "Korea Software Congress",
    year: 2020,
    type: "Korean Conference",
    links: [],
    featured: false
  },

  {
    title: "암호화된 대중교통 교통카드 빅데이터에서의 관광객 O-D 통행패턴 추출 알고리즘: 관광 도시, 제주에의 적용",
    authors: "김예찬, 김철수, 김성백",
    venue: "KIISE Transactions on Computing Practices (정보과학회 컴퓨팅의 실제 논문지) (🏆 KIISE Best Paper Award)",
    year: 2020,
    type: "Korean Journal",
    links: [
      { label: "Paper", href: "https://doi.org/10.5626/KTCP.2020.26.8.349" }
    ],
    featured: false
  },

  {
    title: "Complement Entropy를 이용한 불균형 데이터의 학습",
    authors: "김예찬, 이윤관, 전문구",
    venue: "Korea Computer Congress (🏆 Outstanding Paper Award)",
    year: 2020,
    type: "Korean Conference",
    links: [],
    featured: false
  },





];
