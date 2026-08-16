import type {
  NavItem,
  SkillGroup,
  ExperienceItem,
  EducationItem,
} from "../types";

export const PROFILE = {
  name: "Jett Mag P. Magsino",
  title: "Software Engineer",
  location: "Norzagaray, Bulacan, PH",
  email: "jmpmagsino@gmail.com",
  phone: "0949 707 3155",
  phoneHref: "+639497073155",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Jett_Mag_Magsino_Resume.pdf",
  avatarUrl: "/avatar.jpg",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", file: "home.tsx" },
  { id: "about", label: "About", file: "about.tsx" },
  { id: "contact", label: "Contact", file: "contact.tsx" },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    cat: "languages",
    items: ["JavaScript", "TypeScript", "Java", "C#", "SQL", "HTML", "CSS"],
  },
  {
    cat: "frameworks",
    items: [
      "React",
      "Node",
      "Express",
      "Next.js",
      "Angular",
      "Spring Boot",
      "Hibernate",
      "ASP.NET Core",
    ],
  },
  { cat: "state", items: ["Redux", "Jotai"] },
  { cat: "testing", items: ["Jest", "React Testing Library"] },
  { cat: "validation", items: ["Zod", "Yup"] },
  {
    cat: "databases",
    items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "DynamoDB"],
  },
  {
    cat: "cloud_devops",
    items: [
      "AWS",
      "GCP",
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Microservices",
      "Monorepo",
    ],
  },
  { cat: "ops", items: ["Splunk", "CloudWatch", "ServiceNow"] },
  { cat: "apis", items: ["RESTful API", "SOAP API", "Postman"] },
  { cat: "vcs", items: ["Git", "GitHub", "GitLab", "Bitbucket"] },
  { cat: "process", items: ["Agile/Scrum", "Jira"] },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    hash: "a1c9e2f",
    role: "Senior Software Engineer",
    company: "Novare Technologies, Inc.",
    period: "May 2023 — Present",
    place: "Taguig, NCR",
    current: true,
    projects: [
      "CPMA (My Sun Life PH)",
      "SLGFI AHO Portal",
      "GlobeOne",
      "Bayad",
    ],
    bullets: [
      "Designs, develops, and maintains application solutions based on specs and requirements.",
      "Integrates, tests, and debugs solutions across development and production environments.",
      "Performs code reviews to uphold quality and enforce best practices.",
      "Documents system design, entity relationships, and process flows.",
      "Provides technical guidance and application support, resolving incidents with long-term fixes.",
    ],
  },
  {
    hash: "7f3b410",
    role: "Applications Developer",
    company: "TELUS International Philippines, Inc.",
    period: "Jan 2022 — May 2023",
    place: "Pasig, NCR",
    current: false,
    projects: ["CASA", "Skills Matrix", "Career City"],
    bullets: [
      "Deployed to a Canadian client as a full-stack developer.",
      "Refined business requirements into functional specs for the dev team.",
      "Owned detailed design, documentation, development, unit testing, and maintenance.",
      "Diagnosed issues and escalated appropriately under limited supervision.",
      "Mentored teammates on professional and technical growth.",
    ],
  },
  {
    hash: "2d88c6a",
    role: "Software Developer",
    company: "Premier Software Enterprise, Inc.",
    period: "Mar 2021 — Aug 2021",
    place: "Makati, NCR",
    current: false,
    projects: ["PSE EASy"],
    bullets: [
      "Translated business analysis requirements into functional applications.",
      "Built and maintained reusable, reliable code supporting project specs.",
      "Integrated data storage solutions to improve the application experience.",
      "Identified bottlenecks and bugs, devising mitigations.",
    ],
  },
  {
    hash: "9e0a1f4",
    role: "Software Developer Intern",
    company: "Northeast Business Solutions",
    period: "Feb 2020 — Jun 2020",
    place: "Norzagaray, Bulacan",
    current: false,
    projects: [],
    bullets: [
      "Managed software modification and client-requested support and maintenance.",
      "Handled system testing and validation procedures.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Bulacan State University",
    location: "San Jose del Monte, Bulacan",
    years: "2017 – 2020",
  },
  {
    degree: "Associate in Computer Technology",
    school: "Bulacan State University",
    location: "San Jose del Monte, Bulacan",
    years: "2015 – 2017",
  },
];
