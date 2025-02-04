import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import ServicesSection from '../components/ServiceSection';
import BrandTransformation from '../components/BrandTransformation';
import MessageFromFounder from '../components/MessageFromFounder';
import WorkShowcase from '../components/WorkShowcase';
import ContactFooter from '../components/Footer';
import Slider1 from '../components/Slider1';
import Message from '../components/Message';
import PortfolioGallery from '../components/PortfolioGallery';

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f0f0ea]">
      <Navbar />
      <div className="pt-[140px]">
        <HeroSection />
        <ServicesSection />
        <BrandTransformation />
        <WorkShowcase />
        <MessageFromFounder />
      </div>
      <ContactFooter />
    </div>
  );
};

export default Home;
