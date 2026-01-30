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
import { useLocation } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Footer from "../components/Footer";
const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  const isContactPage = path === "/contact";
  const styleContactPage = isContactPage ? "min-h-screen p-8 max-w-5xl mx-auto text-white py-10 sm:px-6 lg:px-8 " : "text-zinc-100 min-h-screen flex flex-col items-start justify-center sm:px-20 px-7 py-16";
  const handleCopy = () => {
    const email = "bhavana.jami9542@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email:", err);
      });
  };

  if (isContactPage) {
    return (
      <article className="min-h-screen p-8 max-w-5xl mx-auto text-white py-10 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="space-y-4">
          <BreadCrum levelOne="Contact" pathHome="/" />
          <h1 className="text-3xl font-bold text-left mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851]">
            Let's connect !
          </h1>
          <p
            className="text-gray-400 text-lg pb-3 border-gray-800"
            style={{ borderBottom: "1px solid #2f393f" }}
          >
            {/* I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. */}
          </p>
        </header>

        {/* Main Content */}
        <div className="mt-12 space-y-8">
          {/* Email Section */}
          <div className="backdrop-blur border-none">
            <h3 className="text-xl font-bold text-left mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851]">
              Get in touch
            </h3>
            <div className="space-y-4 max-w-3xl">
              <p className="text-gray-300 leading-relaxed text-xl">
                You can reach out to me via email or connect with me on social media.
              </p>
              <div className="border-l-2 border-[#1CB5E0] pl-4 mt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-[#1CB5E0]" />
                  <h4 className="text-lg font-medium text-white">Email</h4>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#2f3ca9] hover:from-[#2dd4f0] hover:to-[#3d4bc9] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1CB5E0] focus:ring-offset-2 focus:ring-offset-black rounded px-2 -ml-2"
                    aria-label={`Copy email address ${copied ? 'copied' : ''}`}
                  >
                    bhavana.jami9542@gmail.com
                  </button>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded border transition-all duration-200 text-sm ${copied
                        ? 'bg-green-500/20 border-green-500/50 text-green-400'
                        : 'bg-[#1CB5E0]/10 border-[#1CB5E0]/30 text-[#1CB5E0] hover:bg-[#1CB5E0]/20 hover:border-[#1CB5E0]/50'
                      }`}
                    aria-label="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Social Media Section */}
          {/* <div className="backdrop-blur border-none">
            <h3 className="text-xl font-bold text-left mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851]">
              Connect on social media
            </h3>
            <p className="text-gray-300 leading-relaxed text-xl max-w-3xl mb-6">
              You can also find me on these platforms.
            </p>
            <div className="flex justify-start">
              <Socials />
            </div>
          </div> */}
        </div>

        <Footer />
      </article>
    );
  } else {
    return (
      <section
        id="contact"
        className={styleContactPage}
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl w-full">
          {/* Main Contact Section */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Heading */}
            <div className="text-center">
              <h2 id="contact-heading" className="text-3xl font-bold text-left  mb-12  text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#000851] ">
                Let's connect !
              </h2>
              {/* <p className="text-base sm:text-lg text-zinc-400 mt-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p> */}
            </div>

            {/* Email Card */}
            {/* <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            > */}
              {/* <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 sm:p-10 hover:border-[#1CB5E0]/50 transition-all duration-300"> */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1CB5E0]/5 to-[#000851]/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[#1CB5E0]/20 to-[#000851]/20 border border-[#1CB5E0]/30">
                      <Mail className="w-6 h-6 text-[#1CB5E0]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-sm text-zinc-400">Drop me a line anytime</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg bg-black/40 border border-gray-800/50">
                    <div className="flex-1">
                      <p className="text-sm text-zinc-400 mb-2">Email address</p>
                      <button
                        type="button"
                        className="text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#1CB5E0] to-[#2f3ca9] hover:from-[#2dd4f0] hover:to-[#3d4bc9] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1CB5E0] focus:ring-offset-2 focus:ring-offset-black rounded px-2 -ml-2"
                        onClick={handleCopy}
                        aria-label={`Copy email address ${copied ? 'copied' : ''}`}
                      >
                        bhavana.jami9542@gmail.com
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${copied
                          ? 'bg-green-500/20 border-green-500/50 text-green-400'
                          : 'bg-[#1CB5E0]/10 border-[#1CB5E0]/30 text-[#1CB5E0] hover:bg-[#1CB5E0]/20 hover:border-[#1CB5E0]/50'
                        }`}
                      aria-label="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-sm font-medium">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm font-medium">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              {/* </div> */}
            {/* </motion.div> */}

            {/* Social Links */}
            <motion.div
              className="text-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-sm text-zinc-500 mb-6">Or connect with me on</p>
              <div className="flex justify-start">
                <Socials />
              </div>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            className="mt-20 pt-8 border-t border-gray-800 text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-zinc-500 text-sm">
              © 2026{" "}
              <a
                href="https://www.linkedin.com/in/bhavana-jami-47a6081b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1CB5E0] hover:text-[#2dd4f0] transition-colors duration-200"
                aria-label="Visit Bhavana Jami's LinkedIn profile (opens in new tab)"
              >
                Bhavana Jami
              </a>
              . All rights reserved.
            </p>
          </motion.footer>
        </div>
      </section>
    );
  }
};

export default ContactPage;
