"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Projects", href: "#projects" },
];

export const Navbar = () => {
  return (
    <nav className="flex justify-start md:justify-end w-full mb-12">
      <motion.ul
        className="flex space-x-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
              },
            }}
          >
            <Link
              href={item.href}
              className="text-text-black-sub hover:text-text-black-main transition-colors text-sm tracking-widest uppercase font-medium"
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};
