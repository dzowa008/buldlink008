import React from 'react';
import { FaHardHat, FaWrench, FaBolt, FaClipboardList } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaHardHat />,
      title: 'Expert Builders',
      description: 'Find experienced and reliable builders for your construction projects, from new builds to renovations.'
    },
    {
      id: 2,
      icon: <FaWrench />,
      title: 'Skilled Plumbers',
      description: 'Connect with certified plumbers for all your plumbing needs, including installations, repairs, and maintenance.'
    },
    {
      id: 3,
      icon: <FaBolt />,
      title: 'Professional Electricians',
      description: 'Hire qualified electricians for safe and efficient electrical work, from wiring to fixture installations.'
    },
    {
      id: 4,
      icon: <FaClipboardList />,
      title: 'General Contractors',
      description: 'Get comprehensive project management and a wide range of construction services from top-rated contractors.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 max-w-5xl mx-auto">Connecting You to Trusted Builders, Plumbers, and Electricians Across Zimbabwe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
              <div className="text-4xl sm:text-5xl text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
