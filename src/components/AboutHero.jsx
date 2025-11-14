import React from 'react';
import AboutHeroImage from '../assets/about-us-hero.png';

const AboutHero = () => {
  return (
    <section className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left">
          <h2 className="text-sm font-bold text-blue-500 uppercase mb-2">Welcome to Buildlinks</h2>
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Where Our links</h3>
          <p className="text-gray-600 mb-8 max-w-lg">
            Certified builders, plumbers, and electricians across Zimbabwe — compare, connect, and hire with confidence.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 font-semibold">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={AboutHeroImage} alt="Worker" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
