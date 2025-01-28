import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsArchive from "./pages/ProjectsArchive";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/About";
import Blog from "./pages/Blog";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />

          <Route path="projectsArchive" element={<ProjectsArchive />} />
          <Route path="projectPage/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
