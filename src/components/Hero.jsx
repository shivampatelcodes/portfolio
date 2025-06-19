import { motion } from "framer-motion";
import Resume from "../assets/My Resume.pdf";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-2/3 left-1/2 w-40 h-40 bg-pink-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Hi, I&apos;m</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Shivam Patel
            </span>
          </h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Web Developer | Aspiring AML Analyst | Tech Enthusiast
            <span className="block mt-3 text-lg">
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
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-gray-500 text-gray-300 hover:text-white hover:border-white transition-all duration-300"
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
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl backdrop-blur-sm border border-white/10 p-6 shadow-xl">
              <pre className="text-sm text-gray-300 font-mono">
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
          className="flex flex-col items-center text-gray-400 hover:text-white"
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
