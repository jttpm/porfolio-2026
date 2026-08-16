export type SectionId = "home" | "about" | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  file: string;
}

export interface SkillGroup {
  cat: string;
  items: string[];
}

export interface ExperienceItem {
  hash: string;
  role: string;
  company: string;
  period: string;
  place: string;
  current: boolean;
  projects: string[];
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  years: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
