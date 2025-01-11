import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsArchive from "./pages/ProjectsArchive";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App ">
      <div className="sm:w-9/12 w-full">
        {/* <Home /> */}
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projectsArchive" element={<ProjectsArchive />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
