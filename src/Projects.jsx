// import React from "react";

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       name: "Portfolio",
//       techstack: "ReactJs • ReactBootstrap • CSS",
//       description:
//         "This is my portfolio website where I tried  is my portfolio website where I tried  is my portfolio website where I tried  is my portfolio website where I tried to showcase my web developement skills in the aspects of design and dvelopment",
//       github: "git",
//       demo: "demo",
//     },
//     {
//       id: 2,
//       name: "Trigli",
//       techstack: "ReactJs • ReactBootstrap • CSS",
//       description:
//         "Trigli resembles a note taking app except it is specifically developed for the users to journal about their triggers and glimmers",
//       github: "trigligit",
//       demo: "triglidemo",
//     },
//     {
//       id: 3,
//       name: "BlueWonk",
//       techstack: "ReactJs • React • Bootstrap",
//       description:
//         "Blue Wonk is my personal blog where I share various things I am personally interested in.",
//       github: "",
//       demo: "",
//     },
//     // { id: 4, name: "Bcommerce", techstack: "NA", description: "Coming Soon", github: "NA", demo: "NA" }
//   ];
//   return (
//     <div
//       id="projects"
//       className="min-h-screen w-full p-4 flex items-center justify-center bg-slate-950 flex-col"
//     >
//       <h2 className="text-4xl font-bold">Projects</h2>
//       <div>
//         {
//             projects.map((project)=>(
//                <div key={project.id}>
//                 <h2>{project.name}</h2>
//                 <span>{project.techstack}</span>
//                </div> 
//             ))
//         }
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React from 'react';
import { Wallet, ShoppingCart, Users } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
export function Projects() {
  const projects = [
    {
      title: "BeenPay",
      description: "Online Payments",
      icon: <Wallet className="w-6 h-6 text-white" />,
      link: "#",
      rotation: -5,
      translate: { x: 0, y: 0 }
    },
    {
      title: "Been Checkout",
      description: "Pre-Built Payments",
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      link: "#",
      rotation: 0,
      translate: { x: -20, y: 20 }
    },
    {
      title: "Been Connect",
      description: "Business Financing",
      icon: <Users className="w-6 h-6 text-white" />,
      link: "#",
      rotation: 5,
      translate: { x: -40, y: 40 }
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center ">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;