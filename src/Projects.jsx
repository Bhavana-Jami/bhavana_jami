'use client'

import { motion } from "framer-motion";
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Get realtime notifications on events from your application",
    image: "/placeholder.svg?height=400&width=400",
    tech: "Next.js • TypeScript • Tailwind",
    github: "https://github.com/username/project-one",
    demo: "https://project-one.com",
    gridArea: "span 1 / span 2", // Wide card
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
  {
    id: 4,
    title: "Project Four",
    description: "AI-powered content generation platform",
    image: "/placeholder.svg?height=400&width=400",
    tech: "Python • TensorFlow • React",
    github: "https://github.com/username/project-four",
    demo: "https://project-four.com",
    gridArea: "span 1 / span 1", // Standard card
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen w-full px-9 relative overflow-hidden sm:px-20 mt-8" id="projects">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        // style={{
        //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485 1.415 1.415L34.828.828 32 0zm-6.485 0L16.828 8.687l1.414 1.414 10.485-10.485L25.515 0zm12.97 0l-8.485 8.485 1.415 1.415L41.9 0h-2.83zm-9.9 0l-9.9 9.9 1.415 1.415L29.9 0h-2.83zm-6.485 0L12.828 8.687l1.414 1.414 9.9-9.9L22.1 0zm12.97 0l-9.9 9.9 1.415 1.415L36.9 0h-2.83zm-6.485 0L18.828 8.687l1.414 1.414 9.9-9.9L28.585 0zm12.97 0l-9.9 9.9 1.415 1.415L43.9 0h-2.83zM20.343 0L11.857 8.485 13.272 9.9l9.9-9.9h-2.83zM38.97 0l-9.9 9.9 1.415 1.415L40.9 0h-2.83zM25.515 0L17.03 8.485 18.444 9.9l9.9-9.9h-2.83zm6.485 0L22.515 9.485 23.93 10.9l9.9-9.9h-2.83zm6.485 0L29.03 8.485 30.444 9.9l9.9-9.9h-2.83zM38.97 0l-9.9 9.9 1.415 1.415L40.9 0h-2.83z' fill='%2300c7ff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        // }}
      />

      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-bold text-left sm:text-center mb-12  text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
          Projects
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4">
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
              <div className="h-full w-full rounded-xl overflow-hidden backdrop-blur-sm bg-white/5  hover:border-[#00c7ff]/30 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-full w-full">
                  {/* <img
                    src={project.image}
                    alt={project.title}
                    
                  /> */}
                  <div className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/90 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00c7ff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="text-[#00c7ff] text-xs mb-4">
                      {project.tech}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-[#00c7ff]/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-[#00c7ff]/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

