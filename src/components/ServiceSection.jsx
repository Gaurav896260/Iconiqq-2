import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import image1 from '../assets/service/image1.png'
import image2 from '../assets/service/image2.png'
import image3 from '../assets/service/image3.png'


// Service Item Component
const ServiceItem = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full relative flex items-start gap-4 p-4 md:p-6 hover:bg-white/10 rounded-xl transition-all duration-500 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image that slides in from left */}
      <div className={`absolute top-0 left-0 h-full w-[300px] transition-all duration-500 transform ${
        isHovered ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        <div className="h-full w-full p-4">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className={`flex-grow transition-all duration-500 ${isHovered ? 'pl-[300px]' : ''}`}>
        <h3 className={`text-black text-2xl md:text-4xl font-light font-vietnam italic mb-2 transition-all duration-500`}>
          {title}
        </h3>
        
        {/* Description that appears on hover */}
        <div className={`overflow-hidden transition-all duration-500 ${
          isHovered ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <p className="text-gray-600 font-vietnam text-xl italic">
            {description}
          </p>
        </div>
      </div>

      {/* Arrow icon with fade out animation */}
      <div className={`transition-all duration-500 ${
        isHovered ? 'opacity-0 translate-x-4' : 'opacity-100'
      }`}>
        <ArrowUpRight className="w-6 h-6 mt-2"/>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    { 
      title: "Social Media & Content",
      description: "Social Media Banners, Ad Designs, Branded Content, Carousels, Reels, Photo and Video shoots",
      imageUrl: image1
    },
    { 
      title: "Web Design and Graphics",
      description: "Website Design, Web Graphics, Website Development, SEO Creation, Custom websites (Shopify), Portal Creation",
      imageUrl: image2
    },
    { 
      title: "Packaging Design",
      description: "Packaging, Print Design, Merchandise Design, Stationery Design, Label/Tag",
      imageUrl: image3
    }
  ];

  return (
    <section className="w-full px-4 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-10">
          {services.map((service, index) => (
            <ServiceItem 
              key={index} 
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;