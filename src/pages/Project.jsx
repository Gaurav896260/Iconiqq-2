import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import ContactFooter from "../components/Footer";
import image1 from "../assets/Showcase/image1.png";
import KCCNlogo from "../assets/Projects/Kashmir Chur Chur Naan/KashmirChurChurNaan2.jpg";
import LClogo from "../assets/Projects/La Costa/LaCosta2.jpg";
import QHlogo from "../assets/Projects/Qdore Home/QH1.jpg";
import KKlogo from "../assets/Projects/Kyoto Kitchen/KyotoKitchen1.jpg";
import Flogo from "../assets/Projects/Frehta/Frheta2.png";
import BClogo from "../assets/Projects/Black Crush/BlackCrush1.jpg";
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
      className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition-transform duration-300 font-vietnam"
      onClick={handleNavigation}
    >
      <div className="rounded-xl overflow-hidden h-[250px] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="text-black text-2xl italic">{title}</h3>
        <p className="text-[#828282] text-lg italic">{categories}</p>
      </div>
    </div>
  );
};

const Project = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const headerRef = useRef(null);

  useEffect(() => {
    const container = headerRef.current;
    if (!container) return;

    const textElement = container.querySelector(".header-text");
    const rect = textElement.getBoundingClientRect();
    const highlights = container.querySelectorAll(".highlight");

    const animate = () => {
      const time = performance.now() / 500;
      const a = rect.width / 4;
      const b = rect.height / 4;

      const x = a * Math.cos(time);
      const y = b * Math.sin(time);

      highlights.forEach((highlight) => {
        highlight.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const firstRow = [
    {
      id: 1,
      title: "Frheta",
      categories: "Social Media Content, Branding",
      image: Flogo,
      className: "col-span-2", // Wider
    },
    {
      id: 2,
      title: "Qdore Home",
      categories: "Social Media Content, Branding",
      image: QHlogo,
      className: "col-span-1", // Standard size
    },
    {
      id: 3,
      title: "Kashmir Chur Chur Naan",
      categories: "Social Media Content, Branding",
      image: KCCNlogo,
      className: "col-span-1", // Standard size
    },
  ];

  const secondRow = [
    {
      id: 4,
      title: "Black Crush",
      categories: "Social Media Content, Branding",
      image: BClogo,
      className: "col-span-1", // Wider
    },
    {
      id: 5,
      title: "La Costa",
      categories: "Logo, Packaging Design",
      image: LClogo,
      className: "col-span-2", // Standard size
    },
    {
      id: 6,
      title: "Kyoto Kitchen",
      categories: "Social Media Content, Branding",
      image: KKlogo,
      className: "col-span-1", // Standard size
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0ea]">
      <Navbar />
      <div className="flex-1 pt-[140px] font-vietnam">
        <div className="max-w-6xl mx-auto px-4 py-24">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="flex flex-col text-5xl font-light" ref={headerRef}>
                <span className="relative header-text text-black italic font-vietnam">
                  {/* Animated highlights */}
                  <div
                    className="highlight absolute w-96 h-24 rounded-full bg-yellow-200/30 blur-3xl"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <div
                    className="highlight absolute w-80 h-20 rounded-full bg-yellow-200/40 blur-2xl"
                    style={{
                      left: "20%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <div
                    className="highlight absolute w-20 h-20 rounded-full bg-yellow-400 blur-xl"
                    style={{
                      left: "25%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <span className="relative z-10">Work we are</span>
                </span>
                <span className="text-black text-7xl ml-2 font-vilaka mt-2">
                  Proud of
                </span>
              </h2>
            </div>
          </div>

          {/* Categories */}
          <div className="w-full flex justify-end">
            <div className="flex flex-wrap justify-end items-end gap-6 mb-12 w-[60%] font-vietnam">
              {[
                "Explore All",
                "Logo & Branding",
                "Social Media",
                "Packaging Design",
                "Web Design",
              ].map((category) => (
                <div
                  key={category}
                  className={`cursor-pointer mb-4 text-2xl transition-all duration-300 italic relative`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <span
                    className={`px-1 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? "text-black font-bold" // Brighter text for better contrast
                        : "text-gray-500 hover:text-gray-950"
                    }`}
                    style={{
                      textShadow:
                        selectedCategory === category
                          ? "0 0 20px rgba(255, 215, 0, 1), 0 0 40px rgba(255, 215, 0, 1), 0 0 80px rgba(255, 215, 0, 1)" // Intense glow
                          : "none",
                    }}
                  >
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-[200px]">
            {/* First Row */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              {firstRow.map((item, index) => (
                <div key={index} className={`h-[400px] ${item.className}`}>
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
      </div>
      {/* Footer with Gap */}
      <ContactFooter />
    </div>
  );
};

export default Project;
