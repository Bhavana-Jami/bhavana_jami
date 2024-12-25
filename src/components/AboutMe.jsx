import { motion } from "framer-motion";
import { Code, Palette, Pen } from "lucide-react";

export default function About() {
  return (
    <section
      className="h-screen flex items-center justify-center px-4 sm:px-3 lg:px-8"
      id="about"
    >
      {/* <div className="max-w-6xl mx-auto"> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-1xl shadow-2xl max-w-4xl overflow-hidden h-screen  flex justify-center items-center"
        >
          <div className="p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#00c8ff] mb-4">
              A lil about me
            </h2>
            <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about creating beautiful, functional, and user-centered
              digital experiences. Always learning and exploring new
              technologies to push the boundaries of web development.
            </p>

            <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
              {/* Designer Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00c8ff]/10 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-[#00c8ff]" />

                  </div>
                  <h3 className="text-lg font-semibold text-white">Work Experience</h3>
                </div>
                <p className="text-sm text-gray-400">
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <h4 className="text-[#00c8ff] font-medium mb-1">
                      Things I enjoy designing:
                    </h4>
                    <p className="text-gray-400">UX, UI, Web, Apps, Logos</p>
                  </div>
                  <div>
                    <h4 className="text-[#00c8ff] font-medium mb-1">
                      Design Tools:
                    </h4>
                    <p className="text-gray-400">
                      Figma, Sketch, Photoshop, Illustrator
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="hidden lg:block w-px bg-gray-800"></div>

              {/* Frontend Developer Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-1 space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#00c8ff]/10 rounded-full flex items-center justify-center">
                  <Pen className="w-6 h-6 text-[#00c8ff]" />

                  </div>

                  <h3 className="text-lg font-semibold text-white">
                   I like to write
                  </h3>
                </div>
                <p className="text-sm text-gray-400">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <h4 className="text-[#00c8ff] font-medium mb-1">
                      Languages I speak:
                    </h4>
                    <p className="text-gray-400">
                      HTML, CSS, JavaScript, React, TypeScript
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#00c8ff] font-medium mb-1">
                      Dev Tools:
                    </h4>
                    <p className="text-gray-400">
                      VS Code, Git, GitHub, Terminal
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      {/* </div> */}
    </section>
  );
}
