"use client";

import { motion, Variants } from "framer-motion";
import { SplitScreen } from "@/components/layout/SplitScreen";
import { Navbar } from "@/components/navigation/Navbar";
import { SocialLinks } from "@/components/social/SocialLinks";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export function HeroSection() {
  return (
    <SplitScreen
      leftContent={
        <div className="flex flex-col h-full justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-serif leading-[0.9] tracking-tighter text-[#1A1A1A] -ml-2"
            >
              BEN<br />
              <span className="text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tight">(Phansit)</span>
            </motion.h1>
            <motion.h3 
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium text-text-gray-main mt-6 tracking-wide uppercase"
            >
              Full Stack Developer
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-text-gray-sub mt-4 text-lg md:text-xl max-w-md leading-relaxed"
            >
              Blending the analytical precision of Payroll Outsourcing with scalable, modern software engineering.
            </motion.p>
          </motion.div>
          <div className="mt-auto">
            <SocialLinks />
          </div>
        </div>
      }
      rightContent={
        <div className="flex flex-col h-full">
          <Navbar />
          <motion.div 
            className="flex-1 flex items-center justify-center pb-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
              }
            }}
          >
            {/* Portrait Image Placeholder (Ben needs to replace /placeholder.jpg) */}
            <div className="w-[280px] h-[380px] md:w-[350px] md:h-[480px] lg:w-[400px] lg:h-[550px] bg-[#111111] border border-white/5 rounded-[2rem] overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                 <span className="text-white/30 uppercase tracking-widest text-xs font-medium">Portrait Placeholder</span>
                 <span className="text-white/20 text-[10px] font-mono">/placeholder.jpg</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      }
    />
  );
}
