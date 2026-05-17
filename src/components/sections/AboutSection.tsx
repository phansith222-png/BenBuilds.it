"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GOLDEN } from "@/lib/motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: GOLDEN } },
};

const META = [
  { key: "Stack", value: "React · Next.js · Node.js · TypeScript" },
  { key: "Training", value: "CodeCamp Thailand · Full Stack" },
  { key: "Status", value: "Open to Full-Time Roles" },
  { key: "Based", value: "Bangkok, Thailand" },
];

export function AboutSection() {
  return (
    <section id="origin" className="w-full bg-ink text-text-black-main py-32 px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start mt-16">
          {/* Portrait */}
          <motion.div
            className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: GOLDEN }}
          >
            <Image
              src="/images/10507.jpg"
              alt="Ben Phansit"
              width={400}            // กำหนดความกว้างเริ่มต้น (อัตราส่วน 4)
              height={500}           // กำหนดความสูงเริ่มต้น (อัตราส่วน 5 เพื่อให้เป็น 4:5 เหมือนเดิม)
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-cover" // ใช้ w-full h-auto เพื่อให้รูปย่อขยายตาม responsive
              style={{ objectPosition: "50% 15%" }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-5xl font-bold leading-tight tracking-tight"
            >
              From <em className="not-italic font-light italic text-text-black-sub">payroll logic</em>{" "}
              to architecting <em className="not-italic font-light italic text-text-black-sub">software</em>.
            </motion.h2>

            <motion.p
              variants={item}
              className="text-base md:text-lg text-text-black-sub leading-relaxed font-light"
            >
              Full Stack Developer trained at CodeCamp Thailand, with hands-on experience in React, Next.js, Node.js,
              and SQL databases across real-world projects — from full CRUD systems to REST API integration and team
              leadership. My background in enterprise payroll operations shaped a discipline for accuracy and translating
              complex business requirements into working software.
            </motion.p>

            <motion.blockquote
              variants={item}
              className="border-l-2 border-orange-accent pl-6 py-2"
            >
              <p className="text-lg md:text-xl italic text-text-black-sub font-light leading-relaxed">
                &ldquo;From managing enterprise-level payroll logic to architecting scalable web applications.&rdquo;
              </p>
              <footer className="mt-3 text-[11px] tracking-[0.2em] uppercase text-text-black-sub/60">
                — The precision remains the same.
              </footer>
            </motion.blockquote>

            {/* Meta grid */}
            <motion.dl
              variants={item}
              className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4 border-t border-white/10"
            >
              {META.map(({ key, value }) => (
                <div key={key}>
                  <dt className="text-[10px] tracking-[0.2em] uppercase text-text-black-sub/60 mb-1">{key}</dt>
                  <dd className="text-sm text-text-black-main font-medium">{value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
