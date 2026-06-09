export interface ResearchHighlight {
  key: string;
  name: string;
  full: string;
  blurb: string;
  points: string[];
  /** CSS custom-property name used for the card's fluorescent glow */
  accent: string;
  doi?: string;
  links?: { label: string; href: string }[];
}

export const research: ResearchHighlight[] = [
  {
    key: "prism",
    name: "PRISM",
    full: "Profiling of RNA In-Situ through single-round iMaging",
    blurb:
      "High-plex spatial RNA imaging completed in a single round on a conventional fluorescence microscope, encoded with color-intensity barcodes — fluidics-free, with the whole workflow finished within a day.",
    points: [
      "Up to 64-plex RNA imaging in one round",
      "Validated on mouse brain & embryo and human HCC (>5.7M annotated cells)",
      "Extended to 100-µm slices for 3D cell atlases and subcellular RNA localization",
    ],
    accent: "--color-fluor-magenta",
    doi: "10.1038/s41587-025-02883-7",
    links: [{ label: "Nature Biotechnology", href: "https://doi.org/10.1038/s41587-025-02883-7" }],
  },
  {
    key: "sprintseq",
    name: "SPRINTseq",
    full: "Hybrid block coding for rapid in situ sequencing",
    blurb:
      "An in situ sequencing strategy that pairs hybrid block coding with a molecular-dilution scheme for fast, signal-crowdedness-robust spatial transcriptomics at near optical-diffraction-limit resolution.",
    points: [
      "Targeted transcriptome of a mouse-brain slice profiled in ~9.5 h",
      ">142M transcripts from 453,843 cells across four slices in under 2 days",
      "Resolved cellular & subcellular architecture of Alzheimer's disease",
    ],
    accent: "--color-fluor-cyan",
    doi: "10.1073/pnas.2309227120",
    links: [{ label: "PNAS", href: "https://doi.org/10.1073/pnas.2309227120" }],
  },
];
