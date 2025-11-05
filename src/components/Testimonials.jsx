import React from 'react';
import { FaQuoteLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xs sm:text-sm font-bold text-blue-500 uppercase mb-2">Testimonials</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">What Our Customers Say</h3>
        </div>
        <div className="relative max-w-4xl mx-auto hidden lg:block">
          <div className="flex justify-center items-center">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Support Agent" className="w-40 h-40 sm:w-48 sm:h-48 rounded-full shadow-lg z-10 object-cover" />
          </div>
          <div className="absolute top-0 left-0 w-56 sm:w-64 p-4 bg-white rounded-lg shadow-lg transform -translate-x-1/4 -translate-y-1/4">
            <FaQuoteLeft className="text-blue-500 text-2xl mb-2" />
            <p className="text-sm text-gray-600 italic">"BuildLink made it so easy to find a reliable plumber. The process was quick and hassle-free!"</p>
            <p className="text-right font-bold text-blue-500 mt-2 text-sm">- M. Thompson</p>
          </div>
          <div className="absolute top-0 right-0 w-56 sm:w-64 p-4 bg-white rounded-lg shadow-lg transform translate-x-1/4 -translate-y-1/4">
            <FaQuoteLeft className="text-blue-500 text-2xl mb-2" />
            <p className="text-sm text-gray-600 italic">"The quality of work from the electrician we hired was outstanding. Highly recommend this platform."</p>
            <p className="text-right font-bold text-blue-500 mt-2 text-sm">- A. Davis</p>
          </div>
          <div className="absolute bottom-0 left-0 w-56 sm:w-64 p-4 bg-white rounded-lg shadow-lg transform -translate-x-1/4 translate-y-1/4">
            <FaQuoteLeft className="text-blue-500 text-2xl mb-2" />
            <p className="text-sm text-gray-600 italic">"A fantastic resource for anyone in need of skilled tradespeople. Five stars!"</p>
            <p className="text-right font-bold text-blue-500 mt-2 text-sm">- S. Rodriguez</p>
          </div>
          <div className="absolute bottom-0 right-0 w-56 sm:w-64 p-4 bg-white rounded-lg shadow-lg transform translate-x-1/4 translate-y-1/4">
            <FaQuoteLeft className="text-blue-500 text-2xl mb-2" />
            <p className="text-sm text-gray-600 italic">"I found the perfect contractor for my renovation project. The results exceeded my expectations."</p>
            <p className="text-right font-bold text-blue-500 mt-2 text-sm">- J. Chen</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:hidden gap-4 mt-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-blue-500 text-xl mb-2" />
            <p className="text-sm text-gray-600 italic mb-2">"BuildLink made it so easy to find a reliable plumber. The process was quick and hassle-free!"</p>
            <p className="text-right font-bold text-blue-500 text-xs">- M. Thompson</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-blue-500 text-xl mb-2" />
            <p className="text-sm text-gray-600 italic mb-2">"The quality of work from the electrician we hired was outstanding. Highly recommend this platform."</p>
            <p className="text-right font-bold text-blue-500 text-xs">- A. Davis</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-blue-500 text-xl mb-2" />
            <p className="text-sm text-gray-600 italic mb-2">"A fantastic resource for anyone in need of skilled tradespeople. Five stars!"</p>
            <p className="text-right font-bold text-blue-500 text-xs">- S. Rodriguez</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-blue-500 text-xl mb-2" />
            <p className="text-sm text-gray-600 italic mb-2">"I found the perfect contractor for my renovation project. The results exceeded my expectations."</p>
            <p className="text-right font-bold text-blue-500 text-xs">- J. Chen</p>
          </div>
        </div>
        <div className="text-center mt-8 lg:mt-12 lg:pt-24">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold inline-flex items-center gap-2 transition">
            Read More Testimonials
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
