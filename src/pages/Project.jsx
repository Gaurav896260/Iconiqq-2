import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import ContactFooter from '../components/Footer';
import image1 from '../assets/Showcase/image1.png';
import { BsArrowUpRight } from "react-icons/bs";
import "../components/Navbar.css";
import { useNavigate } from "react-router-dom";

const PortfolioItem = ({ image, title, categories, id }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div
      className="flex flex-col gap-2 cursor-pointer"
      onClick={handleNavigation}
    >
      <div className="rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="text-black text-2xl font-vietnam italic">{title}</h3>
        <p className="text-[#828282] text-xl font-vietnam italic">{categories}</p>
      </div>
    </div>
  );
};

const Project = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

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
      id: 1,
      title: 'Frheta',
      categories: 'Social Media Content, Branding',
      image: image1,
      className: 'col-span-2', // Wider
    },
    {
      id: 2,
      title: 'Ek Nazar',
      categories: 'Social Media Content, Branding',
      image: image1,
      className: 'col-span-1', // Standard size
    },
    {
      id: 3,
      title: 'Fightex',
      categories: 'Social Media Content, Branding',
      image: image1,
      className: 'col-span-1', // Standard size
    },
  ];

  const secondRow = [
    {
      id: 4,
      title: 'Black Crush',
      categories: 'Social Media Content, Branding',
      image: image1,
      className: 'col-span-1', // Wider
    },
    {
      id: 5,
      title: 'Brew Haven',
      categories: 'Packaging Design, Branding',
      image: image1,
      className: 'col-span-2', // Standard size
    },
    {
      id: 6,
      title: 'Kyoto Kitchen',
      categories: 'Social Media Content, Branding',
      image: image1,
      className: 'col-span-1', // Standard size
    },
  ];

  return (
    <div className="bg-[#f0f0ea]">
      <Navbar />
      <div className="pt-[140px]">
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
      </div>
      <ContactFooter />
    </div>
  );
};

export default Project;