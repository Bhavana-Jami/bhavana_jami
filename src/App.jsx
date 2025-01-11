import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App min-h-screen">
      <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
