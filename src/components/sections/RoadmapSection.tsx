"use client";

import { motion } from "framer-motion";
import { techStack, learningPath, Phase, PhaseStatus } from "@/lib/data";
import TechCategoryCard from "@/components/ui/TechCategoryCard";
import { GOLDEN } from "@/lib/motion";


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
            <TechCategoryCard key={cat.label} category={cat} />
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
