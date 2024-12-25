import React from "react";
import "../styles/Hero.css";
import Lottie from "lottie-react";
import heroLottie from "../assets/heroLottie.json";
import TabsMenu from "./TabsMenu";

const Hero = () => {
  return (
    <main
      className="flex h-screen flex-col items-center justify-center "
      id="hero"
    >
      <section className="w-full flex flex-col items-center justify-center px-4">
        <div className="relative inline-block">
          <Lottie
            animationData={heroLottie}
            loop={true}
            className="heroLottie w-64 h-64"
          />
          <div className="tooltip">Hi, I'm available to work!</div>
        </div>
        <h1
          id="bhavana_jami"
          className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-4"
        >
          Bhavana Jami
        </h1>
        <p className="text-base sm:text-xl md:text-1xl lg:text-1xl text-center text-blue-990 max-w-[680px] mb-5 md:mb-7 tracking-wide leading-6 md:leading-7 lg:leading-8">
          I'm a Frontend Developer with{" "}
          <span className="relative inline-block">
            <span
              className=""
              style={{
                textShadow: " 0 0 8px #1d93b4",
              }}
            >
              2 years of professional experience
            </span>
          </span>{" "}
          in creating beautiful, functional websites that bring ideas to life.
          &nbsp;
          <a
            href="#about"
            className="relative inline-block text-colorBlueOne/90 hover:text-colorBlueOne transition duration-300"
            style={{
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
              fontWeight: "500",
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
          </a>
        </p>
        <TabsMenu />
      </section>
    </main>
  );
};

export default Hero;
