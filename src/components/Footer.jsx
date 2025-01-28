import React from "react";
import Socials from "./Socials";

const Footer = () => {
  const year = new Date().getFullYear();
  const handleCopy = () => {
    const email = "bhavanajami111@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy email: " + err);
      });
  };
  return (
    <div>
      <footer className=" text-gray-500 text-left py-4 mt-16">
        <h2 className="text-sm font-bold text-left  mb-5 text-gray-400 ">
          Reach out to me here..
        </h2>
        <Socials />
        <div className="mt-6">
          <span>or</span> <br />
          {/* <span className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851]">
            bhavanajami111@gmail.com
          </span> */}
          <span
            className=" text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#2f3ca9] cursor-pointer"
            onClick={handleCopy}
          >
            bhavanajami111@gmail.com (Click to copy)
          </span>
        </div>
        <p className="mt-8">
          © {year}{" "}
          <a href="https://www.linkedin.com/in/bhavana-jami-47a6081b2/">
            Bhavana Jami
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
