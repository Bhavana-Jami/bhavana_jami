import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import "../styles/Projects.css";
import { Link } from "react-router-dom";
import trigli from "../assets/trigli.png";
import aum_yoga from "../assets/aum_yoga.png";
import bluewonk from "../assets/bluewonk.png";

const projects = [
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
    oneLiner: "A personal blog to share thoughts and passions.",
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
    oneLiner: "A personal blog to share thoughts and passions.",
    // image: bluewonk,
    tech: "ReactJS • Bootstrap",
    github: "https://github.com/Bhavana-Jami/bluewonk",
    demo: "https://bluewonk-94503.web.app/",
    variant: "light",
  },
];

export default function Projects() {
  const variants = {
    dark: "bg-blue-dark text-white hover:bg-blue-dark/90",
    medium: "bg-blue-medium text-white hover:bg-blue-medium/90",
    light: "bg-blue-light text-white hover:bg-blue-light/90",
    accent: "bg-cyan-900/90 text-blue-dark hover:bg-blue-accent/10",
  };
  return (
    <section
      className=" w-full relative overflow-hidden sm:px-20 px-7  mb-8 -mt-36"
      id="projects"
    >
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-bold text-left  mb-12  text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
          Projects
        </h2>

        {/* Bento Grid Layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-2 sm:gap-4 mb-4 `}
        >
          {projects.slice(0,4).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`projectPage/${project.id}`} state={{ project }}>
                <div
                  className={`h-full w-full  overflow-hidden backdrop-blur-sm  rounded-sm transition-all duration-300 hover:scale-[1.02] ${variants[project.variant]}`}
                >
                  <div className="absolute inset-0 flex flex-col justify-center items-start project-card px-4">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00c7ff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.oneLiner}
                    </p>
                    <div className="text-[#00c7ff] text-xs mb-4">
                      {project.tech}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-left mt-16 pl-1">
          <Link
            to="/projectsArchive"
            className="border-b-[0.8px] border-[#1CB5E0] pb-1 text-[#1CB5E0] hover:underline"
          >
            View more projects &nbsp; ⟶
          </Link>
        </div>
      </div>
    </section>
  );
}
