"use client";

import { motion, Variants } from "framer-motion";

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const CpuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M15 2v2" />
    <path d="M15 20v2" />
    <path d="M2 15h2" />
    <path d="M2 9h2" />
    <path d="M20 15h2" />
    <path d="M20 9h2" />
    <path d="M9 2v2" />
    <path d="M9 20v2" />
  </svg>
);

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const roadmapData = [
  {
    phase: "01. Foundation",
    icon: CheckIcon,
    title: "Mastered Tech Stack",
    description: "Robust foundation in web development, from core web technologies up to modern React frameworks.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  },
  {
    phase: "02. The Current Frontier",
    icon: CpuIcon,
    title: "Currently Exploring",
    description: "Actively building with advanced tooling, modern styling, and autonomous systems.",
    skills: ["TypeScript", "Tailwind CSS", "Next.js 15+", "AI Agents"],
  },
  {
    phase: "03. Strategic Horizon",
    icon: TargetIcon,
    title: "Future Goals",
    description: "Expanding the architectural scale to include advanced backend frameworks, alternative frontends, NoSQL databases, and cross-platform mobile development.",
    skills: ["Nest.js", "Nuxt.js", "MongoDB", "Flutter"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="w-full bg-gray-panel text-text-gray-main py-40 px-8 border-t border-text-gray-sub/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[#1A1A1A]">
            Learning Path.
          </h2>
          <p className="text-xl md:text-2xl text-text-gray-sub mt-6 max-w-3xl font-light leading-relaxed">
            A transparent log of the tools mastered, the systems currently being built, and the architectural goals for the future.
          </p>
        </motion.div>

        <div className="relative pl-4 md:pl-10">
          {/* Vertical Line */}
          <div className="absolute left-[31px] md:left-[79px] top-4 bottom-12 w-[2px] bg-gradient-to-b from-[#1A1A1A] via-text-gray-sub/20 to-transparent" />

          <motion.div
            className="flex flex-col gap-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {roadmapData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants} className="relative flex flex-col md:flex-row items-start gap-8 md:gap-16">
                  {/* Icon Container */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white shadow-xl -ml-2 md:-ml-0 border-4 border-gray-panel">
                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 mt-2">
                    <h3 className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-text-gray-sub mb-4">
                      {item.phase}
                    </h3>
                    <h4 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4">
                      {item.title}
                    </h4>
                    <p className="text-lg md:text-xl text-text-gray-sub font-light mb-8 max-w-2xl leading-relaxed">
                      {item.description}
                    </p>

                    {/* Skills Grid */}
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-5 py-2 md:py-3 border border-[#1A1A1A]/10 rounded-full text-sm md:text-base font-medium text-[#1A1A1A] bg-white/40 shadow-sm backdrop-blur-sm hover:bg-white/80 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
