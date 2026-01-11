import { Github, Twitter, LinkedinIcon as LinkedIn, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import BreadCrum from "../components/BreadCrum";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <article className="min-h-screen p-8 max-w-5xl mx-auto text-white py-10 sm:px-6 lg:px-8 ">
      {/* Header Section */}
      <header className="space-y-4">
        <BreadCrum levelOne="About" pathHome="/" />
        <h1 className="text-3xl font-bold text-left mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
          Hello, there!
        </h1>
        <p
          className="text-gray-400 text-lg pb-3 border-gray-800"
          style={{ borderBottom: "1px solid #2f393f" }}
        >
          I love to create, develop frontend experiences.
        </p>
      </header>

      {/* Main Content */}
      <div className="mt-12 space-y-8">
        {/* Bio Section */}
        <div className="backdrop-blur border-none">
          <h3 className="text-xl font-bold text-left mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
            A lil about me
          </h3>
          <p className="text-gray-300 leading-relaxed text-xl max-w-3xl">
            I’m a Frontend Engineer who enjoys the instant feedback loop of
            building UI, watching ideas turn into interfaces and refining them
            until they feel right. I care deeply about functionality,
            accessibility, responsiveness, and performance, and I find joy in
            polishing the small details that make an experience seamless.
          </p>
        </div>

        {/* Experience Section */}
        <div className="backdrop-blur">
          <h3 className="text-xl font-bold text-left mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
            Work Experience
          </h3>
          <div className="space-y-4 max-w-3xl">
            <div className="border-l-2 border-[#1CB5E0] pl-4">
              <h3 className="text-lg font-medium">Frontend Engineer @ Tata Consultancy Services ( 2022 - Present )</h3>
              {/* <p className="text-gray-400">Tata Consultancy Services</p> */}
              <p className="text-gray-500 text-xl">
                I work on internal applications for the Lloyds Banking Group,
                modernizing legacy systems by rebuilding them with React. More
                recently, I’ve been contributing to an internal AI-assisted
                developer tool—working on both the frontend experience and the
                logic that enables intelligent, guided outputs through prompts
                and RAG-based workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="backdrop-blur border-none">
          <p className="text-gray-300 leading-relaxed text-xl max-w-3xl">
            Lately, I’ve been enjoying how meticulously Generative AI can be
            merged with frontend engineering to build thoughtful, intuitive, and
            genuinely useful product experiences.
          </p>
        </div>
      </div>

      <Footer />
    </article>
  );
}
