import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import heroBg from "../assets/hero-bg.jpg";
import Header from "./Header";

export const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 z-10 text-white max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-2xl animate-fade-in">
          Find Expert
          <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Professionals</span>
          Near You
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 drop-shadow-lg max-w-2xl">
          Connecting you to Zimbabwe's most trusted builders, plumbers, and electricians.
        </p>
      </div>
    </section>
  );
};

export const HeroWithSearch = () => {
  return (
    <>
      <Hero />

      <div className="container mx-auto px-4 sm:px-6 -mt-12 relative z-20">
        <div className="bg-white/95 backdrop-blur-lg p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <div className="flex-grow relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full pl-10 pr-4 py-3 text-base rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400 outline-none"
              />
            </div>
            <select className="px-4 py-3 text-base rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400 outline-none">
              <option>All</option>
              <option>Builders</option>
              <option>Plumbers</option>
              <option>Electricians</option>
            </select>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-3 text-base rounded-lg border border-sky-400 text-gray-700 focus:ring-2 focus:ring-sky-400 outline-none"
              />
            </div>
            <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl text-base font-semibold flex items-center justify-center gap-2 transform hover:scale-105">
              <FaSearch />
              Search
            </button>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 justify-center">
          {["All", "Builders", "Plumber", "Electrician", "Company", "Freelancer"].map(
            (item, idx) => (
              <button
                key={idx}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold border-2 transition-all transform hover:scale-105 ${
                  idx === 0
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white border-transparent shadow-lg"
                    : "bg-white/90 text-sky-600 border-sky-400 hover:bg-sky-50 shadow-md hover:shadow-lg"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default HeroWithSearch;
