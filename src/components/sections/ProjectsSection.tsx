"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "BigBode (BB)",
    category: "AI-Powered Application",
    description: "A sophisticated AI Tarot reading application that simplifies complex interpretations into accessible, personalized insights.",
    tech: ["React", "MySql", "Gemini API 3.0 Flash", "Tailwind"],
    imageAlt: "BigBode App Interface",
    link: "#",
  },
  {
    title: "4B1K",
    category: "Community Platform",
    description: "A dedicated central hub for music enthusiasts featuring comprehensive artist profiles, discographies, and identity insights.",
    tech: ["React", "Music APIs", "Node.js", "Socket.io"],
    imageAlt: "4B1K Platform Interface",
    link: "#",
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-[#000000] text-text-black-main py-40 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-24 md:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-white">
            Selected Works.
          </h2>
          <p className="text-xl md:text-2xl text-text-black-sub mt-6 max-w-2xl font-light leading-relaxed">
            Highlighting core masterpieces that blend complex data integrations with seamless, editorial user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={index}
              className="group block cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: index * 0.1 }}
              whileHover="hover"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111111] rounded-[2rem] border border-white/5 mb-8 shadow-2xl">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex flex-col items-center justify-center p-8 text-center"
                  variants={{
                    hover: { scale: 1.05 }
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-white/30 uppercase tracking-widest text-xs font-medium mb-3">Project Visual</span>
                  <span className="text-white/20 text-xs font-mono px-4 py-2 rounded-full border border-white/10 bg-black/50">
                    /placeholder-{project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.jpg
                  </span>
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <motion.p
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-text-black-sub mb-3"
                  variants={{ hover: { color: "#FFFFFF" } }}
                  transition={{ duration: 0.4 }}
                >
                  {project.category}
                </motion.p>
                <motion.h3
                  className="text-3xl font-bold text-white tracking-tight mb-4"
                  variants={{ hover: { color: "#D9D9D9" } }}
                  transition={{ duration: 0.4 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-lg text-text-black-sub font-light mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-1.5 text-xs font-medium border border-white/10 rounded-full text-text-black-sub bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
