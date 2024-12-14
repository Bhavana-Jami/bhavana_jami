import React from 'react';
import { 
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
    SiFigma, SiAdobexd, SiSketch, SiNodedotjs, SiExpress, 
    SiPython, SiDjango, SiMongodb, SiPostgresql, SiMysql, 
    SiFirebase, SiRedis, SiDocker, SiKubernetes, SiGit,
    SiHtml5, SiCss3, SiJavascript, SiGraphql
  } from 'react-icons/si'

const skills = [
  { 
    name: 'React', 
    icon: SiReact,
    projects: 15,
    expertise: 'primary',
    span: 'col-span-2 row-span-2'
  },
  { 
    name: 'JavaScript', 
    icon: SiJavascript,
    projects: 20,
    expertise: 'primary',
    span: 'col-span-2 row-span-2'
  },
  { 
    name: 'Tailwind CSS', 
    icon: SiTailwindcss,
    projects: 8,
    expertise: 'secondary',
    span: 'col-span-1 row-span-1'
  },
  { 
    name: 'Redux', 
    icon: SiRedux,
    projects: 6,
    expertise: 'secondary',
    span: 'col-span-1 row-span-1'
  },
  { 
    name: 'Node.js', 
    icon: SiNodedotjs,
    projects: 10,
    expertise: 'primary',
    span: 'col-span-2 row-span-1'
  },
  { 
    name: 'MongoDB', 
    icon: SiMongodb,
    projects: 5,
    expertise: 'secondary',
    span: 'col-span-1 row-span-1'
  },
  { 
    name: 'Firebase', 
    icon: SiFirebase,
    projects: 4,
    expertise: 'secondary',
    span: 'col-span-1 row-span-1'
  },
  { 
    name: 'Git', 
    icon: SiGit,
    projects: 20,
    expertise: 'primary',
    span: 'col-span-2 row-span-1'
  },
  { 
    name: 'HTML5', 
    icon: SiHtml5,
    projects: 20,
    expertise: 'primary',
    span: 'col-span-1 row-span-1'
  },
  { 
    name: 'CSS3', 
    icon: SiCss3,
    projects: 20,
    expertise: 'primary',
    span: 'col-span-1 row-span-1'
  }
];

const SkillTile = ({ skill, index }) => {
  const baseColors = {
    primary: 'bg-purple-700 hover:bg-purple-800',
    secondary: 'bg-blue-700 hover:bg-blue-800'
  };

  const IconComponent = skill.icon;
  const iconSize = skill.span.includes('col-span-2') ? 32 : 20;

  return (
    <div
      className={`
        ${skill.span}
        ${baseColors[skill.expertise]}
        p-6 rounded-xl flex flex-col items-center justify-center
        transform transition-all duration-300 hover:scale-105
        relative overflow-hidden
      `}
    >
      {/* <div className="absolute top-3 right-3 bg-white/10 rounded-full px-2 py-1">
        <span className="text-xs text-black">{skill.projects} projects</span>
      </div> */}
      
      <IconComponent 
        size={iconSize}
        className="text-black"
      />

      <p className={`
        ${skill.span.includes('col-span-2') ? 'text-lg mt-4' : 'text-xs mt-2'}
        text-black text-center
      `}>
        {skill.name}
      </p>
    </div>
  );
};

export default function Skills() {
  return (
    <section className=" py-16 px-9 sm:px-6 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-[#00c8ff] text-transparent bg-clip-text">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {skills.map((skill, index) => (
            <SkillTile key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}