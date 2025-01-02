import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'animate.css';

const Footer = () => {
  return (
    <LazyLoadComponent>
      <footer className="bg-gray-800 text-white py-4 animate__animated animate__fadeIn">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Shivam Patel. All Rights Reserved.</p>
        </div>
      </footer>
    </LazyLoadComponent>
  );
};

export default Footer;
