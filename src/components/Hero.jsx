import React from "react";
import "../styles/Hero.css";
import Lottie from "lottie-react";
import heroLottie from "../assets/heroLottie.json";
import TabsMenu from "./TabsMenu";
import ScrollDownIcon from "./ui/scrolldown";

const Hero = () => {
  return (
    <main className="flex  sm:px-20" id="hero">
      <section className="w-full flex flex-col items-left sm:items-center justify-center px-4">
        <div className="relative inline-block text-left  sm:text-center -ms-20 sm:m-0">
          <Lottie
            animationData={heroLottie}
            loop={true}
            className="heroLottie w-auto h-auto"
          />
          <div className="tooltip">Hi, I'm available to work!</div>
        </div>
        <h1
          id="bhavana_jami"
          className="text-3xl sm:3xl md:text-4xl lg:text-6xl font-bold text-left sm:text-center mb-4"
        >
          Bhavana Jami
        </h1>
        <p className="text-left sm:text-center">
          &#8226;Frontend developer&#8226;2 years of professional
          experience&#8226;Some text
        </p>
        <p className="mt-4 text-base sm:text-xl md:text-1xl lg:text-1xl text-left sm:text-wrap sm:text-center  text-blue-990 max-w-[680px] mb-5 md:mb-7 tracking-wide leading-6 md:leading-7 lg:leading-8">
          I'm currently working at Tata Consultancy Services as Frontend
          Developer creating beautiful, functional websites that bring ideas to
          life.
        </p>
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
        
      </section>
    </main>
  );
};

export default Hero;
