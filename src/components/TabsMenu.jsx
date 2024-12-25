import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import resume from "../assets/resume.pdf";
import "../styles/TabsMenu.css";

const TabsMenu = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = useCallback(() => {
    let currentSection = "projects";
    let minDistance = Infinity;

    tabs.forEach((tab) => {
      const element = document.getElementById(tab.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = tab.id;
        }
      }
    });

    setActiveSection(currentSection);
  }, [tabs]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (latest > 100 && latest > lastScrollY) {
        // Scrolling down and past the 100px mark
        setIsVisible(false);
      }
      setLastScrollY(latest);
    });
  }, [scrollY, lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 84; // Approximate height of the navbar
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className={cn(
        "z-40 w-full fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out"
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
      <div className="px-2 md:px-4 lg:px-5 sm:px-3 max-w-sm mx-auto">
        <ul className="flex justify-center space-x-2 p-1 rounded-full backdrop-blur-sm bg-black/10 shadow-lg border border-white/10">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <motion.button
                onClick={() => scrollToSection(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all duration-100 ease-in-out",
                  activeSection === tab.id
                    ? "activeTab"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            </li>
          ))}
          <a
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-all duration-100 ease-in-out text-colorBlueOne"
            )}
            href={resume}
            download="BHAVANA_JAMI_2_YOE_TCS_FRONT_END_DEV.pdf"
          >
            Resume
          </a>
        </ul>
      </div>
    </motion.nav>
  );
};

export default TabsMenu;

