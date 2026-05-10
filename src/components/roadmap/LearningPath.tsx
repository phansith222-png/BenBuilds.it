"use client";

import { motion, Variants } from "framer-motion";

type PhaseStatus = "mastered" | "building" | "next";
type IconKey = "check" | "cpu" | "target";

export interface Phase {
  index: string;
  iconKey: IconKey;
  status: PhaseStatus;
  title: string;
  description: string;
  skills: string[];
}

interface LearningPathProps {
  phases: Phase[];
  containerVariants: Variants;
  itemVariants: Variants;
}

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
    <path d="M15 2v2" /><path d="M15 20v2" />
    <path d="M2 15h2" /><path d="M2 9h2" />
    <path d="M20 15h2" /><path d="M20 9h2" />
    <path d="M9 2v2" /><path d="M9 20v2" />
  </svg>
);

const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const iconMap: Record<IconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  check: CheckIcon,
  cpu: CpuIcon,
  target: TargetIcon,
};

const statusLabel: Record<PhaseStatus, string> = {
  mastered: "Mastered",
  building: "In Progress",
  next: "Coming Next",
};

const statusChipStyle: Record<PhaseStatus, string> = {
  mastered: "bg-[#1A1A1A]/10 text-[#1A1A1A]",
  building: "bg-[#FD6F00]/15 text-[#FD6F00]",
  next: "bg-[#1A1A1A]/5 text-text-gray-sub",
};

const badgeStyle: Record<PhaseStatus, string> = {
  mastered: "bg-[#1A1A1A] text-white",
  building: "bg-[#FD6F00] text-white",
  next: "bg-white/40 border border-[#1A1A1A]/15 text-text-gray-sub",
};

export function LearningPath({ phases, containerVariants, itemVariants }: LearningPathProps) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.25em] uppercase text-text-gray-sub mb-10">
        Learning Path
      </p>
      <div className="relative pl-4 md:pl-10">
        <div className="absolute left-[31px] md:left-[79px] top-4 bottom-12 w-[2px] bg-gradient-to-b from-[#1A1A1A] via-text-gray-sub/20 to-transparent" />
        <motion.div
          className="flex flex-col gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {phases.map((phase, i) => {
            const Icon = iconMap[phase.iconKey];
            return (
              <motion.div key={i} variants={itemVariants} className="relative flex flex-col md:flex-row items-start gap-8 md:gap-16">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white shadow-xl -ml-2 md:-ml-0 border-4 border-gray-panel">
                  <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex-1 mt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-gray-sub">{phase.index}</span>
                    <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${statusChipStyle[phase.status]}`}>
                      {statusLabel[phase.status]}
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4">{phase.title}</h4>
                  <p className="text-lg md:text-xl text-text-gray-sub font-light mb-8 max-w-2xl leading-relaxed">{phase.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {phase.skills.map((skill, j) => (
                      <span key={j} className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm ${badgeStyle[phase.status]}`}>
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
  );
}
