import React from "react";
import {
    Github,
    Twitter,
    Youtube,
    ExternalLink,
    House,
    Star,
    FolderDot,
    ChevronRight,
    FolderClosed,
    
  
  } from "lucide-react";
import { Link } from "react-router-dom";

const BreadCrum = ({projectTitle, projectId}) => {
  return (
    <div className="flex mb-5 gap-1 px-8 sm:px-6 lg:px-8">
      <div className="  flex items-center space-x-1 text-gray-300 hover:text-white transition">
       
       <Link to="/"> <House strokeWidth={2} className="w-3 h-3" /></Link>
        {/* <span>Home</span> */}
      </div>
      <div className="  flex items-center space-x-1 text-gray-300 hover:text-white transition">
        <ChevronRight strokeWidth={2} className="w-3 h-3" />
      </div>
      <div className="  flex items-center space-x-1 text-gray-300 hover:text-white transition">
        {/* <House strokeWidth={2} className="w-4 h-4" /> */}
       
        <FolderClosed strokeWidth={2} className="w-3 h-3" />
        <Link to="/projectsArchive">
        <span className="text-sm">Projects</span></Link>
      </div>
      <div className="  flex items-center space-x-1 text-gray-300 hover:text-white transition">
        <ChevronRight strokeWidth={2} className="w-3 h-3" />
      </div>
      <div className="flex items-center space-x-1 text-blue-500 hover:text-pink-400 transition">
        <Star strokeWidth={2} className="w-3 h-3" />
        {/* <Link to={`projectPage/${projectId}`}> */}
        <span className="text-sm">{projectTitle}</span>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default BreadCrum;
