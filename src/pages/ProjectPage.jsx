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
import aum_yoga from "../assets/aum_yoga.png";
import BreadCrum from "../components/BreadCrum";
import { useLocation } from "react-router-dom";

export default function ProjectPage() {
  const location = useLocation();
  const project = location.state.project;
  return (
    <div className="min-h-screen max-w-4xl  text-white py-8 ml-4 mr-4">
      {/* Project Header */}
      <div className="max-w-6xl mx-auto cursor-pointer">
        <BreadCrum projectTitle={project?.title} projectId={project.id}/>
        <div className="flex items-center px-8 sm:px-6 lg:px-8">
          {/* <div className="bg-blue-600 p-4 rounded-2xl">
            <span className="text-4xl font-bold">N</span>
          </div> */}
          <div>
            <h2 className="text-3xl font-bold text-left  text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
             {project?.title}
            </h2>
            <p className="text-gray-400 mt-2">
              {project.oneLiner}
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center space-x-6 px-8 sm:px-6 lg:px-8">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center space-x-2"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Demo</span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white flex items-center space-x-2"
          >
            <Github className="w-5 h-5" />
            <span>Github</span>
          </a>
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
          <p className="text-xl">
          {project.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className=" ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <p className="text-gray-400 mb-4">
            Made by{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Bhavana Jami
            </a>
          </p>
          <div className="flex justify-start space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
