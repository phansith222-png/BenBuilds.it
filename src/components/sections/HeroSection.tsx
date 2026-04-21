"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
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
            className="flex flex-col max-w-2xl"
          >
            <motion.h3 variants={itemVariants} className="text-xl md:text-2xl font-semibold mb-2 text-[#1A1A1A]">
              Hi I am
            </motion.h3>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-2">
              Ben Phansit
            </motion.h2>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight leading-[1.1] mb-8 text-[#1A1A1A]">
              Full Stack<br />
              <span className="text-[#4A4A4A]">Developer</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed mb-10 max-w-lg">
              Blending the analytical precision of Payroll Outsourcing with scalable, modern software engineering.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-[#1A1A1A] text-white rounded-md font-semibold hover:bg-black transition-colors">
                Hire Me
              </a>
              <a href="#resume" className="px-8 py-4 bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-md font-semibold hover:bg-[#1A1A1A]/5 transition-colors">
                Download CV
              </a>
            </motion.div>
          </motion.div>
          <div className="mt-auto pt-12">
            <SocialLinks />
          </div>
        </div>
      }
      rightContent={
        <div className="flex flex-col h-full relative">
          <div className="w-full flex justify-end">
            <Navbar />
          </div>
          <motion.div
            className="flex-1 w-full flex justify-center items-center pb-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 } }
            }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full bg-[#111111] border-8 border-white/5 flex items-center justify-center overflow-hidden shadow-2xl">
              <Image
                src="/images/profile.png"
                alt="Ben Phansit Portrait"
                width={480}
                height={480}
                className="object-cover w-full h-full object-top"
                priority
              />
            </div>
          </motion.div>
        </div>
      }
    />
  );
}
