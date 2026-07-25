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
    title: "ShadowCast: Learning-Free Shadow Augmentation for Remote Sensing Image Segmentation",
    authors: "Dongho Yoon, Yechan Kim✝, Namhoon Jung, Moongu Jeon",
    venue: "Submitted to IEEE",
    year: 2026,
    type: "Preprint",
    // image: "/paper_snapshots/gmad.png",
    // imageAlt: "-",
    // ranking: "CORE A*",
    // citations: 0,
    tags: ["Semantic Segmentation"],
    links: [
      // { label: "Paper", href: "https://doi.org/10.1145/3767308.3834743" },
      // { label: "Code", href: "https://unique-chan.github.io/G-MAD-Project/" },
      // { label: "Dataset", href: "https://unique-chan.github.io/AMOD-Project/" }

    ],
    featured: true
  },


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
    tags: ["Object Detection" ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1145/3767308.3834743" },
      { label: "Code", href: "https://unique-chan.github.io/G-MAD-Project/" },
      { label: "Dataset", href: "https://unique-chan.github.io/AMOD-Project/" }

    ],
    featured: true
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
    tags: ["Semantic Segmentation" ],
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
    tags: ["Object Detection" ],
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
    tags: ["Image Classification" ],
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
        // image: "/paper_snapshots/sens.jpg",
    // imageAlt: "-",
    // ranking: "Q1",
    tags: ["Object Detection" ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1007/s00138-025-01747-z" },
      { label: "Code", href: "https://github.com/unique-chan/dbf" }
    ],
    featured: false
  },


    {
    title: "Learning to remove bad weather: towards robust visual perception for self-driving",
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
    title: "Perception-friendly video enhancement for autonomous driving under adverse weather conditions",
    authors: "Younkwan Lee, Yeongmin Ko, Yechan Kim, Moongu Jeon",
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2022,
    type: "Conference",
    // image: "/publications/learning-to-remove-bad-weather.png",
    // imageAlt: "-",
    ranking: "CORE A*",
    tags: ["Object Detection", "Enhancement", "Depth Estimation", "Contrastive Learning" ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1109/ICRA46639.2022.9811870" },
      
    ],
    featured: false
  },


      {
    title: "Imbalanced image classification with complement cross entropy",
    authors: "Yechan Kim, Younkwan Lee, Moongu Jeon",
    venue: "Pattern Recognition Letters (PRL)",
    year: 2021,
    type: "Journal",
    // image: "/publications/learning-to-remove-bad-weather.png",
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
