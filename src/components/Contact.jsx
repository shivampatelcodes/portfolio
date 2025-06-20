/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error on field change
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission - replace with your actual form handling code
    try {
      // Replace with actual form submission code
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      {/* Subtle star background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/5 left-1/8 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/5 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-3/5 left-3/4 w-1 h-1 bg-blue-200 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/8 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or opportunities. I&apos;m
            always open to discussing new projects, ideas, or opportunities.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-yellow-400 mb-2 font-medium">Email</h4>
                  <a
                    href="mailto:shivampatelcodes@gmail.com"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    shivampatelcodes@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-yellow-400 mb-2 font-medium">Location</h4>
                  <p className="text-gray-200">Kitchener, Ontario, Canada</p>
                </div>

                <div>
                  <h4 className="text-yellow-400 mb-2 font-medium">
                    Social Media
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/shivuptl06"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shivam-patel-89baa1261/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white border ${
                    formErrors.name ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:border-yellow-400`}
                  placeholder="Your name"
                />
                {formErrors.name && (
                  <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white border ${
                    formErrors.email ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:border-yellow-400`}
                  placeholder="Your email"
                />
                {formErrors.email && (
                  <p className="mt-1 text-red-500 text-sm">
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800 text-white border ${
                    formErrors.message ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:border-yellow-400`}
                  placeholder="Your message"
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-red-500 text-sm">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg text-black font-medium transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:shadow-lg hover:shadow-yellow-400/25"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus && (
                <div
                  className={`mt-4 p-3 rounded-lg ${
                    submitStatus.success
                      ? "bg-green-500/20 text-green-300"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
