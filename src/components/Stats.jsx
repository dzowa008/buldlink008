import React from 'react';
import { FaUsers, FaTasks, FaStar, FaCalendarAlt } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    { id: 1, value: '260 k', label: 'Happy Customers', icon: <FaUsers /> },
    { id: 2, value: '1,550', label: 'Projects Completed', icon: <FaTasks /> },
    { id: 3, value: '98%', label: 'Positive Reviews', icon: <FaStar /> },
    { id: 4, value: '25', label: 'Years of Experience', icon: <FaCalendarAlt /> },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-sky-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
          {stats.map(stat => (
            <div key={stat.id} className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl mb-3 drop-shadow-lg">{stat.icon}</div>
              <h3 className="text-4xl sm:text-5xl font-extrabold mb-2 drop-shadow-md">{stat.value}</h3>
              <p className="text-sm sm:text-base text-blue-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
