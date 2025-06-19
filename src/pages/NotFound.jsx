// import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">404</h1>
        <p className="text-xl text-gray-700 mb-4">Page Not Found</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
