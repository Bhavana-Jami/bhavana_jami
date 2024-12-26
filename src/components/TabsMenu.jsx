import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import resume from "../assets/resume.pdf";
import "../styles/TabsMenu.css";
const TabsMenu = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
    // { id: "resume", label: "Resume" },
  ];

  const handleScroll = useCallback(() => {
    const heroSection = document.getElementById("hero");
    const heroBottom = heroSection
      ? heroSection.getBoundingClientRect().bottom
      : 0;

    setIsSticky(heroBottom <= 0);

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
        setIsVisible(true);
      } else if (latest > 100 && latest > lastScrollY) {
        setIsVisible(false);
      }
      setLastScrollY(latest);
    });
  }, [scrollY, lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = isSticky ? 84 : 0;
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
        "z-40 max-w-4xl transition-all duration-300 ease-in-out fixed top-0 right-0 left-0 sm:relative sm:right-0 sm:left-0"
        // isSticky ? "fixed top-0 " : "relative"
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
      <div className="px-0 md:px-2 md:px-4 lg:px-5 sm:px-3 ">
        <ul className="  w-screen sm:w-full flex justify-center space-x-2 py-1 rounded-none sm:rounded-full bg-black/30 backdrop-blur-md shadow-lg border border-white/10">
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
