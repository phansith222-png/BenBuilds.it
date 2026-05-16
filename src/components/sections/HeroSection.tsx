"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BangkokClock } from "@/components/ui/BangkokClock";

const GOLDEN = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: GOLDEN } },
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-ink flex flex-col items-center justify-center px-6 py-24"
      style={{ perspective: "800px" }}
    >
      {/* scroll-driven 3-D tilt wrapper — separate from entrance variants to avoid opacity conflict */}
      <motion.div style={{ rotateX, scale, opacity }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-6 text-center"
      >

        {/* Eyebrow */}
        <motion.p
          variants={item}
          className="flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] uppercase text-text-black-sub"
        >
          Full Stack Developer
          <span className="opacity-40">—</span>
          Bangkok, TH
          <span className="opacity-40">—</span>
          <BangkokClock />
        </motion.p>

        {/* BEN — filled, dashed border */}
        <motion.div
          variants={item}
          className="border border-dashed border-white/30 px-6 sm:px-8 md:px-12 py-3 sm:py-4"
        >
          <span className="block text-[12vw] sm:text-[15vw] md:text-[18vw] font-bold leading-none tracking-tight text-text-black-main select-none">
            BEN
          </span>
        </motion.div>

        {/* PHANSIT — outline only */}
        <motion.p
          variants={item}
          className="text-[12vw] sm:text-[15vw] md:text-[18vw] font-bold leading-none tracking-tight select-none"
          style={{ WebkitTextStroke: "1.5px #FFFFFF", color: "transparent" }}
        >
          PHANSIT
        </motion.p>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-sm text-text-black-sub max-w-xl leading-relaxed font-light mt-2"
        >
          Full Stack Developer specialising in React, Next.js, and Node.js — CodeCamp Thailand graduate with
          real-world experience across full CRUD systems, REST API integration, and team leadership.
          Trilingual: Thai · English · Mandarin.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-green-400"
              style={{ animation: "pulse-orange 2s ease-in-out infinite" }}
            />
            <span className="text-[11px] text-text-black-sub">Available for work</span>
          </div>
          <motion.a
            href="#works"
            className="px-7 py-3 bg-text-black-main text-ink text-sm font-semibold rounded-full hover:bg-orange-accent hover:text-white transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0, 0, 0.58, 1] }}
          >
            View Work <span aria-hidden>▶</span>
          </motion.a>
          <motion.a
            href="/images/Phansit_Resume%20(cc22).pdf"
            download="Phansit_Hadtakijwattana_Resume.pdf"
            className="px-7 py-3 border border-white/20 text-text-black-sub text-sm font-semibold rounded-full hover:border-white/50 hover:text-text-black-main transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0, 0, 0.58, 1] }}
          >
            Download CV
          </motion.a>
        </motion.div>

      </motion.div>
      </motion.div>
    </section>
  );
}
