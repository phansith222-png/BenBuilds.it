"use client";

import { motion } from "framer-motion";

export function QuoteBanner() {
  return (
    <section className="w-full bg-[#1A1A1A] text-white py-32 px-8 flex items-center justify-center">
      <motion.div 
        className="max-w-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl md:text-5xl font-serif font-light leading-snug italic text-white/90">
          "From managing enterprise-level payroll logic to architecting scalable web applications."
        </h2>
        <p className="mt-8 text-lg text-white/50 tracking-[0.2em] uppercase font-medium">
          The precision remains the same.
        </p>
      </motion.div>
    </section>
  );
}
