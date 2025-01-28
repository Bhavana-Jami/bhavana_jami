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

const BreadCrum = (props) => {
  return (
    <div className="flex mb-5 gap-1  ">
      <div className="  flex items-center space-x-1 text-gray-300 hover:text-white transition">
        <Link to={props.pathHome}>
          <House strokeWidth={2} className="w-3 h-3" />
        </Link>
      </div>
      <div className="  flex items-center space-x-1 text-gray-300 hover:text-white transition">
        <ChevronRight strokeWidth={2} className="w-3 h-3" />
      </div>
      <div className="  flex items-center space-x-1 text-gray-300 hover:text-white transition">
        <FolderClosed strokeWidth={2} className="w-3 h-3" />
        <Link to={props.path}>
          <span className="text-sm">{props.levelOne}</span>
        </Link>
      </div>
      {props.levelTwo && (
        <div className="  flex items-center space-x-1 text-gray-300 hover:text-white transition">
          <ChevronRight strokeWidth={2} className="w-3 h-3" />
        </div>
      )}
      {props.levelTwo && (
        <div className="flex items-center space-x-1 text-blue-500 hover:text-pink-400 transition">
          <Star strokeWidth={2} className="w-3 h-3" />
          <span className="text-sm">{props.levelTwo}</span>
        </div>
      )}
    </div>
  );
};

export default BreadCrum;
