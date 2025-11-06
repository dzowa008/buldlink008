import React from 'react';
import Partner1 from '../assets/Partner 1.jpg';
import Partner2 from '../assets/Partner 2.jpg';
import Partner3 from '../assets/Partner 3.jpg';
import Partner4 from '../assets/Partner 4.jpg';

const Partners = () => {
  const logos = [
    { id: 1, src: Partner1, alt: 'Partner 1' },
    { id: 2, src: Partner2, alt: 'Partner 2' },
    { id: 3, src: Partner3, alt: 'Partner 3' },
    { id: 4, src: Partner4, alt: 'Partner 4' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
          Where <span className="text-blue-500">Our Links</span>
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto mb-8"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="w-full aspect-square bg-white rounded-xl shadow-lg flex justify-center items-center hover:shadow-xl transition"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
