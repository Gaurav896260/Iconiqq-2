import React, {useEffect, useRef} from 'react';
import image1 from '../assets/Showcase/frehta.jpg';
import image2 from '../assets/Showcase/ekNazar.jpg';
import image3 from '../assets/Showcase/fightex.jpg';
import image4 from '../assets/Showcase/bc.jpg';
import image5 from '../assets/Showcase/brewHeaven.jpg';
import image6 from '../assets/Showcase/kyoto.png';
import { BsArrowUpRight } from "react-icons/bs";
import "./Navbar.css";

// Portfolio Item Component
const PortfolioItem = ({ image, title, categories }) => (
  <div className="flex flex-col gap-2">
    <div className="rounded-xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className=''>
      <h3 className="text-black text-2xl italic font-vietnam">{title}</h3>
      <p className="text-[#828282] text-xl italic font-vietnam">{categories}</p>
    </div>
  </div>
);

const WorkShowcase = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const container = headerRef.current;
    if (!container) return;

    const textElement = container.querySelector('.header-text');
    const rect = textElement.getBoundingClientRect();
    const highlights = container.querySelectorAll('.highlight');

    const animate = () => {
      const time = performance.now() / 500;
      const a = rect.width / 4;
      const b = rect.height / 4;

      const x = a * Math.cos(time);
      const y = b * Math.sin(time);

      highlights.forEach(highlight => {
        highlight.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const firstRow = [
    {
      title: 'Frheta',
      categories: 'Social Media Content, Branding',
      image: image1,
      className: 'col-span-2', // Wider
    },
    {
      title: 'Ek Nazar',
      categories: 'Social Media Content, Branding',
      image: image2,
      className: 'col-span-1', // Standard size
    },
    {
      title: 'Fightex',
      categories: 'Social Media Content, Branding',
      image: image3,
      className: 'col-span-1', // Standard size
    },
  ];

  const secondRow = [
    {
      title: 'Black Crush',
      categories: 'Social Media Content, Branding',
      image: image4,
      className: 'col-span-1', // Wider
    },
    {
      title: 'Brew Haven',
      categories: 'Packaging Design, Branding',
      image: image5,
      className: 'col-span-2', // Standard size
    },
    {
      title: 'Kyoto Kitchen',
      categories: 'Social Media Content, Branding',
      image: image6,
      className: 'col-span-1', // Standard size
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="flex flex-col text-5xl font-light" ref={headerRef}>
            <span className="relative header-text text-black italic font-vietnam">
              {/* Animated highlights */}
              <div className="highlight absolute w-96 h-24 rounded-full bg-yellow-200/30 blur-3xl"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
              <div className="highlight absolute w-80 h-20 rounded-full bg-yellow-200/40 blur-2xl"
                style={{
                  left: '20%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
              <div className="highlight absolute w-20 h-20 rounded-full bg-yellow-400 blur-xl"
                style={{
                  left: '25%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
              <span className="relative z-10">Work we are</span>
            </span>
            <span className="text-black text-7xl ml-2 font-vilaka mt-2">Proud of</span>
          </h2>
        </div>
        <button
          className="md:flex schedule-button font-normal"
          onClick={() => navigate('/schedule-meet')}
        >
          View All Projects
          <BsArrowUpRight />
        </button>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {firstRow.map((item, index) => (
          <div key={index} className={`h-[250px] ${item.className}`}>
            <PortfolioItem {...item} />
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-4 gap-6">
        {secondRow.map((item, index) => (
          <div key={index} className={`h-[250px] ${item.className}`}>
            <PortfolioItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;

