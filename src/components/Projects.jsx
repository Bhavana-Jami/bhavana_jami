"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import "../styles/Projects.css";
import { Button } from "@/components/ui/button";
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Get realtime notifications on events from your application",
    image: "/placeholder.svg?height=400&width=400",
    tech: "Next.js • TypeScript • Tailwind",
    github: "https://github.com/username/project-one",
    demo: "https://project-one.com",
    gridArea: "span 1 / span 1", // Wide card
  },
  {
    id: 2,
    title: "Project Two",
    description: "A modern authentication system with multiple providers",
    image: "/placeholder.svg?height=400&width=400",
    tech: "React • Node.js • MongoDB",
    github: "https://github.com/username/project-two",
    demo: "https://project-two.com",
    gridArea: "span 1 / span 1", // Tall card
  },
  {
    id: 3,
    title: "Project Three",
    description: "Real-time chat application with video calling features",
    image: "/placeholder.svg?height=400&width=400",
    tech: "Vue.js • Firebase • WebRTC",
    github: "https://github.com/username/project-three",
    demo: "https://project-three.com",
    gridArea: "span 1 / span 1", // Standard card
  },
];

export default function Projects() {
  return (
    <section
      className=" w-full relative overflow-hidden sm:px-20 px-4  mb-8"
      id="projects"
    >
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-bold text-left  mb-12  text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
          Projects
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-2 sm:gap-4 mb-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`group relative ${project.gridArea}`}
              style={{ gridArea: project.gridArea }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className=" h-full w-full rounded-xl overflow-hidden backdrop-blur-sm bg-white/5  hover:border-[#00c7ff]/30 transition-all duration-300">
                <div className="absolute inset-0 flex flex-col justify-center items-start project-card px-4">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00c7ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="text-[#00c7ff] text-xs mb-4">
                    {project.tech}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-left">
          <Button
            // variant="outline"
            style={{ borderBottom: "0.8px solid #1CB5E0 " }}
            className="view_more "

>
           View more projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
