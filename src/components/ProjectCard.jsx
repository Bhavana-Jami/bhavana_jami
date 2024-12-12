import React from "react";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  icon,
  link,
  rotation = 0,
  translate = { x: 0, y: 0 },
}) => {
  return (
    <div
      className="group relative w-full max-w-md"
    //   style={{
    //     transform: `rotate(${rotation}deg) translate(${translate.x}px, ${translate.y}px)`,
    //   }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500  rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
      <div className="relative p-6 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-900/90  transition-colors duration-600">
        <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 p-[2px]">
          <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
            {icon}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>

        <p className="text-gray-400 mb-4">{description}</p>

        <a
          href={link}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span className="mr-1">Open {title}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
