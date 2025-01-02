import { LazyLoadComponent } from "react-lazy-load-image-component";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "animate.css";

const Contact = () => {
  return (
    <LazyLoadComponent>
      <section className="py-16 animate__animated animate__fadeIn" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="mb-4">
            Feel free to reach out for collaborations or opportunities.
          </p>
          <a
            href="mailto:shivampatelcodes@gmail.com"
            className="text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 mb-4 inline-block"
          >
            Email Me
          </a>
          <div className="mt-6 flex justify-center space-x-6">
            <a
              href="https://github.com/shivuptl06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-patel-89baa1261/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </section>
    </LazyLoadComponent>
  );
};

export default Contact;
