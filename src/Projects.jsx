// // import React from "react";

// // const Projects = () => {
// //   const projects = [
// //     {
// //       id: 1,
// //       name: "Portfolio",
// //       techstack: "ReactJs • ReactBootstrap • CSS",
// //       description:
// //         "This is my portfolio website where I tried  is my portfolio website where I tried  is my portfolio website where I tried  is my portfolio website where I tried to showcase my web developement skills in the aspects of design and dvelopment",
// //       github: "git",
// //       demo: "demo",
// //     },
// //     {
// //       id: 2,
// //       name: "Trigli",
// //       techstack: "ReactJs • ReactBootstrap • CSS",
// //       description:
// //         "Trigli resembles a note taking app except it is specifically developed for the users to journal about their triggers and glimmers",
// //       github: "trigligit",
// //       demo: "triglidemo",
// //     },
// //     {
// //       id: 3,
// //       name: "BlueWonk",
// //       techstack: "ReactJs • React • Bootstrap",
// //       description:
// //         "Blue Wonk is my personal blog where I share various things I am personally interested in.",
// //       github: "",
// //       demo: "",
// //     },
// //     // { id: 4, name: "Bcommerce", techstack: "NA", description: "Coming Soon", github: "NA", demo: "NA" }
// //   ];
// //   return (
// //     <div
// //       id="projects"
// //       className="min-h-screen w-full p-4 flex items-center justify-center bg-slate-950 flex-col"
// //     >
// //       <h2 className="text-4xl font-bold">Projects</h2>
// //       <div>
// //         {
// //             projects.map((project)=>(
// //                <div key={project.id}>
// //                 <h2>{project.name}</h2>
// //                 <span>{project.techstack}</span>
// //                </div>
// //             ))
// //         }
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;
// import React from "react";
// import { Wallet, ShoppingCart, Users } from "lucide-react";
// import ProjectCard from "./components/ProjectCard";
// export function Projects() {
//   const projects = [
//     {
//       title: "BeenPay",
//       description: "Online Payments",
//       icon: <Wallet className="w-6 h-6 text-white" />,
//       link: "#",
//       rotation: -5,
//       translate: { x: 0, y: 0 },
//     },
//     {
//       title: "Been Checkout",
//       description: "Pre-Built Payments",
//       icon: <ShoppingCart className="w-6 h-6 text-white" />,
//       link: "#",
//       rotation: 0,
//       translate: { x: -20, y: 20 },
//     },
//     {
//       title: "Been Connect",
//       description: "Business Financing",
//       icon: <Users className="w-6 h-6 text-white" />,
//       link: "#",
//       rotation: 5,
//       translate: { x: -40, y: 40 },
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center "
//     >
//       <div className="max-w-6xl w-full">
//         <h2 className="title text-3xl md:text-4xl font-bold mb-12 text-center">
//           Featured Projects
//         </h2>
//         <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
//           {projects.map((project, index) => (
//             <ProjectCard key={project.title} {...project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
// 'use client'

// import Link from 'next/link'
import { motion } from 'framer-motion'
// import{ Link} from "react-router-dom"
// import aum_yoga from "./assets/yoga.svg"
// import blue_wonk from "./assets/blog.svg"
// import trigger_glimmer from "./assets/trigli.svg"
import aum_yoga from "./assets/aum_yoga.png"
import blue_wonk from "./assets/blue_wonk.png"
import trigger_glimmer from "./assets/trigger_glimmer.png"
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Project One",
    image: blue_wonk,
    category: "Graphic Design",
    link: "/work/project-one"
  },
  {
    id: 2,
    title: "Project Two",
    image: aum_yoga,
    category: "Illustration",
    link: "/work/project-two"
  },
  {
    id: 3,
    title: "Project Three",
    image:trigger_glimmer,
    category: "Branding",
    link: "/work/project-three"
  },
  // {
  //   id: 4,
  //   title: "Project Three",
  //   image:trigger_glimmer,
  //   category: "Branding",
  //   link: "/work/project-three"
  // },
  // {
  //   id: 4,
  //   title: "Project Four",
  //   image: "/placeholder.svg?height=400&width=400",
  //   category: "UI Design",
  //   link: "/work/project-four"
  // },
  // {
  //   id: 5,
  //   title: "Project Five",
  //   image: "/placeholder.svg?height=400&width=400",
  //   category: "Motion",
  //   link: "/work/project-five"
  // }
]

export default function Projects() {
  return (
    <div className=" text-white py-16 px-4 sm:px-6lg:px-9" id='projects'>
      <div className="max-w-5xl mx-auto  sm:px-6">
      <h2 className="title text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-l from-white to-purple-900 ">
          Featured Projects
         </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a href={project.link} key={project.id}>
              <motion.div
                className="relative group overflow-hidden rounded-lg bg-[#121226] aspect-square"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full w-full p-1 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-3/4 h-3/4 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </motion.div>
            </a>
          ))}
          <div className="col-span-full flex justify-center mt-8">
            <motion.button
              className="px-6 py-3 bg-[#141428] text-white rounded-lg font-semibold flex items-center space-x-2 hover:bg-[#1c1c3a] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>More</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

