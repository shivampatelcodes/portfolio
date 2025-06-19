/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "../Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-black text-gray-100 overflow-x-hidden">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
