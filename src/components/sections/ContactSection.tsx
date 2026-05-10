"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ArrowUpRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

const channels = [
  {
    icon: MailIcon,
    label: "Email",
    description: "Best way to reach me. I reply within 24 hours.",
    detail: "phansit.h222@gmail.com",
    href: "mailto:phansit.h222@gmail.com",
    external: false,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    description: "Let's connect professionally and grow our network.",
    detail: "linkedin.com/in/ben-phansit",
    href: "https://www.linkedin.com/in/ben-phansit/",
    external: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    description: "Browse my projects, code, and open-source work.",
    detail: "github.com/phansith222-png",
    href: "https://github.com/phansith222-png",
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-gray-panel text-text-gray-main py-40 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-text-gray-sub/30 text-sm font-medium text-text-gray-sub bg-white/40">
              <motion.span
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
              Open to opportunities
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            Let&apos;s Connect.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-text-gray-sub font-light leading-relaxed max-w-xl"
          >
            Open to full-time roles and freelance projects. Pick a channel and let&apos;s start a conversation.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {channels.map(({ icon: Icon, label, description, detail, href, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } }}
              className="group relative flex flex-col p-8 bg-white/50 border border-text-gray-sub/20 rounded-3xl hover:border-text-gray-sub/50 hover:bg-white/70 transition-colors duration-300 cursor-pointer"
            >
              {/* Arrow — top right */}
              <div className="absolute top-7 right-7 text-text-gray-sub/30 group-hover:text-text-gray-main transition-colors duration-300">
                <ArrowUpRightIcon />
              </div>

              {/* Icon */}
              <div className="mb-6 text-text-gray-main">
                <Icon />
              </div>

              {/* Label */}
              <h3 className="text-xl font-bold tracking-tight mb-3">
                {label}
              </h3>

              {/* Description */}
              <p className="text-text-gray-sub font-light leading-relaxed mb-6 flex-1">
                {description}
              </p>

              {/* Detail link */}
              <span className="text-sm font-medium text-text-gray-sub group-hover:text-text-gray-main transition-colors duration-300 truncate">
                {detail}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-24 pt-8 border-t border-text-gray-sub/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
        >
          <p className="text-sm text-text-gray-sub">
            © 2025 Phansit Hadtakijwattana. Built with Next.js &amp; Tailwind CSS.
          </p>
          <p className="text-sm text-text-gray-sub/60">
            Bangkok, Thailand
          </p>
        </motion.div>

      </div>
    </section>
  );
}
