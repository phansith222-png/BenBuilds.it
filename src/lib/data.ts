export type PhaseStatus = "mastered" | "building" | "next";
export type IconKey = "check" | "cpu" | "target";

export interface Language {
  flag: string;
  name: string;
  dots: number;
  label: string;
}

export interface TechCategory {
  label: string;
  skills: string[];
}

export interface Phase {
  index: string;
  iconKey: IconKey;
  status: PhaseStatus;
  title: string;
  description: string;
  skills: string[];
}

export interface Channel {
  iconKey: "mail" | "linkedin" | "github";
  label: string;
  description: string;
  detail: string;
  href: string;
  external: boolean;
}

export const MARQUEE_ITEMS = [
  "React", "TypeScript", "Node.js", "Next.js", "Framer Motion",
  "Full Stack", "Bangkok, TH", "Open to Work", "Tailwind CSS",
];

export const CTA_MARQUEE_ITEMS = [
  "LET'S BUILD", "SAY HI", "EMAIL", "LINKEDIN", "GITHUB", "CONNECT", "COLLABORATE",
];

export const languages: Language[] = [
  { flag: "🇹🇭", name: "Thai",    dots: 5, label: "Native" },
  { flag: "🇺🇸", name: "English", dots: 3, label: "Intermediate" },
  { flag: "🇨🇳", name: "Chinese", dots: 2, label: "Conversational" },
];

export const techStack: TechCategory[] = [
  { label: "Languages",     skills: ["JavaScript", "TypeScript"] },
  { label: "Frontend",      skills: ["React", "Next.js", "Tailwind CSS", "Vite", "Framer Motion", "DaisyUI", "Zustand"] },
  { label: "Backend",       skills: ["Node.js","Nest.js", "Express.js", "REST APIs", "Socket.io", "JWT", "Passport"] },
  { label: "Database",      skills: ["MySQL", "PostgreSQL","MongoDB", "Prisma", "Supabase"] },
  { label: "Tools",         skills: ["Git", "Fork", "Docker", "Figma"] },
  { label: "AI & Workflow", skills: ["Gemini API", "AI Agents"] },
];

export const learningPath: Phase[] = [
  {
    index: "01",
    iconKey: "check",
    status: "mastered",
    title: "Foundation",
    description: "Production-ready web fundamentals — applied in real projects at CodeCamp Thailand covering full CRUD systems, responsive UI, and version-controlled team workflows.",
    skills: [ "Docker","Next.js", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "Figma", "TypeScript", "Next.js 15+", "Node.js", "Express.js", "SQL", "Prisma", "Supabase", "Gemini API", "AI Agents"],
  },
  {
    index: "02",
    iconKey: "cpu",
    status: "building",
    title: "Current Frontier",
    description: "Currently deepening: containerised deployments with Docker, NoSQL databases with MongoDB, and enterprise-grade backend architecture with Nest.js.",
    skills: [ "MongoDB", "Nest.js","Vue.js"],
  },
  {
    index: "03",
    iconKey: "target",
    status: "next",
    title: "Strategic Horizon",
    description: "Next phase: frontend framework expansion with Vue.js, cross-platform mobile with Flutter, and CI/CD pipelines for production-scale deployment.",
    skills: ["Nuxt.js", "Flutter", "CI/CD","Angular","C#","AWS"],
  },
];

export const channels: Channel[] = [
  {
    iconKey: "mail",
    label: "Email",
    description: "Best way to reach me. I reply within 24 hours.",
    detail: "phansit.h222@gmail.com",
    href: "mailto:phansit.h222@gmail.com",
    external: false,
  },
  {
    iconKey: "linkedin",
    label: "LinkedIn",
    description: "Let's connect professionally and grow our network.",
    detail: "linkedin.com/in/ben-phansit",
    href: "https://www.linkedin.com/in/ben-phansit/",
    external: true,
  },
  {
    iconKey: "github",
    label: "GitHub",
    description: "Browse my projects, code, and open-source work.",
    detail: "github.com/phansith222-png",
    href: "https://github.com/phansith222-png",
    external: true,
  },
];
