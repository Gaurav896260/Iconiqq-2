import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ContactFooter from "../../components/Footer";
import { BsArrowUpRight } from "react-icons/bs";
import image1 from '../../assets/Projects/Frehta/image1.png';
import logo1 from '../../assets/Projects/Frehta/logo.png';
import './ProjectDetails.css'
import '../../components/Navbar.css'


const ProjectDetails = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    // Fetch project details by projectId or display static data
    const projectData = {
        1: {
            title: "Frheta",
            description:
                "Lorem ipsum dolor sit amet consectetur. Consectetur condimentum amet amet vestibulum arcu eros nibh est in. Lobortis faucibus morbi amet tortor ut lacus neque. Aliquam sagittis aliquam suspendisse sed.",
            logo: logo1,
            industry: "Food and Beverages",
            services: "Branding, Packaging design",
            images: [image1, image1, image1],
        },
        2: { title: "Ek Nazar", description: "Details about Ek Nazar" },
        3: { title: "Fightex", description: "Details about Fightex" },
        4: { title: "Frheta", description: "Details about Frheta" },
        5: { title: "Ek Nazar", description: "Details about Ek Nazar" },
        6: { title: "Fightex", description: "Details about Fightex" },
        // Add other projects
    };

    const project = projectData[projectId];

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="bg-[#f0f0ea] min-h-screen">
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
                    onClick={() => navigate('/projects')}
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
