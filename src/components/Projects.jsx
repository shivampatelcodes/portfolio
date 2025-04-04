/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

// Import your project images
import BlogAppImage from "../assets/BlogApp.png";
import EcommerceAppImage from "../assets/EcommerceApp.png";
import MusicPlayerAppImage from "../assets/MusicPlayerApp.png";
import WeatherAppImage from "../assets/WeatherApp.png";
import InvoiceApp from "../assets/CSharp.png";
import EasyRide from "../assets/Easyride.png";

// This could be moved to a separate data file later
const projects = [
  {
    id: 1,
    title: "EasyRide",
    description:
      "A ride-sharing platform connecting passengers and drivers using React and Firebase.",
    details: `
      <ul>
        <li><strong>User Authentication:</strong> Secure sign-up and login using Firebase Authentication.</li>
        <li><strong>Role-Based Access:</strong> Drivers post trips and manage bookings while passengers search and book rides.</li>
        <li><strong>Profile Management:</strong> Users update profile information to access key features.</li>
        <li><strong>Ride and Booking Management:</strong> Post, search, and book rides with real-time Firestore updates.</li>
        <li><strong>Responsive Design:</strong> Mobile-first design built using Tailwind CSS.</li>
      </ul>
    `,
    image: EasyRide,
    link: "https://easyride-lime.vercel.app/dashboard",
    github: "https://github.com/shivampatelcodes/easyride",
    tags: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Blog App",
    description:
      "A MERN stack blog application with user authentication and CRUD features.",
    details: `
      <ul>
        <li><strong>User Registration and Login:</strong> Secure authentication using JWT. Passwords hashed with bcrypt for enhanced security.</li>
        <li><strong>Profile Management:</strong> Users can upload profile images to Cloudinary during sign-up. An endpoint for retrieving a user's profile and updating it if needed.</li>
        <li><strong>Post Creation and Management:</strong> Create, read, update, and delete (CRUD) posts. Image uploads for posts are handled via Cloudinary.</li>
        <li><strong>Following System:</strong> Users can follow and unfollow others. Retrieve posts from followed users to personalize the feed. Remove followers if needed.</li>
        <li><strong>Search Functionality:</strong> Search for specific users by their username. Retrieve user details and their associated posts.</li>
        <li><strong>Token-Based Authorization:</strong> Protects routes, ensuring only authenticated users can access or modify specific resources.</li>
      </ul>
    `,
    image: BlogAppImage,
    link: "https://blogapp-prodfrontend.vercel.app/",
    github: "https://github.com/shivampatelcodes/blogapp-prod",
    tags: ["MERN", "JWT", "Cloudinary"],
  },
  {
    id: 3,
    title: "E-commerce Product Catalog",
    description: "A dynamic product catalog built with React and Node.js.",
    details:
      "This project showcases a responsive e-commerce interface, allowing users to browse products, view details, and filter items. Data is managed through an Express.js backend and MongoDB database.",
    image: EcommerceAppImage,
    link: "https://shivampatel1.vercel.app/",
    github: "https://github.com/shivampatelcodes/ecommerce",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Online Music Player",
    description: "A music streaming app powered by the Deezer API.",
    details:
      "Users can search for songs, view artist details, and create playlists. The app provides seamless playback and a user-friendly interface. Built using React and integrated with the Deezer API.",
    image: MusicPlayerAppImage,
    link: "https://online-music-preview.netlify.app/",
    github: "#",
    tags: ["React", "Deezer API"],
  },
  {
    id: 5,
    title: "Weather Dashboard Application",
    description: "A weather forecasting app with real-time updates.",
    details:
      "The app provides detailed weather forecasts for multiple locations, including temperature, humidity, and wind speed. Developed with React and OpenWeather API.",
    image: WeatherAppImage,
    link: "https://weather-finder-web.vercel.app/",
    github: "https://github.com/shivampatelcodes/weather-app-v2",
    tags: ["React", "OpenWeather API"],
  },
  {
    id: 6,
    title: "Invoice Management App",
    description: "A C# app for managing invoices and generating reports.",
    details:
      "This application allows users to create, edit, and manage invoices efficiently. It includes features like invoice history, PDF generation, and search functionality. Built with C# and Windows Forms.",
    image: InvoiceApp,
    link: "https://github.com/shivampatelcodes/InvoiceTraker",
    github: "https://github.com/shivampatelcodes/InvoiceTraker",
    tags: ["C#", "Windows Forms"],
  },
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -10 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden"
    >
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex gap-2 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-slate-800/80 text-xs rounded-full text-cyan-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex justify-between items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            onClick={() => onClick(project)}
          >
            Details
          </motion.button>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-800/90 border border-slate-700 rounded-xl p-6 max-w-4xl max-h-[90vh] overflow-auto shadow-2xl shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover object-top rounded-lg mb-6"
        />

        <div className="mb-6">
          <div
            className="text-gray-300 space-y-4"
            dangerouslySetInnerHTML={{ __html: project.details }}
          />
        </div>

        <div className="flex gap-3 justify-end">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors"
          >
            View Code
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [category, setCategory] = useState("all");

  // Filter projects by category (expand this as needed)
  const filteredProjects = projects; // Add filtering logic if you add categories

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my work across web and mobile development. Each
            project represents my approach to problem-solving and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
