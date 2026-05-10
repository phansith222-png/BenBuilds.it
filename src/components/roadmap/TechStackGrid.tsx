"use client";

import { motion, Variants } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiSupabase,
  SiGit,
  SiDocker,
  SiFigma,
  SiGooglegemini,
  SiVite,
  SiFramer,
  SiDaisyui,
  SiSocketdotio,
  SiJsonwebtokens,
  SiPassport,
} from "react-icons/si";
import { Globe, GitFork, Cpu, Layers } from "lucide-react";

const SKILL_ICONS: Record<string, React.ReactNode> = {
  "JavaScript":    <SiJavascript size={28} />,
  "TypeScript":    <SiTypescript size={28} />,
  "React":         <SiReact size={28} />,
  "Next.js":       <SiNextdotjs size={28} />,
  "Tailwind CSS":  <SiTailwindcss size={28} />,
  "Vite":          <SiVite size={28} />,
  "Framer Motion": <SiFramer size={28} />,
  "DaisyUI":       <SiDaisyui size={28} />,
  "Zustand":       <Layers size={28} />,
  "Node.js":       <SiNodedotjs size={28} />,
  "Express.js":    <SiExpress size={28} />,
  "REST APIs":     <Globe size={28} />,
  "Socket.io":     <SiSocketdotio size={28} />,
  "JWT":           <SiJsonwebtokens size={28} />,
  "Passport":      <SiPassport size={28} />,
  "SQL":           <SiPostgresql size={28} />,
  "MySQL":         <SiMysql size={28} />,
  "PostgreSQL":    <SiPostgresql size={28} />,
  "Prisma":        <SiPrisma size={28} />,
  "Supabase":      <SiSupabase size={28} />,
  "Git":           <SiGit size={28} />,
  "Fork":          <GitFork size={28} />,
  "Docker":        <SiDocker size={28} />,
  "Figma":         <SiFigma size={28} />,
  "Gemini API":    <SiGooglegemini size={28} />,
  "AI Agents":     <Cpu size={28} />,
};

interface SkillCategory {
  label: string;
  skills: string[];
}

interface TechStackGridProps {
  categories: SkillCategory[];
  containerVariants: Variants;
  itemVariants: Variants;
}

export function TechStackGrid({ categories, containerVariants, itemVariants }: TechStackGridProps) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.25em] uppercase text-text-gray-sub mb-10">
        Tech Stack
      </p>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {categories.map((cat, i) => (
          <motion.div key={i} variants={itemVariants}>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-text-gray-sub mb-3">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  className="flex flex-col items-center justify-center gap-1.5 w-20 py-3 px-2 rounded-xl border border-[#1A1A1A]/10 bg-white/60 text-text-gray-main cursor-default select-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {SKILL_ICONS[skill] ?? <div className="w-7 h-7 rounded bg-[#1A1A1A]/10" />}
                  <span className="text-[10px] font-medium text-text-gray-sub text-center leading-tight">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
