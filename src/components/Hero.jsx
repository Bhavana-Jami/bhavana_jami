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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;
  return (
    <main className="flex sm:px-20 px-7 " id="hero">
      <section className=" w-full flex flex-col items-left justify-center">
        <div className="relative inline-block -ms-20 ">
          <Lottie
            animationData={heroLottie}
            loop={true}
            className="heroLottie w-auto h-auto"
          />
          <div
            className="tooltip 
          sm:-ms-2 ms-28 flex items-center justify-center "
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
          ✦ Frontend developer ✦ 2 years of professional experience ✦ Ah, I do
          write at &nbsp;
          <a
            href="#"
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
          Developer creating beautiful, functional websites that bring ideas to
          life.
        </p>

        <TabsMenu />
        {/* <Projects/> */}
      </section>
    </main>
  );
};

export default Hero;
