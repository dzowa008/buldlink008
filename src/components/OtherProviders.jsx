import React from 'react';

const OtherProviders = () => {
  const providers = [
    { id: 1, name: 'Tanaka Kushinga', image: 'https://randomuser.me/api/portraits/men/81.jpg', description: 'Expert in residential and commercial painting services.' },
    { id: 2, name: 'Panashe Tsvangirai', image: 'https://randomuser.me/api/portraits/women/81.jpg', description: 'Specializing in landscape design and garden maintenance.' },
    { id: 3, name: 'Musa Ndlovu', image: 'https://randomuser.me/api/portraits/men/82.jpg', description: 'Experienced roofer for repairs and new installations.' },
    { id: 4, name: 'Fadzai Moyo', image: 'https://randomuser.me/api/portraits/women/82.jpg', description: 'Interior designer with a passion for creating beautiful spaces.' },
    { id: 5, name: 'John Chibwe', image: 'https://randomuser.me/api/portraits/men/83.jpg', description: 'Master electrician specializing in large-scale commercial projects.' },
    { id: 6, name: 'Adam Dube', image: 'https://randomuser.me/api/portraits/men/84.jpg', description: 'Skilled carpenter known for attention to detail and quality craftsmanship.' },
    { id: 7, name: 'Peter Sithole', image: 'https://randomuser.me/api/portraits/men/85.jpg', description: 'Reliable handyman for all your home repair needs.' },
    { id: 8, name: 'Linda Mawere', image: 'https://randomuser.me/api/portraits/women/85.jpg', description: 'Professional cleaner for residential and commercial properties.' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-blue-500 uppercase mb-2">More Providers</h2>
          <h3 className="text-3xl font-bold">Other Featured Providers</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {providers.map(provider => (
            <div key={provider.id} className="bg-blue-800 text-white p-6 rounded-lg shadow-lg">
              <img src={provider.image} alt={provider.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white object-cover" />
              <h3 className="text-xl font-bold text-center">{provider.name}</h3>
              <p className="text-center text-blue-200 mb-4 text-sm">{provider.description}</p>
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

export default OtherProviders;
