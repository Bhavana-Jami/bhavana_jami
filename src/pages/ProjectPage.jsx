"use client";

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
import BreadCrum from "../components/BreadCrum";
import { useLocation } from "react-router-dom";
import Socials from "../components/Socials";
import Footer from "../components/Footer";


export default function ProjectPage() {
  const location = useLocation();
  const project = location.state.project;
  return (
    <div className="min-h-screen max-w-4xl  text-white py-8 ml-2 mr-2">
      {/* Project Header */}
      <div className="max-w-6xl mx-auto cursor-pointer">
        <div className="flex items-left px-8 sm:px-6 lg:px-8 flex-col">
          <BreadCrum
            levelOne="Projects"
            levelTwo={project?.title}
            path="/projectsArchive"
          />
          <div>
            <h2 className="text-3xl font-bold text-left  text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
              {project?.title}
            </h2>
            <p className="text-gray-400 mt-2 ">{project.oneLiner}</p>
          </div>
          
        <div
          className="mt-8 flex items-left space-x-6  pb-3
        "
          style={{ borderBottom: "1px solid #2f393f" }}
        >
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center space-x-2"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Demo</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center space-x-2"
          >
            <Github className="w-5 h-5" />
            <span>Github</span>
          </a>
        </div>
        </div>

        
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 py-16">
        <div className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur px-4 sm:px-6 py-8">
          <img
            src={project.image}
            alt="Notiger Dashboard"
            className="w-full h-auto"
          />
        </div>
        <div className="mt-10 ">
          <p className="text-xl">{project.description}</p>
        </div>
      </div>

     <Footer/>
    </div>
  );
}
