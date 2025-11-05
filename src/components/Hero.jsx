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
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 z-10 text-white max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
          Experts Near You
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 drop-shadow">
          Connecting you to trusted builders, plumbers, and electricians.
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
        <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg">
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
            <button className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition text-base font-medium flex items-center justify-center gap-2">
              <FaSearch />
              Search
            </button>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4 justify-center">
          {["All", "Builders", "Plumber", "Electrician", "Company", "Freelancer"].map(
            (item, idx) => (
              <button
                key={idx}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold border transition ${
                  idx === 0
                    ? "bg-sky-500 text-white border-sky-500"
                    : "bg-white/80 text-sky-500 border border-sky-400 hover:bg-sky-100"
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
