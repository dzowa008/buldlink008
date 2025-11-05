import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';
import TeamImage1 from '../assets/worker1.png';
import TeamImage2 from '../assets/worker2.png';
import TeamImage3 from '../assets/worker3.png';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Allan Musango', role: 'Builder', image: TeamImage1 },
    { id: 2, name: 'Tanaka Moyo', role: 'Plumber', image: TeamImage2 },
    { id: 3, name: 'Kudzo Masango', role: 'Electrician', image: TeamImage3 },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-blue-500 uppercase mb-2">Our Team</h2>
          <h3 className="text-3xl font-bold">Meet our team member</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="text-center">
              <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg" />
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <div className="flex justify-center space-x-4 text-gray-600">
                <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
                <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
                <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 font-semibold">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
