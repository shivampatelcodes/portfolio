import { motion } from "framer-motion";
import Resume from "../assets/My Resume.pdf";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Starry background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Large stars */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-100 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-200 rounded-full animate-pulse"></div>

        {/* Medium stars */}
        <div
          className="absolute top-1/5 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/5 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/2 right-1/5 w-1 h-1 bg-yellow-100 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/6 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Small stars scattered */}
        <div
          className="absolute top-1/8 left-1/6 w-0.5 h-0.5 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-2/5 left-2/3 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-1/5 left-2/5 w-0.5 h-0.5 bg-yellow-200 rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-3/5 right-1/6 w-0.5 h-0.5 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute bottom-2/3 right-2/5 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse"
          style={{ animationDelay: "3.5s" }}
        ></div>

        {/* Twinkling effect overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-1/12 left-1/8 w-px h-px bg-white rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/8 w-px h-px bg-yellow-300 rounded-full animate-ping"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-3/4 w-px h-px bg-blue-200 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/12 w-px h-px bg-white rounded-full animate-ping"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="block text-white">Hi, I&apos;m</span>
            <span className="bg-gradient-to-r from-yellow-400 via-white to-blue-300 bg-clip-text text-transparent">
              Shivam Patel
            </span>
          </h1>

          <motion.p
            className="text-xl text-gray-200 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Web Developer | Aspiring AML Analyst | Tech Enthusiast
            <span className="block mt-3 text-lg text-gray-300">
              Building modern digital experiences with clean, efficient code.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href={Resume}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-gray-400 text-gray-200 hover:text-white hover:border-white transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden md:block md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Hero illustration or animated code snippet here */}
          <div className="relative w-full h-80">
            <div className="absolute inset-0 bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-600/30 p-6 shadow-xl">
              <pre className="text-sm text-gray-200 font-mono">
                <code>
                  {`const developer = {
  name: "Shivam Patel",
  skills: ["React", "Node.js", "Flutter", "TailwindCSS"],
  passion: "Building beautiful, functional web apps",
  current: "Looking for exciting opportunities",
};

// Let's connect and build something amazing together!`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-300 hover:text-white"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
