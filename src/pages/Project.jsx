import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ContactFooter from "../components/Footer";
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
        {/* Use the Cloudinary URL directly */}
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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [projects, setProjects] = useState([]);
  const headerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getFilteredProjects = () => {
    if (!selectedCategory || selectedCategory === "Explore All") {
      return projects;
    }
    return projects.filter((project) =>
      project.categories.includes(selectedCategory)
    );
  };

  // Function to get span based on position in the grid
  const getSpan = (rowIndex, positionInRow) => {
    const oddRowPattern = [2, 1, 1]; // First row pattern (row 0)
    const evenRowPattern = [1, 2, 1]; // Second row pattern (row 1)
    const pattern = rowIndex % 2 === 0 ? oddRowPattern : evenRowPattern;
    return pattern[positionInRow];
  };

  // Function to create rows with proper spans
  const createRows = (projects) => {
    const rows = [];
    let currentRow = [];
    let positionInRow = 0;
    let rowIndex = 0;

    projects.forEach((project) => {
      currentRow.push({
        ...project,
        span: getSpan(rowIndex, positionInRow),
      });

      positionInRow++;

      if (positionInRow === 3) {
        rows.push(currentRow);
        currentRow = [];
        positionInRow = 0;
        rowIndex++;
      }
    });

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  };

  const filteredProjects = getFilteredProjects();
  const projectRows = createRows(filteredProjects);

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0ea]">
      <div className="flex-1 pt-[140px] font-vietnam">
        <div className="max-w-6xl mx-auto px-4 py-24">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="flex flex-col text-5xl font-light" ref={headerRef}>
                <span className="relative header-text text-black italic font-vietnam">
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
                        ? "text-black font-bold"
                        : "text-gray-500 hover:text-gray-950"
                    }`}
                    style={{
                      textShadow:
                        selectedCategory === category
                          ? "0 0 20px rgba(255, 215, 0, 1), 0 0 40px rgba(255, 215, 0, 1), 0 0 80px rgba(255, 215, 0, 1)"
                          : "none",
                    }}
                  >
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Project Grid */}
          <div className="mb-[200px]">
            {projectRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 gap-6 mb-6">
                {row.map((item) => (
                  <div key={item._id} className={`col-span-${item.span}`}>
                    <PortfolioItem
                      id={item._id}
                      image={item.image} // Cloudinary URL
                      title={item.title}
                      categories={item.categories}
                    />
                  </div>
                ))}
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
