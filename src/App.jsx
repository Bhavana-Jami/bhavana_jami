import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import TabsMenu from "./components/TabsMenu";
import Work from "./components/Work";
import Projects from "./Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      <TabsMenu/>
      <Work/>
      <section id="about" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">About Me</h2>
      </section>

    
    <Projects/>
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Skills</h2>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
      </section>

      <section id="resume" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Resume</h2>
      </section>
    </div>
  );
}

export default App;
