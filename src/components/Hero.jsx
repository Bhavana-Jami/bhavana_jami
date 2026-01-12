import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import Lottie from "lottie-react";
import heroLottie from "../assets/heroLottie.json";
import TabsMenu from "./TabsMenu";
import ScrollDownIcon from "./ui/scrolldown";
import { ChevronDown } from "lucide-react";
import Projects from "./Projects";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(1 - scrollPosition / 300, 0);
      setOpacity(newOpacity);
      // setIsVisible(scrollPosition < 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;
  return (
    <main className="flex px-16" id="hero" role="main" aria-label="Hero section">
      <section className=" w-full flex flex-col items-left justify-center">
        <div className="relative inline-block -ms-20 " aria-label="Availability indicator">
          <Lottie
            animationData={heroLottie}
            loop={true}
            className="heroLottie w-auto h-auto"
            aria-label="Animated availability indicator"
          />
          <div
            className="tooltip 
          sm:-ms-2 ms-28 flex items-center justify-center "
            role="status"
            aria-live="polite"
          >
            Hi, I'm available to work!
          </div>
        </div>
        <h1
          id="bhavana_jami"
          className="text-3xl sm:3xl md:text-4xl lg:text-6xl font-bold text-left  mb-4"
        >
          Bhavana Jami
        </h1>
        <p className="text-sm sm:text-xl md:text-lg lg:text-1xl font-semibold text-gray-400 text-left tracking-wide text-wrap max-w-[800px] ">
          ✦ Frontend Engineer ✦ 4 Years Of Professional Experience ✦ Ah, I do
          write at &nbsp;
          <a
            href="https://iambluewonk.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my blog at iambluewonk.com (opens in new tab)"
            style={{
              borderBottom: "1px solid #00c7ff",
              paddingBottom: "0.1rem",
            }}
          >
            iambluewonk.com
          </a>
        </p>

        <p className=" text-gray-400 mt-4 text-sm sm:text-xl md:text-lg lg:text-1xl text-left sm:text-wrap  text-blue-990 max-w-[800px]   tracking-wide leading-6 md:leading-7 lg:leading-8">
          I'm currently working at Tata Consultancy Services as Frontend
          Engineer creating beautiful, functional websites that bring ideas to
          life. Actively exploring GenAI workflows, prompt engineering, and RAG-based systems.
        </p>

        <TabsMenu />
        {/* <Projects/> */}
      </section>
    </main>
  );
};

export default Hero;
