import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    position: "Junior Web Developer",
    company: "NetSol Technologies",
    location: "Surat, IN",
    duration: "02/2022 - 07/2023",
    description: [
      "Designed and developed responsive user interfaces using HTML5, CSS3, JavaScript, and React.js in alignment with project requirements.",
      "Collaborated with cross-functional teams including UI/UX designers and backend developers to deliver high-quality web solutions.",
      "Improved front-end performance by optimizing assets and code structure, reducing load time by approximately 35%.",
      "Integrated RESTful APIs to connect front-end components with server-side logic and external data sources.",
      "Maintained and updated existing web applications, resolving bugs and implementing enhancements to improve user experience.",
      "Followed agile development practices and participated in daily standups, sprint planning, and retrospectives.",
      "Utilized Git for version control and collaborated via GitHub, contributing to team workflows and pull requests.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "RESTful APIs",
      "Git",
      "GitHub",
      "Agile",
    ],
  },
];

import PropTypes from "prop-types";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
    >
      {/* Timeline dot */}
      <div className="absolute -left-3 top-8 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-900"></div>

      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-1">
          {experience.position}
        </h3>
        <h4 className="text-lg font-semibold text-cyan-400 mb-1">
          {experience.company}
        </h4>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {experience.location}
          </span>
          <span className="hidden sm:block">•</span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {experience.duration}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <ul className="space-y-2">
          {experience.description.map((point, idx) => (
            <li key={idx} className="text-gray-300 flex items-start">
              <span className="text-cyan-400 mr-2 mt-1.5 text-xs">▸</span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
    >
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
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in web development, showcasing the skills
            and experience I&apos;ve gained along the way.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

          <div className="space-y-8 ml-9">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Experience;

