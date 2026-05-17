"use client";

import { motion } from "framer-motion";
import { Language } from "@/lib/data";
import { GOLDEN } from "@/lib/motion";

function DotScale({ filled }: { filled: number }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${i < filled ? "bg-ink" : "bg-ink/15"}`}
        />
      ))}
    </div>
  );
}

interface LanguageCardProps {
  lang: Language;
  index: number;
}

export default function LanguageCard({ lang, index }: LanguageCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: GOLDEN, delay: index * 0.1 }}
    >
      <span className="text-4xl">{lang.flag}</span>
      <span className="font-bold text-text-gray-main text-xl">{lang.name}</span>
      <DotScale filled={lang.dots} />
      <span className="text-xs text-text-gray-sub font-light tracking-wide">{lang.label}</span>
    </motion.div>
  );
}
