import React from 'react';
import { FiSearch, FiMapPin, FiChevronDown } from 'react-icons/fi';

// Using the local asset for the hero background
import ServicesHeroImage from '../assets/service-hero.jpg';

const ServicesHero = () => {
  // Data for category buttons for easier management
  const categories = ['All', 'Builders', 'Plumber', 'Electrician', 'Company', 'Freelancer'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  return (
    <div
      className="bg-cover bg-center min-h-screen relative"
      style={{ backgroundImage: `url(${ServicesHeroImage})` }}
    >
      {/* Improved overlay for better text contrast and visual depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

      {/* Wrapper to manage layout changes between mobile and desktop */}
      <div className="relative z-10 flex flex-col min-h-screen md:justify-center">
        {/* Main content container */}
        {/* On mobile, it grows to fill space, pushing the search bar down. */}
        {/* On desktop, it uses padding-bottom to make space for the absolute search bar. */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center md:items-start relative text-white pt-24 flex-grow md:flex-grow-0 md:pb-48">
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold uppercase mb-2 text-gray-300 tracking-widest">
              Welcome to Buildlinks
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Experts Near You
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200">
              Where you find the best of the best certified featured service providers like Builders, Plumbers, and more.
            </p>
            <button className="bg-sky-500 text-white px-8 py-3 rounded-lg hover:bg-sky-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-sky-300">
              Explore More
            </button>
          </div>
        </div>

        {/* Search Bar container */}
        {/* On mobile, it's part of the normal document flow. */}
        {/* On desktop (md and up), it's absolutely positioned at the bottom. */}
        <div className="w-[95%] sm:w-11/12 max-w-5xl z-20 mx-auto pb-6 md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:pb-0">
          <div className="bg-white/20 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-white/30">
            {/* Inputs container using CSS Grid for a robust responsive layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3">
              {/* What are you looking for? */}
              <div className="relative md:col-span-4">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-transparent bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-base transition"
                  aria-label="Search for a service"
                />
              </div>

              {/* Category Select */}
              <div className="relative md:col-span-3">
                <select
                  className="appearance-none w-full p-3 pl-4 pr-10 rounded-lg border-2 border-transparent bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-base transition"
                  aria-label="Select a category"
                >
                  <option>Builders</option>
                  <option>Plumbers</option>
                  <option>Electricians</option>
                  <option>Carpenters</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Location Input */}
              <div className="relative md:col-span-3">
                <FiMapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-transparent bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-base transition"
                  aria-label="Enter location"
                />
              </div>

              {/* Search Button */}
              <button
                className="md:col-span-2 bg-sky-500 text-white w-full h-full px-6 py-3 rounded-lg hover:bg-sky-600 transition text-base font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-sky-300"
                aria-label="Search button"
              >
                <FiSearch className="h-5 w-5" />
                <span className="md:hidden lg:inline">Search</span>
              </button>
            </div>

            {/* Category buttons */}
            <div className="mt-4 flex flex-wrap gap-2 md:gap-3 justify-center">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveCategory(item)}
                  className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800/50 focus:ring-sky-400 ${
                    activeCategory === item
                      ? 'bg-sky-500 text-white border-2 border-sky-500 shadow-md'
                      : 'bg-white/80 text-sky-600 border border-sky-300 hover:bg-sky-100 hover:text-sky-700 hover:border-sky-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
