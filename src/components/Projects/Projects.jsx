import React, { useState } from "react";
import projectsData from "./projectsData"; // Import the data from the file
import "./Projects.css";


const Projects = () => {
  // State for managing which project description is shown
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowDescription = (project) => {
    setSelectedProject(project); // Show the selected project description
  };

  const handleCloseDescription = () => {
    setSelectedProject(null); // Close the description popup
  };

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-container">
        {/* Use map method to display each project */}
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imgURL} alt={project.name} />
            <div className="project-details">
              <h2>{project.name}</h2>
              <button className="link-btn"><a href={project.link} target="_blank">View</a></button>
              <button
                className="desc-btn"
                onClick={() => handleShowDescription(project)}
              >
                Show Description
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for showing description */}
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            <button className="close-btn" onClick={handleCloseDescription}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
