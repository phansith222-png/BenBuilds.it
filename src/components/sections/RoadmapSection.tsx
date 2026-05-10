"use client";

import { motion, Variants } from "framer-motion";
import { TechStackGrid } from "@/components/roadmap/TechStackGrid";
import { LearningPath, Phase } from "@/components/roadmap/LearningPath";

interface SkillCategory {
  label: string;
  skills: string[];
}

const techStackData: SkillCategory[] = [
  { label: "Languages",     skills: ["JavaScript", "TypeScript"] },
  { label: "Frontend",      skills: ["React", "Next.js", "Tailwind CSS"] },
  { label: "Backend",       skills: ["Node.js", "Express.js", "REST APIs"] },
  { label: "Database",      skills: ["SQL", "Prisma", "Supabase"] },
  { label: "Tools",         skills: ["Git", "Fork", "Docker", "Figma"] },
  { label: "AI & Workflow", skills: ["Gemini API", "AI Agents"] },
];

const learningPathData: Phase[] = [
  {
    index: "01",
    iconKey: "check",
    status: "mastered",
    title: "Foundation",
    description: "Core web technologies and modern React-based frameworks, fully production-capable.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "Figma"],
  },
  {
    index: "02",
    iconKey: "cpu",
    status: "building",
    title: "Current Frontier",
    description: "Type-safe, full-stack development with API-connected backends and AI integrations.",
    skills: ["TypeScript", "Next.js 15+", "Node.js", "Express.js", "SQL", "Prisma", "Supabase", "Docker", "Gemini API", "AI Agents"],
  },
  {
    index: "03",
    iconKey: "target",
    status: "next",
    title: "Strategic Horizon",
    description: "Enterprise-scale backends, alternative meta-frameworks, and cross-platform mobile.",
    skills: ["Nest.js", "Nuxt.js", "MongoDB", "Flutter", "CI/CD"],
  },
];

const GOLDEN = [0.16, 1, 0.3, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: GOLDEN } },
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="w-full bg-gray-panel text-text-gray-main py-40 px-8 border-t border-text-gray-sub/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: GOLDEN }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-[#1A1A1A]">
            Skills & Path.
          </h2>
          <p className="text-xl md:text-2xl text-text-gray-sub mt-6 max-w-3xl font-light leading-relaxed">
            Every tool I use today, and where I am heading next.
          </p>
        </motion.div>

        <TechStackGrid
          categories={techStackData}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        <motion.div
          className="my-24 h-px w-full bg-[#1A1A1A]/10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: GOLDEN }}
          style={{ originX: 0 }}
        />

        <LearningPath
          phases={learningPathData}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>
    </section>
  );
}
