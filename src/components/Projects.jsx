import { useState } from "react";
import "animate.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import BlogAppImage from "../assets/BlogApp.png";
import EcommerceAppImage from "../assets/EcommerceApp.png";
import MusicPlayerAppImage from "../assets/MusicPlayerApp.png";
import WeatherAppImage from "../assets/WeatherApp.png";
import InvoiceApp from "../assets/CSharp.png";

const projects = [
  {
    title: "Blog App",
    description:
      "A MERN stack blog application with user authentication and CRUD features.",
    details:
      "This app includes user authentication, a dashboard to manage blogs, and a clean UI. Users can create, edit, delete, and view blogs. Built with MongoDB, Express.js, React.js, and Node.js.",
    image: BlogAppImage,
    link: "https://github.com/shivampatelcodes/blog-app",
    github: "https://github.com/shivampatelcodes/blog-app",
  },
  {
    title: "E-commerce Product Catalog",
    description: "A dynamic product catalog built with React and Node.js.",
    details:
      "This project showcases a responsive e-commerce interface, allowing users to browse products, view details, and filter items. Data is managed through an Express.js backend and MongoDB database.",
    image: EcommerceAppImage,
    link: "https://github.com/shivampatelcodes/ecommerce-app",
    github: "https://github.com/shivampatelcodes/ecommerce-app",
  },
  {
    title: "Online Music Player",
    description: "A music streaming app powered by the Deezer API.",
    details:
      "Users can search for songs, view artist details, and create playlists. The app provides seamless playback and a user-friendly interface. Built using React and integrated with the Deezer API.",
    image: MusicPlayerAppImage,
    link: "https://github.com/shivampatelcodes/music-player",
    github: "https://github.com/shivampatelcodes/music-player",
  },
  {
    title: "Weather Dashboard Application",
    description: "A weather forecasting app with real-time updates.",
    details:
      "The app provides detailed weather forecasts for multiple locations, including temperature, humidity, and wind speed. Developed with React and OpenWeather API.",
    image: WeatherAppImage,
    link: "https://github.com/shivampatelcodes/weather-dashboard",
    github: "https://github.com/shivampatelcodes/weather-dashboard",
  },
  {
    title: "Invoice Management App",
    description: "A C# app for managing invoices and generating reports.",
    details:
      "This application allows users to create, edit, and manage invoices efficiently. It includes features like invoice history, PDF generation, and search functionality. Built with C# and Windows Forms.",
    image: InvoiceApp,
    link: "https://github.com/shivampatelcodes/invoice-app",
    github: "https://github.com/shivampatelcodes/invoice-app",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      className="py-16 bg-gray-100 animate__animated animate__fadeIn"
      id="projects"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <LazyLoadComponent key={index}>
              <div className="relative group bg-white shadow-md rounded-lg overflow-hidden p-6 max-w-[90%] mx-auto transition-transform duration-300 transform hover:scale-105">
                {/* Yellow diagonal background on hover */}
                <div className="absolute inset-0 z-0 bg-yellow-400 transform origin-top-left -rotate-45 scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <h3 className="text-2xl font-semibold mb-2 text-black">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => setSelectedProject(project)}
                    >
                      Read More
                    </button>
                    <a
                      href={project.link}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </LazyLoadComponent>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-screen overflow-auto relative mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full md:w-1/2 h-auto rounded-lg"
              />
              {/* Description */}
              <div className="md:ml-6 text-left md:w-1/2 overflow-y-auto max-h-96">
                <h3 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <div
                  className="text-gray-700 text-lg mb-6"
                  dangerouslySetInnerHTML={{ __html: selectedProject.details }}
                />
              </div>
            </div>
            {/* Links */}
            <div className="flex justify-between items-center mt-6">
              <a
                href={selectedProject.github}
                className="text-blue-500 text-lg hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Code
              </a>
              <a
                href={selectedProject.link}
                className="text-blue-500 text-lg hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
