import React from "react";
// import Image from "next/image"
import { Card } from "@/components/ui/card";
import trigli from "../assets/trigli.png";
import bluewonk from "../assets/bluewonk.png";
import aum_yoga from "../assets/aum_yoga.png";
import ProjectItem from "../components/ProjectItem";
import BreadCrum from "../components/BreadCrum";
import pharma from "../assets/pharma-assist.png";

import Footer from "../components/Footer";
const projects = [
  {
    id: 1,
    title: "Pharma Assist",
    description:
      "A web application designed to assist pharmaceutical workflows by streamlining data access and interactions. Built with ReactJS and modern state management, the app focuses on clean UI, usability, and efficient handling of domain-specific data.",
    oneLiner:
      "A frontend-focused application to simplify pharmaceutical data workflows.",
    image: pharma,
    tech: "ReactJS • Redux Toolkit • Firebase • React Router DOM",
    github: "https://github.com/Bhavana-Jami/pharma-assist",
    demo: "https://pharma-assist-bice.vercel.app/",
    variant: "dark",
  }
  ,
  {
    id: 2,
    title: "Trigli",
    description:
      "A journal app to track your emotional triggers and uplifting moments. Built with ReactJS and Bootstrap for a seamless user experience.",
    oneLiner: "An emotional trigger and mood journal app.",
    image: trigli,
    tech: "ReactJS • Tailwind CSS",
    github: "https://github.com/Bhavana-Jami/trigli",
    demo: "https://trigli.vercel.app/",
    variant: "medium",
  },
  {
    id: 3,
    title: "Blue Wonk",
    description:
      "A blog space where I share my thoughts, ideas, and passions. Created with ReactJS and Bootstrap for a clean and minimal design.",
    oneLiner: "A personal blog to share thoughts and passions.",
    image: bluewonk,
    tech: "ReactJS • Tailwind CSS • React Markdown",
    github: "https://github.com/Bhavana-Jami/bluewonk",
    demo: "http://iambluewonk.com",
    variant: "light",
  },
  {
    id: 4,
    title: "Aum Yoga",
    description:
      "A yoga session booking application for hassle-free scheduling and management. Built with ReactJS to provide users with an intuitive interface.",
    oneLiner: "A seamless yoga session booking application.",
    image: aum_yoga,
    tech: "ReactJS • Razorpay • Firebase • Tailwind CSS",
    github: "https://github.com/Bhavana-Jami/aum_yoga",
    demo: "https://aum-yoga.vercel.app/",
    variant: "dark",
  },
];

export default function ProjectArchive() {
  return (
    <article className="min-h-screen p-8 max-w-4xl mx-auto text-white py-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <BreadCrum levelOne="Projects" pathHome="/" />
        <h2 className="text-4xl font-bold mb-4 text-blue-accent"


        >Projects</h2>
        <p
          className="text-gray-400 text-lg  pb-3 border-gray-800 mb-8"
          style={{ borderBottom: "1px solid #2f393f" }}
        >
          Check my Github for more projects.
        </p>
        <div className="bento-grid">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </article>
  );
}
