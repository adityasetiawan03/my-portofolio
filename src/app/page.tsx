// src/app/page.tsx
import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;






