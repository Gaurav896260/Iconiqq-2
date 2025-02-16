import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaImage, FaUpload, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isUploading, setIsUploading] = useState({
    logo: false,
    image: false,
    images: false
  });
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    logo: "",
    industry: "",
    services: "",
    images: [],
    categories: "",
    image: "",
  });
  const [editProject, setEditProject] = useState({
    id: "",
    title: "",
    description: "",
    logo: "",
    industry: "",
    services: "",
    images: [],
    categories: "",
    image: "",
  });

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

  // Check if user is authenticated
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== "Khushi") {
      navigate("/login");
    }
  }, [navigate]);

  // Add a new project
  const addProject = async () => {
    if (
      newProject.title &&
      newProject.description &&
      newProject.logo &&
      newProject.industry &&
      newProject.services &&
      newProject.images.length > 0 &&
      newProject.categories &&
      newProject.image
    ) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/projects",
          newProject
        );
        setProjects([...projects, response.data]);
        setNewProject({
          title: "",
          description: "",
          logo: "",
          industry: "",
          services: "",
          images: [],
          categories: "",
          image: "",
        });
        setIsModalOpen(false);
      } catch (err) {
        console.error("Error adding project:", err);
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Open edit modal and populate with project data
  const openEditModal = (project) => {
    setEditProject({
      id: project._id,
      title: project.title,
      description: project.description,
      logo: project.logo,
      industry: project.industry,
      services: project.services,
      images: project.images,
      categories: project.categories,
      image: project.image,
    });
    setIsEditModalOpen(true);
  };

  // Update an existing project
  const updateProject = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/projects/${editProject.id}`,
        editProject
      );
      setProjects(
        projects.map((project) =>
          project._id === editProject.id ? response.data : project
        )
      );
      setIsEditModalOpen(false);
    } catch (err) {
      console.error("Error updating project:", err);
    }
  };

  // Confirm project deletion
  const confirmRemoveProject = (id) => {
    setSelectedProject(id);
    setIsConfirmOpen(true);
  };

  // Delete a project
  const removeProject = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/projects/${selectedProject}`
      );
      setProjects(
        projects.filter((project) => project._id !== selectedProject)
      );
      setIsConfirmOpen(false);
      setSelectedProject(null);
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  // Handle image upload or URL input
  const handleImageChange = async (e, field, isMultiple = false) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (isMultiple) {
        // Handle multiple files
        const uploadPromises = Array.from(files).map(async (file) => {
          const formData = new FormData();
          formData.append("image", file);

          try {
            const response = await axios.post(
              "http://localhost:5000/api/upload",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            return response.data.url;
          } catch (err) {
            console.error("Error uploading image:", err);
            return null;
          }
        });

        try {
          const uploadedUrls = await Promise.all(uploadPromises);
          const validUrls = uploadedUrls.filter((url) => url !== null);

          if (validUrls.length > 0) {
            if (isEditModalOpen) {
              // For edit project
              setEditProject((prev) => ({
                ...prev,
                [field]: [...prev[field], ...validUrls],
              }));
            } else {
              // For new project
              setNewProject((prev) => ({
                ...prev,
                [field]: [...prev[field], ...validUrls],
              }));
            }
          }
        } catch (err) {
          console.error("Error processing multiple uploads:", err);
          alert("Some images failed to upload. Please try again.");
        }
      } else {
        // Handle single file
        const file = files[0];
        const formData = new FormData();
        formData.append("image", file);

        try {
          const response = await axios.post(
            "http://localhost:5000/api/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          const imageUrl = response.data.url;

          if (isEditModalOpen) {
            // For edit project
            setEditProject((prev) => ({
              ...prev,
              [field]: imageUrl,
            }));
          } else {
            // For new project
            setNewProject((prev) => ({
              ...prev,
              [field]: imageUrl,
            }));
          }
        } catch (err) {
          console.error("Error uploading image:", err);
          alert("Failed to upload image. Please try again.");
        }
      }
    }
  };
  return (
    <div className="min-h-screen bg-[#f0f0ea] py-12 px-4 font-vietnam">
      <div className="max-w-6xl mx-auto">
        <h2 className="mt-24 text-5xl font-light mb-12 text-center italic">
          Admin Dashboard
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* Add Project Card */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 border-dashed border-2 border-gray-600"
          >
            <span className="text-6xl text-gray-700">+</span>
            <p className="text-gray-700 text-xl mt-2">Add Project</p>
          </div>

          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col group"
            >
              <img
                src={project.image} // Cloudinary URL
                alt={project.title}
                className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h3 className="text-black text-2xl italic">{project.title}</h3>
                <p className="text-[#828282] text-lg italic">
                  {project.categories}
                </p>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => openEditModal(project)}
                    className="w-1/2 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => confirmRemoveProject(project._id)}
                    className="w-1/2 py-2 rounded text-white bg-red-600 hover:bg-red-700 active:bg-red-800 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Adding Project */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-4xl h-[80vh] overflow-y-auto p-8">
            <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">
              Add New Project
            </h3>

            <div className="space-y-6">
              {/* Project Title */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  placeholder="Enter project title"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                  value={newProject.title}
                  onChange={(e) =>
                    setNewProject({ ...newProject, title: e.target.value })
                  }
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Enter project description"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                  value={newProject.description}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      description: e.target.value,
                    })
                  }
                  rows={4}
                />
              </div>

              {/* Logo */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Logo
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter logo URL"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                    value={newProject.logo}
                    onChange={(e) =>
                      setNewProject({ ...newProject, logo: e.target.value })
                    }
                  />
                  <label className="flex items-center justify-center p-3 border rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200">
                    <FaUpload className="text-gray-600" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(e, "logo")}
                    />
                  </label>
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  placeholder="Enter industry"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                  value={newProject.industry}
                  onChange={(e) =>
                    setNewProject({ ...newProject, industry: e.target.value })
                  }
                />
              </div>

              {/* Services */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Services
                </label>
                <input
                  type="text"
                  placeholder="Enter services"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                  value={newProject.services}
                  onChange={(e) =>
                    setNewProject({ ...newProject, services: e.target.value })
                  }
                />
              </div>

              {/* Categories */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Categories
                </label>
                <input
                  type="text"
                  placeholder="Enter categories"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                  value={newProject.categories}
                  onChange={(e) =>
                    setNewProject({ ...newProject, categories: e.target.value })
                  }
                />
              </div>

              {/* Thumbnail */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Thumbnail Image
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter thumbnail URL"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                    value={newProject.image}
                    onChange={(e) =>
                      setNewProject({ ...newProject, image: e.target.value })
                    }
                  />
                  <label className="flex items-center justify-center p-3 border rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200">
                    <FaUpload className="text-gray-600" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(e, "image")}
                    />
                  </label>
                </div>
              </div>

              {/* Images */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Project Images
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter image URLs (comma-separated)"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                    value={newProject.images.join(",")}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        images: e.target.value.split(","),
                      })
                    }
                  />
                  <label className="flex items-center justify-center p-3 border rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200">
                    <FaUpload className="text-gray-600" />
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(e, "images", true)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 rounded-lg text-gray-700 border border-gray-400 hover:bg-gray-200 active:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={addProject}
                className="px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Editing Project */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-4xl h-[80vh] overflow-y-auto p-8">
            <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">
              Edit Project
            </h3>

            <div className="space-y-6">
              {/* Project Title */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  placeholder="Enter project title"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                  value={editProject.title}
                  onChange={(e) =>
                    setEditProject({ ...editProject, title: e.target.value })
                  }
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Enter project description"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                  value={editProject.description}
                  onChange={(e) =>
                    setEditProject({
                      ...editProject,
                      description: e.target.value,
                    })
                  }
                  rows={4}
                />
              </div>

              {/* Logo */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Logo
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter logo URL"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                    value={editProject.logo}
                    onChange={(e) =>
                      setEditProject({ ...editProject, logo: e.target.value })
                    }
                  />
                  <label className="flex items-center justify-center p-3 border rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200">
                    <FaUpload className="text-gray-600" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(e, "logo")}
                    />
                  </label>
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  placeholder="Enter industry"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                  value={editProject.industry}
                  onChange={(e) =>
                    setEditProject({ ...editProject, industry: e.target.value })
                  }
                />
              </div>

              {/* Services */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Services
                </label>
                <input
                  type="text"
                  placeholder="Enter services"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                  value={editProject.services}
                  onChange={(e) =>
                    setEditProject({ ...editProject, services: e.target.value })
                  }
                />
              </div>

              {/* Categories */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Categories
                </label>
                <input
                  type="text"
                  placeholder="Enter categories"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                  value={editProject.categories}
                  onChange={(e) =>
                    setEditProject({
                      ...editProject,
                      categories: e.target.value,
                    })
                  }
                />
              </div>

              {/* Thumbnail */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Thumbnail Image
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter thumbnail URL"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                    value={editProject.image}
                    onChange={(e) =>
                      setEditProject({ ...editProject, image: e.target.value })
                    }
                  />
                  <label className="flex items-center justify-center p-3 border rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200">
                    <FaUpload className="text-gray-600" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(e, "image")}
                    />
                  </label>
                </div>
              </div>

              {/* Images */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Project Images
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter image URLs (comma-separated)"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                    value={editProject.images.join(",")}
                    onChange={(e) =>
                      setEditProject({
                        ...editProject,
                        images: e.target.value.split(","),
                      })
                    }
                  />
                  <label className="flex items-center justify-center p-3 border rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200">
                    <FaUpload className="text-gray-600" />
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(e, "images", true)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-4">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-6 py-2 rounded-lg text-gray-700 border border-gray-400 hover:bg-gray-200 active:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={updateProject}
                className="px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal For Deletion */}
      {isConfirmOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
            <h3 className="text-2xl mb-4 text-center">Are you sure?</h3>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={removeProject}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
