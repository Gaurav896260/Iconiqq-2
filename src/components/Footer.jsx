import React, { useEffect, useRef } from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import "./Navbar.css";

const ContactFooter = () => {
  const iconiqContainerRef = useRef(null);

  useEffect(() => {
    const container = iconiqContainerRef.current;
    if (!container) return;

    const textElement = container.querySelector('.iconiq-text');
    const rect = textElement.getBoundingClientRect();
    const highlights = container.querySelectorAll('.highlight');
    
    const animate = () => {
      const time = performance.now() / 500;
      const a = rect.width / 2;
      const b = rect.height / 6;
      
      const x = a * Math.cos(time);
      const y = b * Math.sin(time);
      
      highlights.forEach(highlight => {
        highlight.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <footer className="w-full px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-white rounded-[20px] p-6 md:p-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              {/* Header with CTA */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <div className="w-28 h-16 absolute -z-10 rotate-[-19deg] bg-[#fff700] rounded-full blur-2xl opacity-50" />
                </div>

                <h2 className="text-4xl md:text-4xl font-light font-vietnam italic leading-tight">
                  Ready to go{" "}
                  <span className="relative inline-block" ref={iconiqContainerRef}>
                    {/* Animated highlights */}
                    <div className="highlight absolute w-2 h-2 rounded-full bg-yellow-500 blur-3xl"
                      style={{
                        left: '50%',
                        top: '30%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                    <div className="highlight absolute w-2 h-2 rounded-full bg-yellow-400 blur-2xl"
                      style={{
                        left: '50%',
                        top: '30%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                    <div className="highlight absolute w-16 h-16 rounded-full bg-yellow-400 blur-xl"
                      style={{
                        left: '50%',
                        top: '30%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                    <span className="iconiq-text text-6xl md:text-6xl ml-1 font-thin not-italic font-vilaka relative z-10">
                      Iconiqq
                    </span>
                  </span>
                  ?
                </h2>

                <button
                  className="md:flex w-1/2 schedule-button font-normal mt-1"
                  onClick={() => navigate('/schedule-meet')}
                >
                  Book a Demo
                  <BsArrowUpRight />
                </button>
              </div>

              {/* Footer Links */}
              
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col items-end gap-2">
              {/* Contact Card */}
              

              {/* Contact Info */}
              
                <a href="/projects" className="text-[#828282] text-lg md:text-xl font-light font-vietnam italic hover:text-black transition-colors">
                  Projects
                </a>
                <a href="/affiliate" className="text-[#828282] text-lg md:text-xl font-light font-vietnam italic hover:text-black transition-colors">
                  Affiliate Program
                </a>
                <a href="/contact" className="text-[#828282] text-lg md:text-xl font-light font-vietnam italic hover:text-black transition-colors">
                  Contact
                </a>
              
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;