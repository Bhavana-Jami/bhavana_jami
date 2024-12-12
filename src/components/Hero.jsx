import React from "react";
import "../styles/Hero.css";
import Lottie from "lottie-react";
import heroLottie from "../assets/heroLottie.json";
import { Button } from "@/components/ui/button";
import TabsMenu from "./TabsMenu";
import imavailabletowork from "../assets/imavailabletowork.json";
const Hero = () => {
  return (
    // <div className="hero">
    //   {/* <div className="heroLottieContainer"> */}

    //   <Lottie animationData={heroLottie} loop={true} className="heroLottie" />
    //   {/* </div> */}

    //   <span>Hello </span>
    //   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Bhavana Jami</h1>
    //   <p>I love to create, develop beautiful functional websites.</p>
    // </div>
    <main
      className="flex min-h-screen flex-col items-center"
      id="hero"
    >
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
        {/* <div className="relative  "> */}
          {/* <div className="w-70 h-70 rounded-full bg-black blur-3 opacity-3 " /> */}
        

          <Lottie
            animationData={heroLottie}
            loop={true}
            className="heroLottie "
          />
        {/* </div> */}
        {/* <p className="text-lg mb-4">Hello</p> */}
        <div className="absolute  top-30 -right-30 flex items-center">
            <div className="relative">
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rotate-45" />
              {/* <Lottie animationData={imavailabletowork} loop={true}/> */}
              <p className="text-lg bg-blue-500 px-4 py-1 rounded-full text-white">Hello</p>
            </div>
          </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Bhavana Jami
        </h1>
        <p className="text-xl text-center text-muted-foreground max-w-[600px] mb-8">
          I love to create, develop beautiful functional websites.
        </p>
        <TabsMenu />
      </section>
    </main>
  );
};

export default Hero;
