export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  category: string;
  description: string;
  coverImage: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  liveUrl: string | null;
  youtubeId: string | null;
}

export const projects: Project[] = [
  {
    slug: "bigbode",
    title: "BigBode (BB)",
    subtitle: "AI Tarot Reading App",
    role: "Full Stack Developer",
    category: "AI-Powered Application",
    description:
      "A full-stack AI-powered tarot reading platform built to solve a real gap: users don't want more card definitions — they need contextual, sentiment-aware readings that tell them what an outcome actually means for their situation.",
    coverImage: "/images/BigBodenew.png",
    problem:
      "Most tarot websites surface card definitions, but no platform tells you what the truest interpretation is in your specific context — or whether the outcome is good or bad for you. Readers leave more confused than when they started.",
    solution:
      "Designed and built a full-stack app where users describe their situation, a spread is drawn, and Google Gemini SDK generates a context-aware, sentiment-clear reading — backed by secure auth, session management, and a reliable database layer.",
    features: [
      "Designed and built full-stack architecture with secure user authentication and session management",
      "Integrated Google Gemini SDK for dynamic AI-generated readings with reliable error handling",
      "Managed database schema using MySQL + Prisma ORM for data integrity and query performance",
      "Dynamic card spread generation tailored to each user's personal context",
      "Responsive UI built with React, Vite, and Tailwind CSS",
    ],
    tech: ["Node.js", "Express", "React", "Vite", "Tailwind CSS", "PostgreSQL", "Prisma", "Google Gemini"],
    githubUrl: "https://github.com/phansith222-png/BB_Frontend",
    liveUrl: "https://bb-frontend-sigma.vercel.app/",
    youtubeId: "5VSbur7Z6-E",
  },
  {
    slug: "4b1k",
    title: "4B1K",
    subtitle: "Community Concert Platform",
    role: "Project Manager & Frontend Developer",
    category: "Community Platform",
    description:
      "Led a 5-person team to build a community-first concert tracking platform — artist profiles, event listings, and community forums designed for fans who care about who makes the music, not just the algorithm.",
    coverImage: "/images/4B1K.png",
    problem:
      "There's no concert or music platform with a real community that targets artists. Streaming services are built for passive listening; fans have no structured space to rally around specific artists, and artists have no dedicated hub to build their community.",
    solution:
      "Led requirement gathering, project roadmap, and Git workflow for a 5-person team — then built a platform where artist profiles, discographies, event listings, and YouTube-powered content sit inside a community space designed for artist-first discovery.",
    features: [
      "Led a 5-person team from requirement gathering through delivery, managing Git workflow and task distribution",
      "Built artist profiles with full discographies, event listings, and community forum features",
      "Integrated YouTube API for curated artist video content and real-time features via Socket.io",
      "Developed core features using React, Node.js, and MySQL with JWT-based authentication",
      "Supported teammates through code reviews and pair programming sessions",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "DaisyUI", "Zustand", "Framer Motion", "Socket.io", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Passport"],
    githubUrl: "https://github.com/phansith222-png/4B1K-frontend",
    liveUrl: "https://4b1k.vercel.app/",
    youtubeId: "-BANRczcUe8",
  },
];
