import React from 'react';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';

const CorePrinciples = () => {
  const principles = [
    {
      id: 1,
      icon: <FaEye />,
      title: 'Our Vision',
      description: 'To be the leading platform for connecting clients with trusted professionals in Zimbabwe.'
    },
    {
      id: 2,
      icon: <FaBullseye />,
      title: 'Our Mission',
      description: 'To provide a seamless and reliable experience for finding and hiring skilled tradespeople.'
    },
    {
      id: 3,
      icon: <FaHeart />,
      title: 'Our Values',
      description: 'Integrity, Quality, and Customer Satisfaction are at the heart of everything we do.'
    }
  ];

  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold uppercase mb-2">Our Principles</h2>
          <h3 className="text-3xl font-bold">Discover the Core Principles That Guide Us</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map(principle => (
            <div key={principle.id} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4 text-blue-500">{principle.icon}</div>
              <h4 className="text-xl font-bold mb-2">{principle.title}</h4>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;
