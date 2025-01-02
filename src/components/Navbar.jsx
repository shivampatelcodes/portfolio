import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full z-10 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-300 drop-shadow-md">
          Shivam Patel
        </h1>
        <div className="hidden md:flex space-x-6 text-gray-600 drop-shadow-md">
          <button
            onClick={scrollToTop}
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </button>
          <a
            href="#projects"
            className="hover:text-yellow-300 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-300 transition duration-300"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg p-4 text-white">
          <button
            onClick={scrollToTop}
            className="block py-2 hover:text-yellow-300 transition duration-300"
          >
            Home
          </button>
          <a
            href="#projects"
            className="block py-2 hover:text-yellow-300 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-yellow-300 transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
