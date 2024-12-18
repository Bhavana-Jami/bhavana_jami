import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGraphql,
  SiDocker,
} from "react-icons/si";

// Skills data
const skills = {
  expertSkills: [
    { name: "React", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  familiarWith: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Docker", icon: SiDocker },
  ],
};

// Skill Bubble Component
const SkillBubble = ({ skill }) => (
  <motion.div
    className="flex items-center bg-gradient-to-r from-cyan-700 to-purple-700 rounded-full px-4 py-2 text-white text-sm font-medium"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {React.createElement(skill.icon, { className: "mr-2 text-lg" })}
    {skill.name}
  </motion.div>
);

// Skill Section Component
const ExSkillSection = ({ title, skills, description }) => (
  <motion.div
    className="mb-12"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex"
  >
    <div className="flex flex-col  md:items-center mb-4 ">
      <h2 className="text-2xl font-bold text-zinc-100 md:w-1/4">{title}</h2>
      {description && (
        <p className="text-zinc-400 mt-2 md:mt-0 md:w-3/4">{description}</p>
      )}
    </div>
    <div className="flex flex-wrap gap-3">
      {skills && skills.length > 0
        ? skills.map((skill) => <SkillBubble key={skill.name} skill={skill} />)
        : null}
    </div>
  </motion.div>
);
const FaSkillSection = ({ title, skills, description }) => (
  <motion.div
    className="mb-12"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    // className="flex"
  >
    <div className="flex flex-wrap gap-3">
      {skills && skills.length > 0
        ? skills.map((skill) => <SkillBubble key={skill.name} skill={skill} />)
        : null}
    </div>
    <div className="flex flex-col  md:items-center mb-4 ">
      <h2 className="text-2xl font-bold text-zinc-100 md:w-1/4">{title}</h2>
      {description && (
        <p className="text-zinc-400 mt-2 md:mt-0 md:w-3/4">{description}</p>
      )}
    </div>
  </motion.div>
);

const SkillsPage = () => {
  return (
    <div id="skills" className="h-screen  text-zinc-100  px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl md:text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-900 to-purple-900 text-transparent bg-clip-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h1>

        <motion.div
          className="space-y-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Experience Section */}
          <ExSkillSection
            title="Experience"
            skills={skills.expertSkills}
            description="Technologies I've worked with extensively and feel confident using in production environments."
          />
          {/* Familiar With Section */}
          <FaSkillSection
            title="Familiar With"
            skills={skills.familiarWith}
            description="Technologies I've used in projects or studied, but may not have extensive production experience with."
          />
        </motion.div>

        <motion.div
          className="mt-16 text-center text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
       
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
