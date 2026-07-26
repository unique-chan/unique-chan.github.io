export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "Conference" | "Journal" | "Preprint" | "Workshop";
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
    title: "ShadowCast: Learning-Free Shadow Augmentation for Remote Sensing Image Segmentation",
    authors: "Dongho Yoon, Yechan Kim✝, Namhoon Jung, Moongu Jeon",
    venue: "Submitted to IEEE",
    year: 2026,
    type: "Preprint",
    // image: "/paper_snapshots/gmad.png",
    // imageAlt: "-",
    // ranking: "CORE A*",
    // citations: 0,
    tags: ["Semantic Segmentation", "Change Detection", "Augmentation"],
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
    ranking: "CORE A*",
    // citations: 0,
    tags: ["Object Detection", "RGB-T", "Multi-View", "Benchmark"],
    links: [
      { label: "Paper", href: "https://doi.org/10.1145/3767308.3834743" },
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
    ranking: "CORE B",
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
    // ranking: "Q1",
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
    ranking: "CORE A*",
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



];
