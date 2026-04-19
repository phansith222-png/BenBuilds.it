"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-gray-panel text-text-gray-main py-40 px-8">
      <motion.div 
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="lg:w-1/3 pt-2">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            THE<br />
            <span className="text-text-gray-sub">JOURNEY.</span>
          </motion.h2>
        </div>
        
        <div className="lg:w-2/3 flex flex-col gap-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] mb-6">
              01. The Foundation
            </h3>
            <p className="text-text-gray-sub leading-relaxed md:leading-loose text-lg md:text-xl font-light">
              My career didn't start in an IDE, but in the intricate world of Payroll Outsourcing. Dealing with complex compliance laws, massive data sets, and strict enterprise workflows instilled an uncompromising demand for <strong className="text-[#1A1A1A] font-medium">data precision</strong>. When handling payroll, errors are not an option. That environment forged my analytical mindset and extreme attention to detail.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] mb-6">
              02. The Transition
            </h3>
            <p className="text-text-gray-sub leading-relaxed md:leading-loose text-lg md:text-xl font-light">
              Transitioning to Full Stack JavaScript Development was a natural evolution. I realized that the same <strong className="text-[#1A1A1A] font-medium">problem-solving rigor</strong> used to dissect complex payroll algorithms perfectly translates into architecting scalable software. Today, I view code as a precise mechanism to resolve operational bottlenecks, building applications that are not only beautiful but fundamentally robust.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
