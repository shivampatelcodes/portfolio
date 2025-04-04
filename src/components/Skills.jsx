import { LazyLoadComponent } from "react-lazy-load-image-component";
import "animate.css";
import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Add this import
import aspLogo from "../assets/aspnet-svgrepo-com.svg";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        proficiency: 90,
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        proficiency: 85,
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        proficiency: 90,
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        proficiency: 85,
      },
      {
        name: "TailwindCSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        proficiency: 90,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        proficiency: 80,
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        proficiency: 75,
      },
      {
        name: "C#",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        proficiency: 85,
      },
      {
        name: "ASP.NET",
        logo: aspLogo,
        proficiency: 80,
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        proficiency: 70,
      },
    ],
  },
  {
    category: "Database & Tools",
    items: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        proficiency: 85,
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        proficiency: 80,
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        proficiency: 75,
      },
      {
        name: "PowerBI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Power_BI_Logo.svg",
        proficiency: 70,
      },
    ],
  },
  {
    category: "Mobile & Design",
    items: [
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        proficiency: 80,
      },
      {
        name: "UX Design",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        proficiency: 75,
      },
    ],
  },
];

const SkillBar = ({ name, logo, proficiency }) => {
  return (
    <motion.div
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center mb-3">
        <img
          src={logo}
          alt={name}
          className="w-8 h-8 mr-3"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/32";
          }}
        />
        <h3 className="text-lg font-medium text-white">{name}</h3>
      </div>

      <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <div className="mt-1 text-right text-xs text-gray-400">
        {proficiency}%
      </div>
    </motion.div>
  );
};

// Add prop type validation for SkillBar
SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  proficiency: PropTypes.number.isRequired,
};

const SkillCategory = ({ category, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h3 className="text-xl font-bold mb-6 text-cyan-400">{category}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((skill, index) => (
          <SkillBar
            key={index}
            name={skill.name}
            logo={skill.logo}
            proficiency={skill.proficiency}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Add prop type validation for SkillCategory
SkillCategory.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const Skills = () => {
  return (
    <LazyLoadComponent>
      <section
        id="skills"
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
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
                My Skills
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency
              levels across various technologies and tools.
            </p>
          </motion.div>

          <div className="space-y-12">
            {skills.map((skillCategory, index) => (
              <SkillCategory
                key={index}
                category={skillCategory.category}
                items={skillCategory.items}
              />
            ))}
          </div>
        </div>
      </section>
    </LazyLoadComponent>
  );
};

export default Skills;
