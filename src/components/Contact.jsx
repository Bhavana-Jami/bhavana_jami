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

const SocialLink = ({ icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-800"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

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
      className="min-h-screen  text-zinc-100 flex flex-col"
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
            <h1 className="text-2xl sm:text-5xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Let's connect
            </h1>

            <div className="space-y-4">
              <p className="text-base sm:text-xl text-zinc-400">
                You can reach out to me via this email
              </p>
              <div className="flex justify-center items-center space-x-2">
                <span className="text-xl sm:text-xl text-purple-800">
                  {email}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyEmail}
                    className="text-purple-700 hover:text-purple-700 "
                  >
                    {copied ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </Button>
                </span>
              </div>
            </div>
            <div className="text-2xl font-semibold  bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">My Socials</div>
            <div className="flex justify-center space-x-4">
              <SocialLink icon={<Github />} href="https://github.com" />
              <SocialLink icon={<Youtube />} href="https://youtube.com" />
              <SocialLink icon={<Linkedin />} href="https://linkedin.com" />
              <SocialLink icon={<Instagram />} href="https://instagram.com" />
            </div>
          </motion.div>
        </div>
      </main>
      <footer className="py-6 text-center text-zinc-500 text-sm">
        <p>© 2023 <a href="#">Bhavana Jami</a>. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
