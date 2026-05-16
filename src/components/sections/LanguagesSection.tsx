"use client";

import { motion } from "framer-motion";
import { languages } from "@/lib/data";

const GOLDEN = [0.16, 1, 0.3, 1] as const;

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

export function LanguagesSection() {
  return (
    <section className="w-full bg-paper text-text-gray-main py-24 px-8 border-y border-ink/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_1fr_1fr] gap-12 sm:gap-8 items-center">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-gray-sub hidden sm:block">
            Languages
          </p>

          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: GOLDEN, delay: i * 0.1 }}
            >
              <span className="text-4xl">{lang.flag}</span>
              <span className="font-bold text-text-gray-main text-xl">{lang.name}</span>
              <DotScale filled={lang.dots} />
              <span className="text-xs text-text-gray-sub font-light tracking-wide">{lang.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
