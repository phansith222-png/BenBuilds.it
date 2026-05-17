"use client";

import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      className="text-[11px] font-medium tracking-[0.18em] uppercase text-text-black-sub hover:text-text-black-main transition-colors duration-200"
      whileHover={{ y: -1 }}
      transition={{ duration: 0.15 }}
    >
      {label}
    </motion.a>
  );
}
