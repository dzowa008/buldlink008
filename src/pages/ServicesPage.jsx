import React from 'react';

import ServicesHero from '../components/ServicesHero';
import TopProfessionals from '../components/TopProfessionals';
import OtherProviders from '../components/OtherProviders';
import GalleryCTA from '../components/GalleryCTA';


const ServicesPage = () => {
  return (
    <div className="font-sans">
     
      <ServicesHero />
      <TopProfessionals />
      <OtherProviders />
      <GalleryCTA />
      
    </div>
  );
};

export default ServicesPage;
