"use client";

import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiVite,
  SiFramer, SiDaisyui, SiNodedotjs, SiExpress, SiSocketdotio, SiJsonwebtokens,
  SiPassport, SiMysql, SiPostgresql, SiPrisma, SiSupabase, SiGit, SiDocker,
  SiFigma, SiGooglegemini,
} from "react-icons/si";
import { Globe, GitFork, Layers, Cpu } from "lucide-react";
import { techStack, learningPath, Phase, PhaseStatus } from "@/lib/data";

const GOLDEN = [0.16, 1, 0.3, 1] as const;

const SKILL_ICONS: Record<string, React.ReactNode> = {
  "JavaScript":    <SiJavascript size={22} color="#F7DF1E" />,
  "TypeScript":    <SiTypescript size={22} color="#3178C6" />,
  "React":         <SiReact size={22} color="#61DAFB" />,
  "Next.js":       <SiNextdotjs size={22} color="#FFFFFF" />,
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
  "Prisma":        <SiPrisma size={22} color="#5A67D8" />,
  "Supabase":      <SiSupabase size={22} color="#3ECF8E" />,
  "Git":           <SiGit size={22} color="#F05032" />,
  "Fork":          <GitFork size={22} color="#A3A3A3" />,
  "Docker":        <SiDocker size={22} color="#2496ED" />,
  "Figma":         <SiFigma size={22} color="#F24E1E" />,
  "Gemini API":    <SiGooglegemini size={22} color="#8E75B2" />,
  "AI Agents":     <Cpu size={22} color="#FD6F00" />,
};

const statusChip: Record<PhaseStatus, string> = {
  mastered: "bg-white text-ink",
  building: "bg-orange-accent text-white",
  next:     "border border-white/20 text-text-black-sub",
};

const statusPill: Record<PhaseStatus, string> = {
  mastered: "bg-white/10 text-text-black-main",
  building: "bg-orange-accent/15 text-orange-accent",
  next:     "border border-white/10 text-text-black-sub",
};

const STATUS_LABEL: Record<PhaseStatus, string> = {
  mastered: "Mastered",
  building: "In Progress",
  next:     "Coming Next",
};

function PhaseItem({ phase, index }: { phase: Phase; index: number }) {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-8 md:gap-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: GOLDEN, delay: index * 0.1 }}
    >
      <div className="flex-shrink-0 flex items-center gap-4 md:flex-col md:items-center md:w-20">
        <span className="font-mono text-[10px] text-text-black-sub">{phase.index}</span>
        <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full whitespace-nowrap ${statusChip[phase.status]}`}>
          {STATUS_LABEL[phase.status]}
        </span>
      </div>
      <div className="flex-1">
        <h4 className="text-2xl md:text-3xl font-bold text-text-black-main tracking-tight mb-3">{phase.title}</h4>
        <p className="text-sm text-text-black-sub font-light leading-relaxed mb-6 max-w-xl">{phase.description}</p>
        <div className="flex flex-wrap gap-2">
          {phase.skills.map((skill) => (
            <span key={skill} className={`px-3 py-1.5 text-xs font-medium rounded-full ${statusPill[phase.status]}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function RoadmapSection() {
  return (
    <section id="capabilities" className="w-full bg-ink text-text-black-main py-32 px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Tech grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: GOLDEN }}
        >
          {techStack.map((cat) => (
            <div key={cat.label}>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-black-sub mb-4">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="flex flex-col items-center justify-center gap-1.5 w-[5rem] py-3 px-2 rounded-xl border border-white/10 bg-white/5 text-text-black-sub cursor-default select-none hover:border-white/20 transition-colors"
                    title={skill}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2, ease: [0, 0, 0.58, 1] }}
                  >
                    {SKILL_ICONS[skill] ?? <div className="w-5 h-5 rounded bg-white/10" />}
                    <span className="text-[10px] font-medium text-center leading-tight line-clamp-2">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-20" />

        {/* Learning path */}
        <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-text-black-sub mb-12">
          Learning Path
        </p>
        <div className="flex flex-col gap-16">
          {learningPath.map((phase, i) => (
            <PhaseItem key={phase.index} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
