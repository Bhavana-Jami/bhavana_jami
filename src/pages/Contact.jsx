import React, { useState } from "react";
import {
  Mail,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Copy,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import "../styles/Contact.css";
import Socials from "../components/Socials";

const ContactPage = () => {
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
    <div
      id="contact"
      className=" text-zinc-100 flex flex-col sm:px-20 px-7 items-start"
    >
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl w-full space-y-16">
          {/* Main Contact Section */}
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-left mb-8  text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851]">
              Let's connect !
            </h2>

            <div className="space-y-2 text-left ">
              <p className="text-base sm:text-xl text-zinc-400 text-left">
                You can reach out to me via this email
              </p>
              <div className="flex justify-left  items-center space-x-2">
                <span
                  className="mt-2 text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#2f3ca9] cursor-pointer"
                  onClick={handleCopy}
                >
                  bhavanajami111@gmail.com <span className="text-xs">(Click to copy)</span>
                </span>
              </div>
            </div>
            <Socials />
          </motion.div>
        </div>
      </main>
      <footer className="py-6 pt-28 text-left  text-zinc-500 text-sm sm:text-center">
        <p>
          © 2025{" "}
          <a href="https://www.linkedin.com/in/bhavana-jami-47a6081b2/">
            Bhavana Jami
          </a>
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
