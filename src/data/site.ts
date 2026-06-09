export interface SocialLink {
  label: string;
  href: string;
  icon: "email" | "github" | "scholar" | "researchgate" | "linkedin" | "orcid";
  confirmed: boolean;
}

export const site = {
  name: "Tang Mingchuan",
  nameZh: "唐明川",
  role: "Ph.D. Student",
  affiliation: "BIOPIC, Peking University",
  field: "Spatial transcriptomics",
  tagline:
    "Imaging-based spatial transcriptomics — building high-plex in situ methods and the analysis behind them.",
  location: "Beijing, China",
  url: "https://tangmc0210.github.io",
  email: "tangmc0210@foxmail.com",
} as const;

export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:tangmc0210@foxmail.com", icon: "email", confirmed: true },
  { label: "GitHub", href: "https://github.com/tangmc0210", icon: "github", confirmed: true },
];
