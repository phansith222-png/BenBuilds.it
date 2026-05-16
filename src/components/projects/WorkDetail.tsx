"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/projects";

interface WorkDetailProps {
  project: Project | null;
  onClose: () => void;
}

const PlayIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </svg>
);

export function WorkDetail({ project, onClose }: WorkDetailProps) {
  // Track which project has video manually hidden — video plays by default on open
  const [hiddenSlug, setHiddenSlug] = useState<string | null>(null);
  const showVideo = !!project?.youtubeId && hiddenSlug !== project.slug;

  const handleClose = useCallback(() => {
    setHiddenSlug(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, handleClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-center items-start p-6 bg-black/85 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-[1100px] bg-ink border border-white/10 rounded-2xl px-12 py-12 md:px-16 md:py-16 my-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Back */}
            <motion.button
              onClick={handleClose}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-text-black-sub hover:text-text-black-main transition-colors mb-12"
              whileHover={{ x: -3 }}
              transition={{ duration: 0.15 }}
            >
              ← Back to portfolio
            </motion.button>

            {/* Eyebrow + title + role badge */}
            <p className="text-[11px] tracking-[0.25em] uppercase font-bold text-orange-accent mb-3">{project.subtitle}</p>
            <h2 className="text-[clamp(40px,6.5vw,88px)] font-bold uppercase tracking-[-0.04em] leading-[0.92] text-text-black-main mb-8">
              {project.title}
            </h2>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase font-semibold border border-orange-accent/50 text-orange-accent rounded-full mb-12">
              ◈ {project.role}
            </span>

            {/* Cover / YouTube embed */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-16 bg-white/5">
              {showVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&controls=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  title={`${project.title} demo`}
                />
              ) : (
                <Image src={project.coverImage} alt={project.title} fill sizes="(max-width: 768px) 100vw, 1100px" className="object-cover" />
              )}
            </div>

            {/* Problem / Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
              {(
                [["/ The Problem", project.problem], ["/ The Solution", project.solution]] as const
              ).map(([label, body]) => (
                <div key={label}>
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/40 mb-3 pb-2.5 border-b border-white/10">{label}</p>
                  <p className="text-[17px] leading-[1.65] text-white/75 font-light">{body}</p>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-white/40 mb-3 pb-2.5 border-b border-white/10">/ Key Features</p>
              <ul className="flex flex-col">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-3.5 items-start text-[16px] leading-[1.55] text-white/75 font-light py-3.5 border-b border-white/5 last:border-0">
                    <span className="font-mono text-[11px] text-orange-accent font-bold min-w-[32px] pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-full border border-white/10 text-text-black-sub">
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ink text-sm font-semibold rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0, 0, 0.58, 1] }}
              >
                GitHub <ArrowUpRight />
              </motion.a>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 text-text-black-sub text-sm font-semibold rounded-full hover:border-white/60 hover:text-text-black-main transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0, 0, 0.58, 1] }}
                >
                  Live Demo <ArrowUpRight />
                </motion.a>
              )}
              {project.youtubeId && (
                <motion.button
                  onClick={() => setHiddenSlug(showVideo ? project.slug : null)}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 text-text-black-sub text-sm font-semibold rounded-full hover:border-white/60 hover:text-text-black-main transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0, 0, 0.58, 1] }}
                >
                  {showVideo ? "Hide Video" : "Watch Demo"} <PlayIcon />
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
