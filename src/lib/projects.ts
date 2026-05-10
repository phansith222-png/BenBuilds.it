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
  videoPath: string | null;
  videoStartTime?: number;
}

export const projects: Project[] = [
  {
    slug: "bigbode",
    title: "BigBode (BB)",
    subtitle: "AI Tarot Reading App",
    role: "Full Stack Developer",
    category: "AI-Powered Application",
    description:
      "A sophisticated AI Tarot reading application that simplifies complex interpretations into accessible, personalized insights.",
    coverImage: "/images/BigBodenew.png",
    problem:
      "Traditional tarot interpretations are complex, inconsistent, and often feel generic — there's no way to get a reading that reflects your actual situation.",
    solution:
      "Built a full-stack app where users describe their question, a card spread is drawn, and Google's Gemini API 2.0 Flash generates a deeply personalised reading in real-time.",
    features: [
      "AI-powered readings via Gemini API 2.0 Flash",
      "Dynamic card spread generation",
      "Personalised interpretations based on user context",
      "Reading history stored in MySQL",
      "Responsive UI with Tailwind CSS",
    ],
    tech: ["React", "MySQL", "Gemini API 2.0 Flash", "Tailwind CSS"],
    githubUrl: "https://github.com/phansith222-png/BB_Frontend",
    liveUrl: null,
    videoPath: "/videos/BigBode.mp4",
    videoStartTime: 5,
  },
  {
    slug: "4b1k",
    title: "4B1K",
    subtitle: "Artist Community Platform",
    role: "Project Owner & Frontend Developer",
    category: "Community Platform",
    description:
      "A dedicated central hub for music enthusiasts featuring comprehensive artist profiles, discographies, and identity insights.",
    coverImage: "/images/4B1K.png",
    problem:
      "Streaming platforms show music, not meaning — there's nowhere to explore an artist's full identity, influences, and discography in one place.",
    solution:
      "Built a community hub with artist profiles, discographies, and identity insights powered by the YouTube API, surfacing curated video content alongside artist information.",
    features: [
      "Artist profiles with full discography",
      "YouTube API integration for curated video content",
      "Identity insights and artist influences",
      "Community-driven content discovery",
      "React frontend with Express.js backend",
    ],
    tech: ["React", "Express.js", "YouTube API"],
    githubUrl: "https://github.com/phansith222-png/4B1K-frontend",
    liveUrl: null,
    videoPath: "/videos/4B1K Presentation.mp4",
  },
];
