"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/lib/projects";

interface ProjectDetailProps {
  project: Project;
}

const GOLDEN = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: GOLDEN, delay },
});

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="min-h-screen bg-[#000000] text-white px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">

        <motion.div {...fadeUp(0)}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-white transition-colors mb-16 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
            Back to portfolio
          </Link>
        </motion.div>

        <motion.p {...fadeUp(0.05)} className="text-xs font-bold tracking-[0.25em] uppercase text-[#A3A3A3] mb-3">
          {project.subtitle}
        </motion.p>

        <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          {project.title}
        </motion.h1>

        <motion.div {...fadeUp(0.15)} className="mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FD6F00]/15 text-[#FD6F00] text-sm font-semibold tracking-wide">
            ◈ {project.role}
          </span>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="mb-16">
          {project.youtubeId ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                title={`${project.title} demo`}
              />
            </div>
          ) : (
            <div className="w-full aspect-video bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
              </svg>
              <p className="text-[#A3A3A3] text-sm tracking-wide">Demo coming soon</p>
            </div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div {...fadeUp(0.25)}>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#A3A3A3] mb-4">The Problem</p>
            <p className="text-lg text-white/75 font-light leading-relaxed">{project.problem}</p>
          </motion.div>
          <motion.div {...fadeUp(0.3)}>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#A3A3A3] mb-4">The Solution</p>
            <p className="text-lg text-white/75 font-light leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.35)} className="mb-16">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#A3A3A3] mb-6">Key Features</p>
          <ul className="flex flex-col gap-4">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-white/75 font-light text-lg leading-relaxed">
                <span className="text-[#FD6F00] mt-1 flex-shrink-0 text-base">◈</span>
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full text-sm hover:bg-white/90 transition-colors"
          >
            GitHub →
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-full text-sm hover:border-white/60 transition-colors"
            >
              Live Demo →
            </a>
          )}
        </motion.div>

      </div>
    </main>
  );
}
