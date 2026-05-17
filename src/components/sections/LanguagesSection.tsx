"use client";

import { languages } from "@/lib/data";
import LanguageCard from "@/components/ui/LanguageCard";

export function LanguagesSection() {
  return (
    <section className="w-full bg-paper text-text-gray-main py-24 px-8 border-y border-ink/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_1fr_1fr] gap-12 sm:gap-8 items-center">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-text-gray-sub hidden sm:block">
            Languages
          </p>

          {languages.map((lang, i) => (
            <LanguageCard key={lang.name} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
