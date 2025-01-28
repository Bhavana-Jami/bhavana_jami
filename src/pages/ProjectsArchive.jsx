import React from "react";
// import Image from "next/image"
import { Card } from "@/components/ui/card";
import trigli from "../assets/trigli.png";
import bluewonk from "../assets/bluewonk.png";
import aum_yoga from "../assets/aum_yoga.png";
import ProjectItem from "../components/ProjectItem";
import BreadCrum from "../components/BreadCrum";
const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "Showcasing my design and development journey with a personal touch. Built using ReactJS, Bootstrap, and CSS for a responsive and visually engaging design.",
    oneLiner:
      "A visually engaging portfolio to highlight my skills and projects.A visually engaging portfolio to highlight my skills and projects.",
    // image: { trigli },
    tech: "ReactJS • Bootstrap • CSS",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    variant: "dark",
  },
  {
    id: 2,
    title: "Trigli",
    description:
      "A journal app to track your emotional triggers and uplifting moments. Built with ReactJS and Bootstrap for a seamless user experience.",
    oneLiner:
      "An emotional trigger and mood journal app.n emotional trigger and mood journal app.n emotional trigger and mood journal app.",
    // image: trigli,
    tech: "ReactJS • Bootstrap",
    github: "https://github.com/Bhavana-Jami/trigli",
    demo: "https://trigli.vercel.app/",
    variant: "medium",
  },
  {
    id: 3,
    title: "Blue Wonk",
    description:
      "A blog space where I share my thoughts, ideas, and passions. Created with ReactJS and Bootstrap for a clean and minimal design.",
    oneLiner:
      "A personal blog to share thoughts and passionsn emotional trigger and mood journal app..",
    // image: bluewonk,
    tech: "ReactJS • Bootstrap",
    github: "https://github.com/Bhavana-Jami/bluewonk",
    demo: "https://bluewonk-94503.web.app/",
    variant: "light",
  },
  {
    id: 4,
    title: "Aum Yoga",
    description:
      "A yoga session booking application for hassle-free scheduling and management. Built with ReactJS to provide users with an intuitive interface.",
    oneLiner: "A seamless yoga session booking application.",
    // image: aum_yoga,
    tech: "ReactJS",
    github: "https://github.com/Bhavana-Jami/aum_yoga",
    demo: "https://aum-yoga.vercel.app/",
    variant: "accent",
  },
  {
    id: 1,
    title: "Portfolio",
    description:
      "Showcasing my design and development journey with a personal touch. Built using ReactJS, Bootstrap, and CSS for a responsive and visually engaging design.",
    oneLiner:
      "A visually engaging portfolio to highlight my skills and projects.",
    // image: { trigli },
    tech: "ReactJS • Bootstrap • CSS",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    variant: "dark",
  },
  {
    id: 2,
    title: "Trigli",
    description:
      "A journal app to track your emotional triggers and uplifting moments. Built with ReactJS and Bootstrap for a seamless user experience.",
    oneLiner: "An emotional trigger and mood journal app.",
    // image: trigli,
    tech: "ReactJS • Bootstrap",
    github: "https://github.com/Bhavana-Jami/trigli",
    demo: "https://trigli.vercel.app/",
    variant: "medium",
  },
  {
    id: 3,
    title: "Blue Wonk",
    description:
      "A blog space where I share my thoughts, ideas, and passions. Created with ReactJS and Bootstrap for a clean and minimal design.",
    oneLiner:
      "A personal blog to share thoughts and passions.n emotional trigger and mood journal app.",
    // image: bluewonk,
    tech: "ReactJS • Bootstrap",
    github: "https://github.com/Bhavana-Jami/bluewonk",
    demo: "https://bluewonk-94503.web.app/",
    variant: "light",
  },
];

export default function ProjectArchive() {
  return (
    <div className="min-h-screen p-8 max-w-5xl">
      <div className="max-w-7xl mx-auto">
        <BreadCrum levelOne="Projects" pathHome="/" />
        <h2 className="text-4xl font-bold mb-8 text-blue-accent">Projects</h2>
        <div className="bento-grid">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
