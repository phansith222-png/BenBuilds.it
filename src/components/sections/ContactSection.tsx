"use client";

import { motion } from "framer-motion";
import { channels, Channel } from "@/lib/data";
import { BangkokClock } from "@/components/ui/BangkokClock";

const GOLDEN = [0.16, 1, 0.3, 1] as const;

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </svg>
);

const ICONS = { mail: MailIcon, linkedin: LinkedinIcon, github: GithubIcon };

function ChannelCard({ ch }: { ch: Channel }) {
  const Icon = ICONS[ch.iconKey];
  return (
    <motion.a
      href={ch.href}
      target={ch.external ? "_blank" : undefined}
      rel={ch.external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between p-5 border border-white/10 rounded-2xl hover:border-orange-accent/50 transition-colors duration-300"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0, 0, 0.58, 1] }}
    >
      <div className="flex items-center gap-4">
        <div className="text-text-black-sub group-hover:text-orange-accent transition-colors duration-300">
          <Icon />
        </div>
        <div>
          <p className="font-semibold text-text-black-main text-sm">{ch.label}</p>
          <p className="text-xs text-text-black-sub">{ch.detail}</p>
        </div>
      </div>
      <div className="text-text-black-sub group-hover:text-orange-accent group-hover:rotate-0 rotate-45 transition-all duration-300">
        <ArrowRight />
      </div>
    </motion.a>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-ink text-text-black-main py-32 px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24 mt-16">
          {/* Left — CTA */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: GOLDEN }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Let&apos;s build<br />
              <span className="text-orange-accent">something.</span>
            </h2>
            <p className="text-base text-text-black-sub font-light leading-relaxed max-w-xs">
              Open to full-time roles and freelance projects. Pick a channel and let&apos;s start a conversation.
            </p>
            <motion.a
              href="mailto:phansit.h222@gmail.com"
              className="self-start px-7 py-3.5 bg-orange-accent text-white text-sm font-semibold rounded-full hover:bg-orange-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0, 0, 0.58, 1] }}
            >
              Send me an email
            </motion.a>
          </motion.div>

          {/* Right — Channel cards */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: GOLDEN, delay: 0.1 }}
          >
            {channels.map((ch) => (
              <ChannelCard key={ch.label} ch={ch} />
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-text-black-sub">
            © {new Date().getFullYear()} Phansit Hadtakijwattana. Built with Next.js &amp; Tailwind CSS.
          </p>
          <p className="text-[11px] tracking-[0.15em] font-medium text-text-black-sub uppercase hidden sm:block">
            BENBUILDS.IT
          </p>
          <div className="flex items-center gap-2 text-[11px] text-text-black-sub">
            <span>Bangkok, Thailand</span>
            <span className="opacity-40">·</span>
            <BangkokClock />
          </div>
        </div>
      </div>
    </section>
  );
}
