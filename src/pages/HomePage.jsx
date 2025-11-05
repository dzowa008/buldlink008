import React from 'react';
import '../App.css';

import Hero from '../components/Hero';
import Partners from '../components/Partners';
import AboutUs from '../components/AboutUs';
import CorePrinciples from '../components/CorePrinciples';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Professionals from '../components/Professionals';
import Testimonials from '../components/Testimonials';
import JobRequest from '../components/JobRequest';


const HomePage = () => {
  return (
    <div className="font-sans">
    
      <Hero />
      <Partners />
      <AboutUs />
      <CorePrinciples />
      <Stats />
      <Services />
      <Professionals />
      <Testimonials />
      <JobRequest />
      
    </div>
  );
};

export default HomePage;
