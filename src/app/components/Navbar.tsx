import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <a href="#portfolio" className="text-blue-500 hover:text-blue-700 transition">Portfolio</a>
          </li>
          <li>
            <a href="#about" className="text-blue-500 hover:text-blue-700 transition">About Me</a>
          </li>
          <li>
            <a href="#skills" className="text-blue-500 hover:text-blue-700 transition">Skills</a>
          </li>
          <li>
            <a href="#experience" className="text-blue-500 hover:text-blue-700 transition">Experience</a>
          </li>
          <li>
            <a href="#testimonial" className="text-blue-500 hover:text-blue-700 transition">Testimonial</a>
          </li>
          <li>
            <a href="#contact" className="text-blue-500 hover:text-blue-700 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;