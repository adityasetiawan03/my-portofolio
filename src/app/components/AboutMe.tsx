'use client'
import React, { useEffect } from 'react';

const AboutMe: React.FC = () => {
  useEffect(() => {
    // Trigger the animation by adding a class
    const animateElements = document.querySelectorAll('.animate-on-load');
    animateElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fade-in');
      }, index * 300); // Adding delay for each element
    });
  }, []); // Empty dependency array to run on mount

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row px-6 py-16">
        {/* Image Section (left) */}
        <div className="lg:w-1/3 mb-6 lg:mb-0 flex justify-center">
          <img
            src="https://st4.depositphotos.com/8885510/23745/i/450/depositphotos_237451860-stock-photo-a-businessman-stands-in-the.jpg"
            alt="Aditya Setiawan"
            className="max-w-full rounded-lg shadow-2xl animate-on-load"
          />
        </div>

        {/* Text Section (right) */}
        <div className="lg:w-2/3 lg:ml-10 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-on-load">
            About Me
          </h1>
          <p className="text-lg text-gray-700 mb-6 animate-on-load">
            I am a passionate full-stack web developer with extensive experience in building dynamic and scalable web applications. My expertise spans both frontend and backend development, allowing me to craft seamless user experiences while implementing robust server-side solutions. I am proficient in modern frameworks, libraries, and technologies that ensure high-performance applications. With a strong commitment to continuous learning, I stay updated with the latest trends in web development to create innovative solutions that meet client needs and exceed expectations. I am dedicated to delivering high-quality results, collaborating effectively with teams, and building applications that provide lasting value.
          </p>
          <button className="btn btn-primary text-white px-6 py-3 rounded-full hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

