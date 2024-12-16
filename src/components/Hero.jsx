import React, { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";
import Lottie from "lottie-react";
import heroLottie from "../assets/heroLottie.json";
import imavailabletowork from "../assets/imavailabletowork.json";
import TabsMenu from "./TabsMenu";
import { motion } from "framer-motion";

const Hero = () => {
  const [showBubble, setShowBubble] = useState(false);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4000); // Delay the bubble appearance by 1 second

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showBubble && bubbleRef.current) {
      bubbleRef.current.play();
    }
  }, [showBubble]);
  const bubbleVariants = {
    hidden: {
      scale: 0.6,
      opacity: 0.5,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeIn",
      },
    },
  };
  return (
    <main
      className="flex h-screen flex-col items-center justify-center"
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Bhavana Jami
        </h1>
        <p className="text-xl text-center text-zinc-100 max-w-[610px] mb-8">
          I'm a Frontend Developer with 2 years of professional experience in
          creating beautiful, functional websites that bring ideas to life.
        </p>
        <TabsMenu />
      </section>
    </main>
  );
};

export default Hero;
