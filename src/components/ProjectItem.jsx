import React from "react";
// import Image from "next/image"
import { Card } from "@/components/ui/card";

import imageUrl from "../assets/aum_yoga.png";
export default function ProjectItem({
  title,
  description,
  variant,
  oneLiner,
  tech,
}) {
  const variants = {
    dark: "bg-blue-dark text-white hover:bg-blue-dark/90",
    medium: "bg-blue-medium text-white hover:bg-blue-medium/90",
    light: "bg-blue-light text-white hover:bg-blue-light/90",
    accent: "bg-blue-accent text-blue-dark hover:bg-blue-accent/90",
  };

  return (
    <div
      className={`p-6 cursor-pointer rounded-sm transition-all duration-300 hover:scale-[1.02] ${variants[variant]}`}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-90">{oneLiner}</p>
      <p
        className={`mb-2 text-xs bold mt-3 ${
          variant === "accent" ? "text-black" : "text-[#00c7ff]"
        }`}
      >
        {tech}
      </p>
    </div>
  );
}
