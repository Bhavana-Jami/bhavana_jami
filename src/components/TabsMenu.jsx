'use client'

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const TabsMenu = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroBottom = heroSection
        ? heroSection.getBoundingClientRect().bottom
        : 0;

      // Make the navbar sticky when the hero section is fully out of view
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

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (latest > 100 && latest > lastScrollY) {
        // Scrolling down and past the threshold
        setIsVisible(false);
      }
      setLastScrollY(latest);
    });
  }, [scrollY, lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = isSticky ? 84 : 0; // Adjust this value based on your nav height
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
    <motion.nav
      className={cn(
        "z-40 max-w-4xl mx-auto transition-all duration-300 ease-in-out",
        isSticky
          ? "fixed top-0 -translate-x-1/2"
          : "relative"
      )}
      initial={false}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center space-x-2 p-1 rounded-full bg-[#121226] shadow-lg">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <motion.button
                style={{ 
                  backgroundColor: activeSection === tab.id ? "#00c8ff" : "",
                }}
                onClick={() => scrollToSection(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all duration-100 ease-in-out",
                  activeSection === tab.id
                    ? "text-purple-950 shadow-blue-600/50 font-bold"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default TabsMenu;

