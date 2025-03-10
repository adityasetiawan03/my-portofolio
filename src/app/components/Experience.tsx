import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-100 to-gray-300 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-scroll">
        Experience
      </h2>
      <ul className="mt-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 animate-scroll">
        <li className="py-4 border-b">
          <h3 className="font-semibold text-lg text-gray-800">Web Developer PT ABC</h3>
          <p className="text-gray-600">2021 - Present</p>
        </li>
        <li className="py-4">
          <h3 className="font-semibold text-lg text-gray-800">Web Developer PT CBA</h3>
          <p className="text-gray-600">2019 - 2021</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
