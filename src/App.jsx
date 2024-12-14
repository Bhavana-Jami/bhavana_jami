import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import TabsMenu from "./components/TabsMenu";
import Work from "./components/Work";
import Projects from "./Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
      {/* <TabsMenu/> */}
      {/* <Work/> */}
      <AboutMe />

      <Projects />
      <Skills />

      {/* <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold">Contact Me</h2>
      </section> */}
      <Contact/>
    </div>
  );
}

export default App;
