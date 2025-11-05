import React from "react";

const ProjectCard = ({ image, title, service, provider, feedback }) => {
    return (
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-600">Service Type: {service}</p>
          <p className="text-sm text-gray-600">Provider: {provider}</p>
          <p className="text-sm text-gray-600 italic mt-2">"{feedback}"</p>
          <div className="flex mt-3 text-yellow-400">★★★★★</div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  