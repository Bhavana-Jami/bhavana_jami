import React from "react";
import "../styles/Skills.css";

const SkillIcon = ({ icon, title }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="relative">
      <div className="p-4 rounded-full bg-black-800/90 backdrop-blur-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-200">
        {/* Glossy effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
        <img
          src={icon}
          alt={title}
          className="w-6 h-6 md:w-8 md:h-8 relative z-10"
        />
      </div>
    </div>
    <span className="text-xs md:text-sm font-medium text-slate-300">{title}</span>
  </div>
);

const SkillsSection = ({ title, skills }) => (
  <div className="flex flex-col">
    <h2 className="text-3xl font-bold text-left mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851]">
      {title}
    </h2>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <SkillIcon key={index} {...skill} />
      ))}
    </div>
  </div>
);

const SkillsPage = () => {
  const expertSkills = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", title: "Node.js" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", title: "HTML5" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", title: "CSS3" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg", title: "REST API" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", title: "Firebase" },
    { icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", title: "Tailwind CSS" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", title: "Material UI" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", title: "Bootstrap" }
  ];

  const familiarSkills = [
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", title: "Jest" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", title: "TypeScript" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", title: "GraphQL" },
    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB" }
  ];

  return (
    <div className="mt-8 w-full sm:px-20 px-7" id="skills">
      <div className="flex flex-col gap-12">
        <SkillsSection title="I'm Good At" skills={expertSkills} />
        <SkillsSection title="I'm Familiar With" skills={familiarSkills} />
      </div>
    </div>
  );
};

export default SkillsPage;
