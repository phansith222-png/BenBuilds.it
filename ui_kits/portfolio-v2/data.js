/* Portfolio data — extracted verbatim from benbuilds.it source */

window.BB_DATA = {
  hero: {
    hi: "Hi I am",
    name: "Ben Phansit",
    title: ["Full Stack", "Developer"],
    blurb: "Blending the analytical precision of Payroll Outsourcing with scalable, modern software engineering.",
  },

  quote: {
    text: "From managing enterprise-level payroll logic to architecting scalable web applications.",
    meta: "The precision remains the same.",
  },

  about: {
    title: "About Me",
    body: "My career didn't start in an IDE, but in the intricate world of Payroll Outsourcing. Dealing with complex compliance laws and strict enterprise workflows instilled an uncompromising demand for data precision. Transitioning to Full Stack Development was a natural evolution, allowing me to translate problem-solving rigor into architecting scalable, beautiful software.",
    skills: [
      { label: "Frontend Development", pct: 90 },
      { label: "Backend Architecture", pct: 85 },
      { label: "UI/UX Design", pct: 75 },
      { label: "Database Management", pct: 80 },
    ],
  },

  languages: [
    { flag: "🇹🇭", name: "Thai", dots: 5, label: "Native" },
    { flag: "🇺🇸", name: "English", dots: 3, label: "Professional" },
    { flag: "🇨🇳", name: "Chinese", dots: 2, label: "Conversational" },
  ],

  techStack: [
    { label: "Languages", skills: ["JavaScript", "TypeScript"] },
    { label: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Vite", "Framer Motion", "DaisyUI", "Zustand"] },
    { label: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT", "Passport"] },
    { label: "Database", skills: ["MySQL", "PostgreSQL", "Prisma", "Supabase"] },
    { label: "Tools", skills: ["Git", "Fork", "Docker", "Figma"] },
    { label: "AI & Workflow", skills: ["Gemini API", "AI Agents"] },
  ],

  learningPath: [
    {
      index: "01", iconKey: "check", status: "mastered",
      title: "Foundation",
      description: "Core web technologies and modern React-based frameworks, fully production-capable.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "Figma"],
    },
    {
      index: "02", iconKey: "cpu", status: "building",
      title: "Current Frontier",
      description: "Type-safe, full-stack development with API-connected backends and AI integrations.",
      skills: ["TypeScript", "Next.js 15+", "Node.js", "Express.js", "SQL", "Prisma", "Supabase", "Docker", "Gemini API", "AI Agents"],
    },
    {
      index: "03", iconKey: "target", status: "next",
      title: "Strategic Horizon",
      description: "Enterprise-scale backends, alternative meta-frameworks, and cross-platform mobile.",
      skills: ["Nest.js", "Nuxt.js", "MongoDB", "Flutter", "CI/CD"],
    },
  ],

  projects: [
    {
      slug: "bigbode",
      title: "BigBode (BB)",
      subtitle: "AI Tarot Reading App",
      role: "Full Stack Developer",
      category: "AI-Powered Application",
      description: "An AI-powered tarot reading app designed around a UX research insight: users don't need more cards — they need clarity on what a reading actually means for them.",
      coverImage: "../../assets/projects/BigBode.png",
      problem: "Most tarot websites surface card definitions, but there's almost no platform that tells you what the truest interpretation is in your specific context — and crucially, whether the outcome is good or bad for you. Readers leave more confused than when they started.",
      solution: "Applied UX research to map where users drop off in existing tarot flows, then built a full-stack app where users describe their situation, a spread is drawn, and Gemini 2.0 Flash generates a contextual, sentiment-aware reading — so you know exactly where you stand.",
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
      hasDemo: true,
    },
    {
      slug: "4b1k",
      title: "4B1K",
      subtitle: "Artist Community Platform",
      role: "Project Owner & Frontend Developer",
      category: "Community Platform",
      description: "A community platform built for artists — not just listeners — with profiles, discographies, and social features that put creators at the centre.",
      coverImage: "../../assets/projects/4B1K.png",
      problem: "There's no concert or music platform with a real community that actually targets artists. Streaming services are built for passive listening; fans have no structured space to rally around specific artists, and artists have no dedicated hub to build their community.",
      solution: "Built a platform that flips the model: artist profiles, full discographies, and YouTube-powered content sit inside a community space designed for artist-first discovery and engagement — not algorithm-first streaming.",
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
      hasDemo: true,
    },
  ],

  channels: [
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
  ],
};
