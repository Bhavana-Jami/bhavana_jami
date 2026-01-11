import React from "react";
import Socials from "./Socials";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-16 pt-8 border-t border-gray-800 text-left"
      role="contentinfo"
      style={{ borderTop: "1px solid #2f393f" }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-gray-500 text-sm  mb-4">
              <p>
                © {year}{" "}
                <a
                  href="https://www.linkedin.com/in/bhavanajami/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1CB5E0] hover:text-[#2dd4f0] transition-colors duration-200 "
                  aria-label="Visit Bhavana Jami's LinkedIn profile (opens in new tab)"
                >
                  Bhavana Jami
                </a>
                . All rights reserved.
              </p>
            </div>
            <Socials />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
