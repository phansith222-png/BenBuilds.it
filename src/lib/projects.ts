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
      "An AI-powered tarot reading app designed around a UX research insight: users don't need more cards — they need clarity on what a reading actually means for them.",
    coverImage: "/images/BigBodenew.png",
    problem:
      "Most tarot websites surface card definitions, but there's almost no platform that tells you what the truest interpretation is in your specific context — and crucially, whether the outcome is good or bad for you. Readers leave more confused than when they started.",
    solution:
      "Applied UX research to map where users drop off in existing tarot flows, then built a full-stack app where users describe their situation, a spread is drawn, and Gemini 2.0 Flash generates a contextual, sentiment-aware reading — so you know exactly where you stand.",
    features: [
      "AI-powered readings via Gemini API 2.0 Flash",
      "Dynamic card spread generation",
      "Personalised interpretations based on user context",
      "Reading history stored in MySQL",
      "Responsive UI with Tailwind CSS",
    ],
    tech: ["Node.js", "Express", "React", "Vite", "Tailwind CSS", "PostgreSQL", "Prisma", "Google Gemini"],
    githubUrl: "https://github.com/phansith222-png/BB_Frontend",
    liveUrl: "https://bb-frontend-sigma.vercel.app/",
    youtubeId: "5VSbur7Z6-E",
  },
  {
    slug: "4b1k",
    title: "4B1K",
    subtitle: "Artist Community Platform",
    role: "Project Owner & Frontend Developer",
    category: "Community Platform",
    description:
      "A community platform built for artists — not just listeners — with profiles, discographies, and social features that put creators at the centre.",
    coverImage: "/images/4B1K.png",
    problem:
      "There's no concert or music platform with a real community that actually targets artists. Streaming services are built for passive listening; fans have no structured space to rally around specific artists, and artists have no dedicated hub to build their community.",
    solution:
      "Built a platform that flips the model: artist profiles, full discographies, and YouTube-powered content sit inside a community space designed for artist-first discovery and engagement — not algorithm-first streaming.",
    features: [
      "Artist profiles with full discography",
      "YouTube API integration for curated video content",
      "Identity insights and artist influences",
      "Community-driven content discovery",
      "React frontend with Express.js backend",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "DaisyUI", "Zustand", "Framer Motion", "Socket.io", "Node.js", "Express", "Prisma", "MySQL", "JWT", "Passport"],
    githubUrl: "https://github.com/phansith222-png/4B1K-frontend",
    liveUrl: null,
    youtubeId: "-BANRczcUe8",
  },
];
