import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCTA = () => {
  return (
    <section className="py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487483411353-ab1505c10a3b?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">See Our Gallery With Our Project</h2>
        <Link
          to="/gallery"
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 font-semibold transition-colors"
          aria-label="Go to Gallery"
        >
          Gallery
        </Link>
      </div>
    </section>
  );
};

export default GalleryCTA;
