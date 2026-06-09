export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  /** Link to the preprint version of a peer-reviewed paper. */
  preprintLink?: { label: string; href: string };
  /** This entry itself is a preprint (not yet peer-reviewed). */
  isPreprint?: boolean;
  tags?: string[];
  featured?: boolean;
  /** e.g. "Co-first author" — confirmed by the author. */
  contribution?: string;
}

/** Used to bold your name wherever the author list is rendered. */
export const ME = "Mingchuan Tang";

export const publications: Publication[] = [
  {
    title:
      "High-plex spatial RNA imaging in one round with conventional microscopes using color-intensity barcodes",
    authors: [
      "Tianyi Chang", "Shihui Zhao", "Kunyue Deng", "Zhizhao Liao", "Mingchuan Tang",
      "Yanxi Zhu", "Wuji Han", "Chenxi Yu", "Wenyi Fan", "Mengcheng Jiang", "Guanbo Wang",
      "Dongfang Liu", "Jirun Peng", "Yuhong Pang", "Peng Fei", "Jianbin Wang",
      "Chunhong Zheng", "Yanyi Huang",
    ],
    venue: "Nature Biotechnology",
    year: 2025,
    doi: "10.1038/s41587-025-02883-7",
    preprintLink: {
      label: "bioRxiv",
      href: "https://www.biorxiv.org/content/10.1101/2024.06.29.601330v1",
    },
    tags: ["PRISM", "spatial transcriptomics", "in situ imaging"],
    featured: true,
    contribution: "Co-first author",
  },
  {
    title: "A fuzzy sequencer for rapid DNA fragment counting and genotyping",
    authors: [
      "Wenxiong Zhou", "Li Kang", "Shuo Qiao", "Haifeng Duan", "Chenghong Yin", "Chao Liu",
      "Zhizhao Liao", "Mingchuan Tang", "Ruiying Zhang", "Lei Li", "Lei Shi", "Meijie Du",
      "Yipeng Wang", "Wentao Yue", "Yan Xiao", "Lin Di", "Xiannian Zhang", "Yuhong Pang",
      "Mingkun Li", "Lili Ren", "Jianbin Wang", "Zitian Chen", "Yanyi Huang",
    ],
    venue: "Nature Biomedical Engineering",
    year: 2025,
    doi: "10.1038/s41551-025-01430-8",
    tags: ["sequencing", "genotyping"],
  },
  {
    title:
      "Rapid and signal crowdedness-robust in situ sequencing through hybrid block coding",
    authors: [
      "Tianyi Chang", "Wuji Han", "Mengcheng Jiang", "Jizhou Li", "Zhizhao Liao",
      "Mingchuan Tang", "Jianyun Zhang", "Jie Shen", "Zitian Chen", "Peng Fei",
      "Xianwen Ren", "Yuhong Pang", "Guanbo Wang", "Jianbin Wang", "Yanyi Huang",
    ],
    venue: "PNAS",
    year: 2023,
    doi: "10.1073/pnas.2309227120",
    tags: ["SPRINTseq", "in situ sequencing", "spatial transcriptomics"],
    featured: true,
  },
  {
    title:
      "Deepening imaging-based spatial proteomics at high spatial resolution through controlled tissue resizing and in-situ bottom-up mass spectrometry",
    authors: [
      "Kunyue Deng", "Lingpeng Zhan", "Li Yi", "Jingpeng Zhang", "Mingchuan Tang",
      "Tianyi Chang", "Gaofeng Ji", "Xinyang Shao", "Xiang Xu", "Xiaoyun Wei",
      "Tianming Zhang", "Jiacheng Yao", "Jianbin Wang", "Guanbo Wang", "Yanyi Huang",
    ],
    venue: "bioRxiv",
    year: 2025,
    doi: "10.1101/2025.06.12.659329",
    isPreprint: true,
    tags: ["spatial proteomics", "mass spectrometry"],
  },
];
