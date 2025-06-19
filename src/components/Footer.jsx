/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 relative">
      {/* Subtle star background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/6 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-2/3 left-3/4 w-1 h-1 bg-blue-200 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/8 right-1/2 w-0.5 h-0.5 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent mb-4">
              Shivam Patel
            </h3>
            <p className="mb-4 text-gray-200">
              Web Developer & AML Analyst based in Kitchener, Ontario.
              Specializing in creating modern, responsive web applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/shivuptl06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-patel-89baa1261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:shivampatelcodes@gmail.com"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "hero",
                "about",
                "experience",
                "skills",
                "projects",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="hover:text-yellow-400 transition-colors cursor-pointer capitalize"
                  >
                    {item === "hero" ? "home" : item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Get In Touch</h3>
            <p className="mb-4 text-gray-200">
              Feel free to reach out for collaborations or opportunities.
              I&apos;m always open to discussing new projects.
            </p>
            <a
              href="mailto:shivampatelcodes@gmail.com"
              className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
            >
              Email Me
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Shivam Patel. All Rights Reserved.
          </p>
          <p className="mt-2 text-gray-400">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
