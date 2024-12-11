import React from "react";
import "../App.css";
import cat from "../assets/cat.jpeg"
const Hero = () => {
  return (
    <div className="hero">
      <img src={cat} style={{height:"8rem", width:"9rem", borderRadius:"50%"}}/>
      <p>Hello </p>
      <h1>Bhavana Jami</h1>
      <p>I love to create, develop.</p>
    </div>
  );
};

export default Hero;
