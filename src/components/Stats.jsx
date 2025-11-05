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
    <section className="py-12 sm:py-16 bg-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map(stat => (
            <div key={stat.id} className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-sm sm:text-base text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
