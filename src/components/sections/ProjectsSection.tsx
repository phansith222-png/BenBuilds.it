"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

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
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
