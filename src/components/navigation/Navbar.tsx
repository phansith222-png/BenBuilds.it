"use client";

import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Works",        href: "#works" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Origin",       href: "#origin" },
  { label: "Contact",      href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-black-main">
          BENBUILDS.IT
        </span>
        <span
          className="w-2 h-2 rounded-full bg-orange-accent"
          style={{ animation: "pulse-orange 2.4s ease-in-out infinite" }}
        />
      </div>

      <nav className="hidden sm:flex items-center gap-8">
        {NAV_LINKS.map(({ label, href }) => (
          <motion.a
            key={label}
            href={href}
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-text-black-sub hover:text-text-black-main transition-colors duration-200"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
          >
            {label}
          </motion.a>
        ))}
      </nav>
    </header>
  );
}
