import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ContactFooter from "../../components/Footer";
import { BsArrowUpRight } from "react-icons/bs";
import Flogo from "../../assets/Projects/Frehta/FrhetaLogo.png";
import Fimage1 from "../../assets/Projects/Frehta/Frheta1.png";
import Fimage2 from "../../assets/Projects/Frehta/Frheta2.png";
import Fimage3 from "../../assets/Projects/Frehta/Frheta3.jpg";
import BClogo from "../../assets/Projects/Black Crush/BlackCrushLogo.jpg";
import BCimage1 from "../../assets/Projects/Black Crush/BlackCrush1.jpg";
import BCimage3 from "../../assets/Projects/Black Crush/BlackCrush3.jpg";
import BCimage2 from "../../assets/Projects/Black Crush/BlackCrush2.jpg";
import QHlogo from "../../assets/Projects/Qdore Home/QHLogo.jpg";
import QHimage1 from "../../assets/Projects/Qdore Home/QH1.jpg";
import QHimage2 from "../../assets/Projects/Qdore Home/QH2.jpg";
import KCCNlogo from "../../assets/Projects/Kashmir Chur Chur Naan/KashmirChurChurNaanLogo.png";
import KCCNimage1 from "../../assets/Projects/Kashmir Chur Chur Naan/KashmirChurChurNaan1.jpg";
import KCCNimage2 from "../../assets/Projects/Kashmir Chur Chur Naan/KashmirChurChurNaan2.jpg";
import KCCNimage3 from "../../assets/Projects/Kashmir Chur Chur Naan/KashmirChurChurNaan3.jpg";
import KCCNimage4 from "../../assets/Projects/Kashmir Chur Chur Naan/KashmirChurChurNaan4.jpg";
import LClogo from "../../assets/Projects/La Costa/LaCostaLogo.jpg";
import LCimage1 from "../../assets/Projects/La Costa/LaCosta1.jpg";
import LCimage2 from "../../assets/Projects/La Costa/LaCosta2.jpg";
import KKlogo from "../../assets/Projects/Kyoto Kitchen/KyotoKitchenLogo.jpg";
import KKimage1 from "../../assets/Projects/Kyoto Kitchen/KyotoKitchen1.jpg";
import KKimage2 from "../../assets/Projects/Kyoto Kitchen/KyotoKitchen2.png";
import "./ProjectDetails.css";
import "../../components/Navbar.css";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  // Fetch project details by projectId or display static data
  const projectData = {
    1: {
      title: "Frheta",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur condimentum amet amet vestibulum arcu eros nibh est in. Lobortis faucibus morbi amet tortor ut lacus neque. Aliquam sagittis aliquam suspendisse sed.",
      logo: Flogo,
      industry: "Food and Beverages",
      services: "Branding, Packaging design",
      images: [Fimage1, Fimage2, Fimage3],
    },
    2: {
      title: "Qdore Home",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur condimentum amet amet vestibulum arcu eros nibh est in. Lobortis faucibus morbi amet tortor ut lacus neque. Aliquam sagittis aliquam suspendisse sed.",
      logo: QHlogo,
      industry: "Home Decor",
      services: "Branding, Social Media, Website Design And Development",
      images: [QHimage1, QHimage2, QHimage1],
    },
    3: {
      title: "Kashmir Chur Chur Naan",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur condimentum amet amet vestibulum arcu eros nibh est in. Lobortis faucibus morbi amet tortor ut lacus neque. Aliquam sagittis aliquam suspendisse sed.",
      logo: KCCNlogo,
      industry: "Food and Beverages",
      services: "Branding",
      images: [KCCNimage1, KCCNimage2, KCCNimage3, KCCNimage4],
    },
    4: {
      title: "Black Crush",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur condimentum amet amet vestibulum arcu eros nibh est in. Lobortis faucibus morbi amet tortor ut lacus neque. Aliquam sagittis aliquam suspendisse sed.",
      logo: BClogo,
      industry: "Clothing",
      services: "Branding",
      images: [BCimage3, BCimage2, BCimage1],
    },
    5: {
      title: "La Costa",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur condimentum amet amet vestibulum arcu eros nibh est in. Lobortis faucibus morbi amet tortor ut lacus neque. Aliquam sagittis aliquam suspendisse sed.",
      logo: LClogo,
      industry: "Food and Beverages",
      services: "Logo, Packaging Design",
      images: [LCimage2, LCimage1, LCimage2],
    },
    6: {
      title: "Kyoto Kitchen",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur condimentum amet amet vestibulum arcu eros nibh est in. Lobortis faucibus morbi amet tortor ut lacus neque. Aliquam sagittis aliquam suspendisse sed.",
      logo: KKlogo,
      industry: "Food and Beverages",
      services: "Logo, Packaging design",
        images: [KKimage1, KKimage2, KKimage1],
    },
    // Add other projects
  };

  const project = projectData[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-[#f0f0ea] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex max-w-6xl mx-auto pt-[200px] gap-x-10">
        {/* Left Side: Scrollable Images */}
        <div className="w-2/3 h-[600px] overflow-y-scroll hide-scrollbar">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="h-[400px] bg-white rounded-[20px] justify-center items-center flex overflow-hidden mb-10"
            >
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className="w-auto h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Side: Static Content */}
        <div className="w-1/3 pl-8 sticky top-0 mt-10">
          <img
            className="w-[60px] h-[60px] rounded-xl mb-4"
            src={project.logo}
            alt={`${project.title} Logo`}
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
