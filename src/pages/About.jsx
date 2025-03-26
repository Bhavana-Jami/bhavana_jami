"use client";

import { Github, Twitter, LinkedinIcon as LinkedIn, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import BreadCrum from "../components/BreadCrum";
import Footer from "../components/Footer";
export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto text-white py-10 sm:px-6 lg:px-8 ">
      {/* Header Section */}
      <div className="space-y-4">
        <BreadCrum levelOne="About" pathHome="/" />
        <h2 className="text-3xl font-bold text-left  mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
          Hello, there !
        </h2>
        <p
          className="text-gray-400 text-lg  pb-3 border-gray-800 "
          style={{ borderBottom: "1px solid #2f393f" }}
        >
          I love to create, develop.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-12 space-y-8">
        {/* Bio Section */}
        <div className=" backdrop-blur border-none">
          <h3 className="text-xl font-bold text-left  mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
            A lil about me
          </h3>
          <p className="text-gray-300 leading-relaxed text-xl max-w-3xl">
            I believe I'm a creative/artistic human being,being a computer
            science student I find web development as tool to express myself by
            creating beautiful and functional websites.
          </p>
        </div>
        {/* 
       

        {/* Experience Section */}
        <div className="backdrop-blur ">
          <h3 className="text-xl font-bold text-left  mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
            Work Experience
          </h3>
          <div className="space-y-4 max-w-3xl">
            <div className="border-l-2 border-[#1CB5E0] pl-4">
              <h3 className="text-lg font-medium">Frontend Developer</h3>
              <p className="text-gray-400">Tata Consultancy Services</p>
              <p className="text-gray-500 text-sm">2021 - Present</p>
              <p className="text-gray-500 text-xl">
                I am currently working in TCS, Chennai as Frontend Developer for
                Lloyds Banking Group client. I worked on legacy systems by
                rewriting the applications using ReactJS.
              </p>
            </div>
          </div>
        </div>
        <div className=" backdrop-blur border-none">
          <h3 className="text-xl font-bold text-left  mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
            I use AI
          </h3>
          <p className="text-gray-300 leading-relaxed text-xl max-w-3xl">
            Since the rise AI tools like ChatGPT, Vercel V0 I have started to
            leverage them to make development easier and faster by automating
            repetitive tasks so that I don't have to start every project from
            scratch.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
