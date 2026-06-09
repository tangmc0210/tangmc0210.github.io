export interface Award {
  year: number;
  title: string;
  org?: string;
}

export const awards: Award[] = [
  { year: 2024, title: "Outstanding Graduates of Beijing" },
  { year: 2022, title: "Liao Kaiyuan Scholarship", org: "Peking University" },
  { year: 2022, title: "Model Student of Excellence", org: "Peking University" },
  { year: 2021, title: "Social Work Award", org: "Peking University" },
];
