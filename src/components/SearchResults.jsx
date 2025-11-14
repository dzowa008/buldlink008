import React from 'react';

const SearchResults = () => {
  const results = [
    { id: 1, name: 'Grace Ndlovu', image: 'https://randomuser.me/api/portraits/women/60.jpg', description: 'Experienced in residential and commercial installations and maintenance.' },
    { id: 2, name: 'Alan Bikov', image: 'https://randomuser.me/api/portraits/men/60.jpg', description: 'Specializing in modern plumbing solutions for new builds and renovations.' },
    { id: 3, name: 'Tamara Mukasa', image: 'https://randomuser.me/api/portraits/women/61.jpg', description: 'Expert in custom woodworking, fine carpentry, and structural repairs.' },
    { id: 4, name: 'Tinashe Shumba', image: 'https://randomuser.me/api/portraits/men/61.jpg', description: 'Innovative architectural designs for sustainable and functional spaces.' },
    { id: 5, name: 'Chiedza Moyo', image: 'https://randomuser.me/api/portraits/women/62.jpg', description: 'Certified plumber with a focus on emergency repairs and maintenance.' },
    { id: 6, name: 'David Banda', image: 'https://randomuser.me/api/portraits/men/62.jpg', description: 'Lead contractor with over 15 years of experience in project management.' },
    { id: 7, name: 'John Chibwe', image: 'https://randomuser.me/api/portraits/men/63.jpg', description: 'Master electrician specializing in large-scale commercial projects.' },
    { id: 8, name: 'Adam Dube', image: 'https://randomuser.me/api/portraits/men/64.jpg', description: 'Skilled carpenter known for attention to detail and quality craftsmanship.' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Search Results</h2>
          <a href="#" className="text-blue-500 font-semibold">More &gt;</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map(result => (
            <div key={result.id} className="bg-blue-800 text-white p-6 rounded-lg shadow-lg">
              <img src={result.image} alt={result.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white" />
              <h3 className="text-xl font-bold text-center">{result.name}</h3>
              <p className="text-center text-blue-200 mb-4">{result.description}</p>
              <button className="w-full bg-white text-blue-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
