import { LazyLoadComponent } from 'react-lazy-load-image-component';

const About = () => {
  return (
    <LazyLoadComponent>
      <section className="py-16 bg-gray-100 w-screen" id="about">
        <div className="container mx-auto text-center w-full">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-6">
            I’m Shivam Patel, a passionate developer based in Kitchener, ON, specializing in web and mobile app development. With a strong foundation in both frontend and backend technologies, I build responsive, user-friendly applications using React, TailwindCSS, and Flutter. My focus is on delivering innovative solutions that solve real-world problems while maintaining high standards of quality and performance.
          </p>
          <p className="max-w-3xl mx-auto text-gray-700 mb-6">
            I have experience working with a wide range of technologies, including HTML, CSS, JavaScript, C#, SQL, React.js, Node.js, and Express.js. I&apos;m also proficient in building scalable mobile applications with Flutter and have worked on full-stack projects that integrate cloud services and databases like MongoDB and SQL Server.
          </p>
        </div>
      </section>
    </LazyLoadComponent>
  );
};

export default About;
