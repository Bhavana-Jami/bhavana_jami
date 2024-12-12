import React from "react";
import "../styles/Hero.css";
import Lottie from "lottie-react";
import heroLottie from "../assets/heroLottie.json";
import { Button } from "@/components/ui/button"
const Hero = () => {
  return (
    <div className="hero">
      {/* <div className="heroLottieContainer"> */}

      <Lottie animationData={heroLottie} loop={true} className="heroLottie" />
      {/* </div> */}

      <span>Hello </span>
      <h1>Bhavana Jami</h1>
      <p>I love to create, develop beautiful functional websites.</p>
    </div>
  );
};

export default Hero;
