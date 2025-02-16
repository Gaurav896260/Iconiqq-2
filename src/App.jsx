import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Affiliate from "./pages/Affiliate";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Home from "./pages/Home";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import Dashboard from "./pages/Dashboard"; // Import the Dashboard component
import Navbar from "./components/Navbar"; // Import the Navbar component
import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <Router>
      {/* Add the Navbar component here */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />

        {/* Add the new routes for Login and Dashboard */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
