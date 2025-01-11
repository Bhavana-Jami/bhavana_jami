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
// import { Link } from "react-router-dom";

const socialLinks = [
  // {
  //   name: "Twitter",
  //   href: "#",
  //   icon: (props) => (
  //     <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
  //       <path
  //         fill="currentColor"
  //         d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
  //       />
  //     </svg>
  //   ),
  // },
  {
    name: "GitHub",
    href: "#",
    icon: (props) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fill="currentColor"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (props) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fill="currentColor"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        />
      </svg>
    ),
  },
  {
    name: "View",
    href: "#",
    icon: (props) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fill="currentColor"
          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
        />
      </svg>
    ),
  },
  {
    name: "DEV",
    href: "#",
    icon: (props) => (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fill="currentColor"
          d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"
        />
      </svg>
    ),
  },
];
const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const email = "contact@example.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="contact"
      className=" text-zinc-100 flex flex-col px-4"
    >
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full space-y-16">
          {/* Main Contact Section */}
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-left sm:text-center mb-12  text-gray-300">
              Let's connect !
            </h2>

            <div className="space-y-4 text-left sm:text-center">
              <p className="text-base sm:text-xl text-zinc-400 text-left sm:text-center">
                You can reach out to me via this email
              </p>
              <div className="flex justify-left sm:justify-center items-center space-x-2">
                <span className="text-xl sm:text-xl bg-gradient-to-r text-transparent bg-clip-text from-[#1CB5E0] to-[#000851] ">
                  {email}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyEmail}
                    className="text-cyan-400/40 hover:text-purple-700  "
                  >
                    {copied ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <Copy className="h-5 w-5 text-cyan-300 " />
                    )}
                  </Button>
                </span>
              </div>
            </div>
            <div className="flex justify-start sm:justify-center  space-x-4 ">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group"
                  aria-label={link.name}
                >
                  <div className="absolute inset-0 bg-white/5 rounded-lg blur-lg transition-all group-hover:bg-white/10 group-hover:blur-xl" />
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#1CB5E0]/40 to-[#000851]/40 shadow-lg backdrop-blur-sm transition-all group-hover:border-white/20 group-hover:from-white/15 group-hover:to-white/10">
                    <link.icon className="w-6 h-6 text-white/80 transition-colors group-hover:text-white" />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <footer className="py-6 text-left  text-zinc-500 text-sm sm:text-center px-4">
        <p>
          © 2025 <a href="#">Bhavana Jami</a>. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
