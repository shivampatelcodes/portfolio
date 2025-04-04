/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Shivam Patel
            </h3>
            <p className="mb-4">
              Web Developer & AML Analyst based in Kitchener, Ontario.
              Specializing in creating modern, responsive web applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/shivuptl06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-patel-89baa1261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:shivampatelcodes@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "projects", "skills", "about", "blog", "contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="hover:text-white transition-colors cursor-pointer capitalize"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Get In Touch</h3>
            <p className="mb-4">
              Feel free to reach out for collaborations or opportunities. I&apos;m
              always open to discussing new projects.
            </p>
            <a
              href="mailto:shivampatelcodes@gmail.com"
              className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Email Me
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Shivam Patel. All Rights Reserved.
          </p>
          <p className="mt-2">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
