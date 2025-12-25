import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import resume from "../assets/resume.pdf";
import "../styles/TabsMenu.css";
import { Link } from "react-router-dom";
import { track } from '@vercel/analytics';

const TabsMenu = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  const tabs = [
    { id: "projects", label: "Projects", path: "projectsArchive" },
    { id: "about", label: "About", path: "about" },
    { id: "contact", label: "Contact", path: "contact" },
  ];

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
    <div className="px-10 w-auto md:px-4 lg:px-5 sm:px-3 fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex justify-center  py-1 rounded-full sm:rounded-full bg-black/30 backdrop-blur-md shadow-lg border border-white/10">
        {tabs.map((tab) => (
          // <li key={tab.id}>
          <Link
            to={tab.path}
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-all duration-100 ease-in-out",
              activeSection === tab.id
                ? "activeTab"
                : "text-gray-300 hover:text-white hover:bg-white/10"
            )}
          >
            {/* <motion.button
              onClick={() => scrollToSection(tab.id)}
             
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            > */}
            {tab.label}
            {/* </motion.button> */}{" "}
          </Link>
          // </li>
        ))}
        <a
          className={cn(
            "px-4 py-2 rounded-full text-sm transition-all duration-100 ease-in-out text-colorBlueOne"
          )}
          href={resume}
          download="BHAVANA_JAMI_2_YOE_TCS_FRONT_END_DEV.pdf"
          onClick={() => track('Resume_Download')}
        >
          Resume
        </a>
      </ul>
    </div>
  );
};

export default TabsMenu;
