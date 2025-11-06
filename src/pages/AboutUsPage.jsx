import React from 'react';

import AboutHero from '../components/AboutHero';
import Partners from '../components/Partners';
import AboutUs from '../components/AboutUs';
import CorePrinciples from '../components/CorePrinciples';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';

const AboutUsPage = () => {
  return (
    <div className="font-sans">
     
      <AboutHero />
      <Partners />
      <AboutUs />
      <CorePrinciples />
      <Stats />
      <Services />
      <Testimonials />
      <Team />
      
    </div>
  );
};

export default AboutUsPage;
