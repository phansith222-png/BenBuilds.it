"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const MotionLink = motion.create(Link);
const GOLDEN = [0.16, 1, 0.3, 1] as const;

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const startTime = project.videoStartTime ?? 0;

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    const v = videoRef.current;
    if (v) {
      v.currentTime = startTime;
      v.play().catch(() => {});
    }
  }, [startTime]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = startTime;
    }
  }, [startTime]);

  return (
    <MotionLink
      href={`/projects/${project.slug}`}
      className="group block cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: GOLDEN, delay: index * 0.1 }}
      whileHover="hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Container */}
      <div className="relative aspect-video overflow-hidden bg-[#111111] rounded-[2rem] border border-white/5 mb-8 shadow-2xl">
        <motion.div
          className="absolute inset-0"
          variants={{ hover: { scale: 1.05 } }}
          transition={{ duration: 0.8, ease: GOLDEN }}
        >
          {/* Cover image — fades out on hover */}
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: isHovered && videoReady ? 0 : 1 }}
            transition={{ duration: 0.6, ease: GOLDEN }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </motion.div>

          {/* Video — fades in once ready and hovered */}
          {project.videoPath && (
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: isHovered && videoReady ? 1 : 0 }}
              transition={{ duration: 0.6, ease: GOLDEN }}
            >
              <video
                ref={videoRef}
                src={project.videoPath}
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover"
                aria-hidden="true"
                onCanPlay={() => setVideoReady(true)}
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <motion.p
          className="text-xs font-semibold tracking-[0.2em] uppercase text-text-black-sub mb-3"
          variants={{ hover: { color: "#FFFFFF" } }}
          transition={{ duration: 0.4 }}
        >
          {project.category}
        </motion.p>
        <motion.h3
          className="text-3xl font-bold text-white tracking-tight mb-2"
          variants={{ hover: { color: "#D9D9D9" } }}
          transition={{ duration: 0.4 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-xs font-semibold text-[#FD6F00] mb-4 tracking-wide">{project.role}</p>
        <p className="text-lg text-text-black-sub font-light mb-8 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-4 py-1.5 text-xs font-medium border border-white/10 rounded-full text-text-black-sub bg-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </MotionLink>
  );
}
