"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const SkillBar = ({ label, percentage }: { label: string; percentage: number }) => (
  <div className="mb-6 pr-2">
    <div className="flex justify-between mb-3">
      <span className="font-semibold text-[#1A1A1A] text-lg">{label}</span>
    </div>
    <div className="w-full bg-[#1A1A1A]/10 rounded-full h-3 relative">
      <motion.div
        className="bg-[#1A1A1A] h-3 rounded-full absolute top-0 left-0"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-panel border-4 border-[#1A1A1A] rounded-full shadow-md translate-x-1/2" />
      </motion.div>
    </div>
  </div>
);

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-gray-panel text-[#1A1A1A] py-32 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Image */}
        <motion.div 
          className="w-full lg:w-5/12 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[12px] border-white/30 shadow-xl">
            <Image
              src="/images/profile.png"
              alt="About Ben"
              fill
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Right Side: Content & Skills */}
        <motion.div 
          className="w-full lg:w-7/12 flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#1A1A1A]"
          >
            About Me
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed mb-12 font-light"
          >
            My career didn't start in an IDE, but in the intricate world of Payroll Outsourcing. Dealing with complex compliance laws and strict enterprise workflows instilled an uncompromising demand for data precision. Transitioning to Full Stack Development was a natural evolution, allowing me to translate problem-solving rigor into architecting scalable, beautiful software.
          </motion.p>

          {/* Skill Bars */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <SkillBar label="Frontend Development" percentage={90} />
            <SkillBar label="Backend Architecture" percentage={85} />
            <SkillBar label="UI/UX Design" percentage={75} />
            <SkillBar label="Database Management" percentage={80} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
