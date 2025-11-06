import React from "react";
import ProjectCard from "./ProjectCard";
import House1 from "../assets/house1.jpg";
import House2 from "../assets/house2.png";
import House3 from "../assets/house3.png";

const ProjectsList = () => {
  const projects = [
    {
      image: House1,
      title: "Modern Cottage Build – Borrowdale, Harare",
      service: "Builder & Electrician",
      provider: "Samuel Moyo & Team",
      feedback: "Efficient, clean work — they delivered beyond my expectations.",
    },
    {
      image: House2,
      title: "Modern Cottage Build – Borrowdale, Harare",
      service: "Builder & Electrician",
      provider: "Samuel Moyo & Team",
      feedback: "Efficient, clean work — they delivered beyond my expectations.",
    },
    {
      image: House3,
      title: "Modern Cottage Build – Borrowdale, Harare",
      service: "Builder & Electrician",
      provider: "Samuel Moyo & Team",
      feedback: "Efficient, clean work — they delivered beyond my expectations.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Latest Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className="hover:shadow-xl transition-shadow duration-300"
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors text-lg font-medium">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
