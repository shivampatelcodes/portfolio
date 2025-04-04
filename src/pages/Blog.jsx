/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Build a Full-Stack Blog App',
      excerpt: 'In this post, we’ll walk through the process of creating a full-stack blog app using React and MySQL.',
      link: '#',
    },
    {
      title: 'Understanding Flutter: A Beginner’s Guide',
      excerpt: 'Flutter is a powerful framework for building cross-platform mobile apps. This guide covers the basics of getting started.',
      link: '#',
    },
    {
      title: 'Why I Created My Own Programming Language',
      excerpt: 'Creating a programming language is an exciting and challenging project. In this post, I’ll share my journey and what I learned.',
      link: '#',
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="blog">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href={post.link} className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
