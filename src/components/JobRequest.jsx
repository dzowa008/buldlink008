import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const JobRequest = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-xs sm:text-sm font-bold text-blue-500 uppercase mb-2">Get Started</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Post a Job Request</h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Name" className="w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" placeholder="Email" className="w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Phone Number" className="w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="City" className="w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <textarea placeholder="Describe Your Project" rows="4" className="sm:col-span-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              <div className="sm:col-span-2 text-center">
                <button type="submit" className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 font-semibold inline-flex items-center gap-2 transition">
                  <FaPaperPlane />
                  Submit Request
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <h4 className="font-bold text-lg sm:text-xl mb-4">Job Details</h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <strong>Project Type:</strong> General Construction
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <strong>Budget:</strong> $5,000 - $10,000
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <strong>Timeline:</strong> 2-4 Weeks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <strong>Location:</strong> Harare, Zimbabwe
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobRequest;
