import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import ContactFooter from "../../components/Footer";
import { BsArrowUpRight } from "react-icons/bs";
import "./ProjectDetails.css";
import "../../components/Navbar.css";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch project details from the backend
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/projects/${projectId}`
        );
        setProject(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError("Failed to fetch project details.");
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (!project) {
    return <div className="text-center py-8">Project not found.</div>;
  }

  return (
    <div className="bg-[#f0f0ea] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex max-w-6xl mx-auto pt-[200px] gap-x-10 px-4">
        {/* Left Side: Scrollable Images */}
        <div className="w-2/3 h-[600px] overflow-y-scroll hide-scrollbar">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="h-[400px] bg-white rounded-[20px] justify-center items-center flex overflow-hidden mb-10"
            >
              {/* Use Cloudinary URL directly */}
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className="w-auto h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x400"; // Fallback image
                }}
              />
            </div>
          ))}
        </div>

        {/* Right Side: Static Content */}
        <div className="w-1/3 pl-8 sticky top-0 mt-10">
          {/* Use Cloudinary URL for logo */}
          <img
            className="w-[60px] h-[60px] rounded-xl mb-4"
            src={project.logo}
            alt={`${project.title} Logo`}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/60x60"; // Fallback logo
            }}
          />
          <h1 className="text-black text-[42px] font-normal font-vietnam mb-4 italic">
            {project.title}
          </h1>
          <p className="text-[#828282] text-lg font-light font-vietnam mb-4">
            {project.description}
          </p>
          <div className="h-[0px] border border-[#d9d9d9] mb-4"></div>
          <div className="flex items-start gap-12 mb-4">
            <div className="text-black text-lg font-normal font-vietnam italic">
              Industry
            </div>
            <div className="text-[#828282] text-lg font-light font-vietnam italic">
              {project.industry}
            </div>
          </div>
          <div className="h-[0px] border border-[#d9d9d9] mb-4"></div>
          <div className="flex items-start gap-12">
            <div className="text-black text-lg font-normal font-vietnam italic">
              Services
            </div>
            <div className="text-[#828282] text-lg font-light font-vietnam italic">
              {project.services}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[150px] mb-[50px]">
        <button
          className="md:flex w-[210px] schedule-button font-normal font-vietnam italic flex justify-center items-center"
          onClick={() => navigate("/projects")}
        >
          Back to projects
          <BsArrowUpRight />
        </button>
      </div>

      <ContactFooter />
    </div>
  );
};

export default ProjectDetails;