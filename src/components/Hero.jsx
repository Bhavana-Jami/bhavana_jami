import React, { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";
import Lottie from "lottie-react";
import heroLottie from "../assets/heroLottie.json";
import imavailabletowork from "../assets/imavailabletowork.json";
import TabsMenu from "./TabsMenu";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <main
      className="flex h-screen flex-col items-center justify-center sm:mx-4"
      id="hero"
    >
      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
        <div className="relative inline-block">
          <Lottie
            animationData={heroLottie}
            loop={true}
            className="heroLottie w-64 h-64"
          />

          <div class="tooltip">Hi, I'm available to work!</div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-800 tracking-wide">
          Bhavana Jami
        </h1>
        <p className="text-xl text-center text-blue-990 max-w-[610px] mb-8 letter tracking-wide leading-8">
          I'm a Frontend Developer with{" "}
          <span className="relative inline-block">
            <span
              className="font-semibold"
              style={{ textShadow: "1px 1px 3px rgba(147, 17, 186, 0.2)",borderBottom:"1px solid #064f63 "}}
            >
              2 years of professional experience
            </span>
            {/* <span className="absolute bottom-0 left-0 w-60 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span> */}
          </span>{" "}
          
          in creating beautiful, functional websites that bring ideas to life.
          &nbsp;{" "}
          <a
            href="#about"
            className="relative inline-block text-white-600 hover:text-purple-800 transition duration-300"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",borderBottom:"1px solid #064f63 " }}
          >
            Know more..
            {/* <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span> */}
          </a>
        </p>
        {/* <Button
          className="bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 text-white"
          asChild
        >
          <a href="#contact">Contact</a>
        </Button> */}
        {/* <div className="w-full max-w-4xl mx-auto"> */}
        <TabsMenu />
        {/* </div> */}
      </section>
    </main>
  );
};

export default Hero;
