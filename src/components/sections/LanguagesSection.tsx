"use client";

import { motion } from "framer-motion";

const languages = [
  { flag: "🇹🇭", name: "Thai",    dots: 5, label: "Native" },
  { flag: "🇺🇸", name: "English", dots: 3, label: "Professional" },
  { flag: "🇨🇳", name: "Chinese", dots: 2, label: "Conversational" },
];

const DotScale = ({ filled }: { filled: number }) => (
  <div className="flex gap-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full transition-colors ${
          i < filled ? "bg-[#1A1A1A]" : "bg-[#1A1A1A]/15"
        }`}
      />
    ))}
  </div>
);

export function LanguagesSection() {
  return (
    <section className="w-full bg-white py-20 px-8 border-t border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-14 sm:gap-28">
        {languages.map((lang, i) => (
          <motion.div
            key={lang.name}
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
          >
            <span className="text-5xl">{lang.flag}</span>
            <span className="font-bold text-[#1A1A1A] text-xl">{lang.name}</span>
            <DotScale filled={lang.dots} />
            <span className="text-sm text-[#4A4A4A] font-light tracking-wide">{lang.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
