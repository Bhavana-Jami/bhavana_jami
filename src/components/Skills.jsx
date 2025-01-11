import React from "react";
import "../styles/Skills.css";
const SkillIcon = ({ icon, title }) => (
  <div className="flex flex-col items-center gap-1 group">
    <div className="relative">
      <div className="p-4 rounded-full bg-black-800/90 backdrop-blur-sm border border-slate-700/50 relative overflow-hidden group-hover:scale-110 transition-transform duration-200">
        {/* Glossy effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
        <img
          src={icon}
          alt={title}
          className="w-6 h-6 md:w-8 md:h-8 relative z-10"
        />
      </div>
    </div>
    <span className="text-xs md:text-sm font-medium text-slate-300">
      {title}
    </span>
  </div>
);

const SkillsSection = ({ title, skills }) => (
  <div className="space-y-6 ">
    <h2 className="text-xl md:text-2xl font-bold text-slate-200">{title}</h2>
    <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
      {skills.map((skill, index) => (
        <SkillIcon key={index} {...skill} />
      ))}
    </div>
  </div>
);

const SkillsPage = () => {
  const expertSkills = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      title: "TypeScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      title: "JavaScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      title: "HTML5",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      title: "Node.js",
    },
  ];

  const familiarSkills = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      title: "Next.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      title: "GraphQL",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      title: "MongoDB",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      title: "Vue.js",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      title: "CSS3",
    },
  ];

  return (
    <div className="min-h-screen flex justify-start md:justify-center items-center  w-full " id="skills">
      <div className="max-w-6xl ">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-left sm:text-center mb-12  text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
            Skills
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-16 ">
          <div className="flex-1 mb-12 lg:mb-0 ">
            <SkillsSection title="I'm Good At" skills={expertSkills} />
          </div>
          <div className="flex-1">
            <SkillsSection title="I Know" skills={familiarSkills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
