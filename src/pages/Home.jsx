import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "./Contact";
const Home = () => {
  return (
    <div className="flex  flex-col gap-y-24">
      {" "}
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
