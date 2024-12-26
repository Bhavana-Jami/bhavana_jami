import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import Lottie from "lottie-react";
import heroLottie from "../assets/heroLottie.json";
import TabsMenu from "./TabsMenu";
import ScrollDownIcon from "./ui/scrolldown";
import { ChevronDown } from "lucide-react";
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
    <main className="flex px-4 sm:px-20 " id="hero">
      <section className=" w-full flex flex-col items-left sm:items-center justify-center px-4">
        <div className="relative inline-block text-left  sm:text-center -ms-20 sm:m-0">
          <Lottie
            animationData={heroLottie}
            loop={true}
            className="heroLottie w-auto h-auto"
          />
          <div className="tooltip -ms-24 sm:m-0">
            Hi, I'm available to work!
          </div>
        </div>
        <h1
          id="bhavana_jami"
          className="text-3xl sm:3xl md:text-4xl lg:text-6xl font-bold text-left sm:text-center mb-4"
        >
          Bhavana Jami
        </h1>
        <p className="text-base font-semibold text-gray-400 text-left sm:text-center tracking-wide text-wrap">
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

        <p className=" text-gray-400 mt-4 text-sm sm:text-xl md:text-lg lg:text-1xl text-left sm:text-wrap sm:text-center  text-blue-990 max-w-[690px] mb-5 md:mb-7 tracking-wide leading-6 md:leading-7 lg:leading-8">
          I'm currently working at Tata Consultancy Services as Frontend
          Developer creating beautiful, functional websites that bring ideas to
          life.
        </p>
        {/* <p className="text-left sm:text-center flex sm:hidden">
          ✦ Ah, I do write at &nbsp;
          <a
            href="#"
            style={{
              borderBottom: "1px solid #00c7ff",
              paddingBottom: "0.1rem",
            }}
          >
            iambluewonk.com
          </a>
        </p> */}
        {/* <a
          href="#about"
          className="relative inline-block text-colorBlueOne/90 hover:text-colorBlueOne transition duration-300 p-3 ps-4 pe-4 hover:bg-colorBlueOne/20"
          style={{
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
            fontWeight: "500",
            border: "0.8px solid #00c7ff",
            borderRadius: "1.8rem",
          }}
        >
          Know more..
          <span
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            style={{
              width: "70%",
              borderBottom: "1px dotted var(--blueColorPrimary)",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </a> */}
        <TabsMenu />
        <div className="fixed  hidden sm:flex bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
          <ChevronDown
            size={32}
            style={{ opacity }}
            className="text-sky-500/30"
          />
          <ChevronDown
            size={24}
            style={{ opacity }}
            className="text-sky-500/50  -mt-3"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
