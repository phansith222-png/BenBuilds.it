"use client";

import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiVite,
  SiFramer, SiDaisyui, SiNodedotjs, SiExpress, SiSocketdotio, SiJsonwebtokens,
  SiPassport, SiMysql, SiPostgresql, SiPrisma, SiSupabase, SiGit, SiDocker,
  SiFigma, SiGooglegemini,
  SiMongodb,
  SiNestjs,
} from "react-icons/si";
import { Globe, GitFork, Layers, Cpu } from "lucide-react";
import { TechCategory } from "@/lib/data";

const SKILL_ICONS: Record<string, React.ReactNode> = {
  "JavaScript":    <SiJavascript size={22} color="#F7DF1E" />,
  "TypeScript":    <SiTypescript size={22} color="#3178C6" />,
  "React":         <SiReact size={22} color="#61DAFB" />,
  "Next.js":       <SiNextdotjs size={22} color="#FFFFFF" />,
  "Nest.js":        <SiNestjs size={22} color="#E0234E" />,
  "Tailwind CSS":  <SiTailwindcss size={22} color="#06B6D4" />,
  "Vite":          <SiVite size={22} color="#646CFF" />,
  "Framer Motion": <SiFramer size={22} color="#BB4FFF" />,
  "DaisyUI":       <SiDaisyui size={22} color="#1AD1A5" />,
  "Zustand":       <Layers size={22} color="#F97316" />,
  "Node.js":       <SiNodedotjs size={22} color="#339933" />,
  "Express.js":    <SiExpress size={22} color="#FFFFFF" />,
  "REST APIs":     <Globe size={22} color="#A3A3A3" />,
  "Socket.io":     <SiSocketdotio size={22} color="#FFFFFF" />,
  "JWT":           <SiJsonwebtokens size={22} color="#D63AFF" />,
  "Passport":      <SiPassport size={22} color="#34E27A" />,
  "MySQL":         <SiMysql size={22} color="#4479A1" />,
  "PostgreSQL":    <SiPostgresql size={22} color="#4169E1" />,
  "MongoDB":       <SiMongodb size={22} color="#47A248" />,
  "Prisma":        <SiPrisma size={22} color="#5A67D8" />,
  "Supabase":      <SiSupabase size={22} color="#3ECF8E" />,
  "Git":           <SiGit size={22} color="#F05032" />,
  "Fork":          <GitFork size={22} color="#A3A3A3" />,
  "Docker":        <SiDocker size={22} color="#2496ED" />,
  "Figma":         <SiFigma size={22} color="#F24E1E" />,
  "Gemini API":    <SiGooglegemini size={22} color="#8E75B2" />,
  "AI Agents":     <Cpu size={22} color="#FD6F00" />,
};

interface SkillCardProps {
  skill: string;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-1.5 w-[5rem] py-3 px-2 rounded-xl border border-white/10 bg-white/5 text-text-black-sub cursor-default select-none hover:border-white/20 transition-colors"
      title={skill}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.2, ease: [0, 0, 0.58, 1] }}
    >
      {SKILL_ICONS[skill] ?? <div className="w-5 h-5 rounded bg-white/10" />}
      <span className="text-[10px] font-medium text-center leading-tight line-clamp-2">{skill}</span>
    </motion.div>
  );
}

interface TechCategoryCardProps {
  category: TechCategory;
}

export default function TechCategoryCard({ category }: TechCategoryCardProps) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-black-sub mb-4">
        {category.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
