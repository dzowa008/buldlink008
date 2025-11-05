import React from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa';

const LatestProjects = () => {
  const projects = [
    { id: 1, title: 'Modern Cottage Build - Borrowdale, Harare', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop', rating: 5 },
    { id: 2, title: 'Modern Cottage Build - Borrowdale, Harare', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop', rating: 5 },
    { id: 3, title: 'Modern Cottage Build - Borrowdale, Harare', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', rating: 5 },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">Latest Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={project.image} alt={project.title} className="w-full h-48 sm:h-64 object-cover" />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center mb-4">
                  {[...Array(project.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                  ))}
                </div>
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 flex items-center justify-center gap-2 transition">
                  See More
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold inline-flex items-center gap-2 transition">
            Load More
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
