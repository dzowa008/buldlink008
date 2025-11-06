import React from 'react';

const Professionals = () => {
  const professionals = [
    {
      id: 1,
      name: 'John Doe',
      title: 'Master Electrician',
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
      description: '20 years of experience in residential and commercial electrical systems.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: 'Certified Plumber',
      image: 'https://randomuser.me/api/portraits/women/41.jpg',
      description: 'Specializing in modern plumbing solutions and emergency repairs.'
    },
    {
      id: 3,
      name: 'Mike Williams',
      title: 'Lead Carpenter',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
      description: 'Expert in custom woodworking, framing, and structural repairs.'
    },
    {
      id: 4,
      name: 'Sarah Brown',
      title: 'Senior Architect',
      image: 'https://randomuser.me/api/portraits/women/42.jpg',
      description: 'Innovative designs for sustainable and functional living spaces.'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-blue-500 uppercase mb-2">Our Professionals</h2>
          <h3 className="text-3xl font-bold">Meet Top-Rated Professionals Ready to Work With You</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionals.map(pro => (
            <div key={pro.id} className="flex items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <img src={pro.image} alt={pro.name} className="w-24 h-24 rounded-full mr-6 border-4 border-blue-500" />
              <div>
                <h4 className="text-xl font-bold">{pro.name}</h4>
                <p className="text-blue-500 font-semibold mb-2">{pro.title}</p>
                <p className="text-gray-600">{pro.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold">
            View All Professionals
          </button>
        </div>
      </div>
    </section>
  );
};

export default Professionals;
