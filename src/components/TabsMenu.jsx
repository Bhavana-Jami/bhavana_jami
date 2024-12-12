import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const TabsMenu = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroBottom = heroSection
        ? heroSection.getBoundingClientRect().bottom
        : 0;
      setIsSticky(heroBottom <= 0);

      const sections = ["about", "projects", "skills", "contact", "resume"];
      let currentSection = "about";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = isSticky ? 64 : 0; // Adjust this value based on your nav height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact Me" },
    { id: "resume", label: "Resume" },
  ];

  return (
    <nav
      className={cn(
        "z-50 w-full transition-all duration-300 ease-in-out",
        isSticky
          ? "fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm"
          : "relative bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center space-x-2 p-1 rounded-full bg-grey-1000/50">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => scrollToSection(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all duration-100 ease-in-out",
                  activeSection === tab.id
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                )}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TabsMenu;