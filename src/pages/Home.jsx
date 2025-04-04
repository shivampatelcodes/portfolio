/* eslint-disable no-unused-vars */
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";

// Eagerly loaded components for critical UI
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";

// Lazy loaded components for better performance
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const BlogPreview = lazy(() => import("../components/BlogPreview"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <BlogPreview />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </Layout>
  );
};

export default Home;
