import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Affiliate from './pages/Affiliate';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Home from './pages/Home';
import ProjectDetails from './pages/Projects/ProjectDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  )
}

export default App
