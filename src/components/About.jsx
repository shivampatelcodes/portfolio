import { motion } from "framer-motion";

const About = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUpVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Profile image or illustration could go here */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-2xl border-4 border-slate-700 shadow-xl shadow-cyan-500/10">
                {/* Replace with your own image */}
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Shivam Patel
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                I&apos;m a passionate developer based in Kitchener, ON, specializing
                in web and mobile app development. With a strong foundation in
                both frontend and backend technologies, I build responsive,
                user-friendly applications using React, TailwindCSS, and
                Flutter.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                My focus is on delivering innovative solutions that solve
                real-world problems while maintaining high standards of quality
                and performance. I have experience working with a wide range of
                technologies, including HTML, CSS, JavaScript, C#, SQL,
                React.js, Node.js, and Express.js.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-slate-800 rounded-full text-cyan-400 text-sm">
                  Problem Solver
                </div>
                <div className="px-4 py-2 bg-slate-800 rounded-full text-cyan-400 text-sm">
                  Full-Stack Developer
                </div>
                <div className="px-4 py-2 bg-slate-800 rounded-full text-cyan-400 text-sm">
                  UI/UX Enthusiast
                </div>
                <div className="px-4 py-2 bg-slate-800 rounded-full text-cyan-400 text-sm">
                  Continuous Learner
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
