import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsArchive from "./pages/ProjectsArchive";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import StructuredData from "./components/StructuredData";

function App() {
  return (
    <div className="App">
      <StructuredData />
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/projectsArchive" element={<ProjectsArchive />} />
          <Route path="/projectPage/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
