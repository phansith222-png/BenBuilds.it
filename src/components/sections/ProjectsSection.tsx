"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects, Project } from "@/lib/projects";
import { WorkDetail } from "@/components/projects/WorkDetail";
import { GOLDEN } from "@/lib/motion";

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

interface WorkRowProps {
  project: Project;
  index: number;
  priority?: boolean;
  onOpen: () => void;
}

function WorkRow({ project, index, priority, onOpen }: WorkRowProps) {
  return (
    <motion.button
      onClick={onOpen}
      className="group w-full text-left grid grid-cols-[3rem_1fr_auto] md:grid-cols-[3rem_1fr_10rem_11rem_2rem] items-center gap-6 py-8 border-t border-white/10 hover:border-white/20 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: GOLDEN, delay: index * 0.08 }}
      whileHover={{ x: 6, transition: { duration: 0.2, ease: [0, 0, 0.58, 1] } }}
      whileTap={{ scale: 0.99, transition: { duration: 0.1 } }}
    >
      {/* Number */}
      <span className="font-mono text-[11px] text-text-black-sub">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Main content */}
      <div className="flex flex-col gap-2">
        <p className="text-xs tracking-[0.2em] uppercase text-text-black-sub">{project.category}</p>
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-text-black-main group-hover:text-orange-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm italic text-text-black-sub">{project.subtitle}</p>

        {/* Tech tags — first 4 */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-full border border-white/10 text-text-black-sub">
              {t}
            </span>
          ))}
        </div>

        {/* Thumbnail on mobile */}
        <div className="md:hidden mt-4 relative w-full aspect-video rounded-lg overflow-hidden bg-white/5">
          <Image
            src={project.coverImage}
            alt={project.title}
            width={640}          // อัตราส่วน 16:9 สำหรับ mobile
            height={360}
            sizes="100vw"
            className="w-full h-auto object-cover"
            priority={priority}
          />
        </div>
      </div>

      {/* Role — desktop only */}
      <p className="hidden md:block text-sm text-text-black-sub text-right leading-relaxed">{project.role}</p>

      {/* Cover thumbnail — desktop only */}
      <div className="hidden md:block relative w-full aspect-video rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
        <Image
          src={project.coverImage}
          alt={project.title}
          width={176}          // ความกว้าง 11rem (11 * 16px = 176px) เพื่อให้เท่าขนาดเดิมของกล่อง
          height={99}          // ความสูงตามอัตราส่วน 16:9 (176 * 9 / 16)
          sizes="11rem"
          className="w-full h-auto object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          priority={priority}
        />
      </div>

      {/* Arrow */}
      <div className="text-text-black-sub group-hover:text-orange-accent group-hover:translate-x-1 transition-all duration-300">
        <ArrowRight />
      </div>
    </motion.button>
  );
}

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="works" className="w-full bg-ink text-text-black-main py-32 px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mt-16">
          {projects.map((project, i) => (
            <WorkRow
              key={project.slug}
              project={project}
              index={i}
              priority={i === 0}
              onOpen={() => setActiveProject(project)}
            />
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>

      <WorkDetail project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
