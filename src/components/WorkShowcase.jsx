import React, { useEffect, useRef, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import axios from "axios";
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
    <div className="">
      <h3 className="text-black text-2xl italic font-vietnam">{title}</h3>
      <p className="text-[#828282] text-xl italic font-vietnam">{categories}</p>
    </div>
  </div>
);

const WorkShowcase = () => {
  const [projects, setProjects] = useState([]);
  const headerRef = useRef(null);

  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

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

  // Split projects into two rows
  const firstRowProjects = projects.slice(0, 3);
  const secondRowProjects = projects.slice(3, 6);

  // Function to determine column span based on index
  const getColumnSpan = (index, rowIndex) => {
    if (rowIndex === 0) {
      // First row
      return index === 0 ? "col-span-2" : "col-span-1";
    } else {
      // Second row
      return index === 1 ? "col-span-2" : "col-span-1";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
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
        <button className="md:flex schedule-button font-normal">
          View All Projects
          <BsArrowUpRight />
        </button>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {firstRowProjects.map((project, index) => (
          <div
            key={project._id}
            className={`h-[250px] ${getColumnSpan(index, 0)}`}
          >
            <PortfolioItem
              image={project.image}
              title={project.title}
              categories={project.categories}
            />
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-4 gap-6">
        {secondRowProjects.map((project, index) => (
          <div
            key={project._id}
            className={`h-[250px] ${getColumnSpan(index, 1)}`}
          >
            <PortfolioItem
              image={project.image}
              title={project.title}
              categories={project.categories}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;
