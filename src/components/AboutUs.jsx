import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 relative mb-8 lg:mb-0">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" alt="Worker 1" className="rounded-lg shadow-lg w-full" />
            <img src="https://images.unsplash.com/photo-1519781542286-35e5a187145d?q=80&w=1974&auto=format&fit=crop" alt="Worker 2" className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4 rounded-full border-4 sm:border-8 border-white shadow-2xl w-48 h-48 sm:w-64 sm:h-64 object-cover" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-xs sm:text-sm font-bold text-blue-500 uppercase mb-2">Who we are</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Your Trusted Partner in Construction and Services</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 flex items-start gap-2">
              <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
              <span>BuildLink is a premier platform connecting you with top-rated builders, plumbers, and electricians across Zimbabwe. Our mission is to simplify the process of finding reliable professionals for all your construction and maintenance needs.</span>
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6 flex items-start gap-2">
              <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
              <span>With over 25 years of combined experience in the industry, our network of professionals is vetted for quality, reliability, and expertise.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold inline-flex items-center gap-2 transition">
                Read More
                <FaArrowRight />
              </button>
              <div className="flex items-center gap-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-bold text-sm sm:text-base">John Doe</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
