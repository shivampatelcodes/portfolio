import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Sample blog post data - could be moved to a data file later
const blogPosts = [
  {
    id: 1,
    title: "How to Build a Full-Stack Blog App",
    excerpt:
      "In this post, we'll walk through the process of creating a full-stack blog app using React and MySQL, focusing on key architectural decisions.",
    date: "April 1, 2025",
    category: "Web Development",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "Understanding Flutter: A Beginner's Guide",
    excerpt:
      "Flutter is a powerful framework for building cross-platform mobile apps. This guide covers the basics of getting started and best practices.",
    date: "March 25, 2025",
    category: "Mobile Development",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Why I Created My Own Programming Language",
    excerpt:
      "Creating a programming language is an exciting and challenging project. In this post, I'll share my journey and what I learned along the way.",
    date: "March 15, 2025",
    category: "Programming",
    image: "https://via.placeholder.com/600x400",
  },
];

const BlogPost = ({ post }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-semibold px-3 py-1 m-2 rounded-full">
          {post.category}
        </div>
      </div>

      <div className="p-6">
        <div className="text-gray-400 text-sm mb-2">{post.date}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

        <Link
          to="/blog"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
        >
          Read More
          <svg
            className="ml-2 w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

BlogPost.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

const BlogPreview = () => {
  return (
    <section
      id="blog"
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
              Latest Blog Posts
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, mobile apps,
            and programming.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.05 }} className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            View All Posts
            <svg
              className="ml-2 w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
