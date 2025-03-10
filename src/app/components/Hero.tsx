import React from 'react';
import Navbar from './Navbar';

const Hero: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section
        className="flex items-center justify-center h-screen bg-cover bg-center text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://s3-cdn.cmlabs.co/page/2023/10/04/web-developer-pengertian-tugas-skill-dan-contohnya-295345.png')",
        }}
      >
        {/* Moving text */}
        <div className="absolute bottom-10 text-4xl font-bold animate-scroll-text">
          Welcome to the Future of Web Development!
        </div>
      </section>
    </div>
  );
};

export default Hero;
