// MyExperience.jsx

import React from "react";
import "./MyExperience.css";

const experiences = [
  {
    role: "ReactJS Developer",
    company: "Aiztek Technology",
    location: "Islamabad, PK",
    duration: "Feb - May 2025",
    description:
      "Worked on multiple projects and delivered pixel-perfect frontend solutions using ReactJS. Translated Figma designs into responsive, high-quality interfaces that exceeded client expectations."
  },
  {
    role: "Full Stack Developer (Remote)",
    company: "ASA Global Digital",
    location: "NYC, USA",
    duration: "June 2025 – Present",
    description:
      "Building and scaling SaaS projects with modern technologies including ReactJS, TailwindCSS, Node.js, NestJS, PostgreSQL, AWS RDS & EC2, and Auth0. Focused on performance, maintainability, and beautiful UI/UX."
  }
];

function MyExperience() {
  return (
    <section className="experience-section">
      <h2 className="exp-title">My Experience</h2>
      <div className="exp-list">
        {experiences.map((exp, idx) => (
          <div className="exp-card" key={idx}>
            <div className="exp-header">
              <h3 className="exp-role">{exp.role}</h3>
              <span className="exp-company">{exp.company}</span>
              <span className="exp-location">{exp.location}</span>
              <span className="exp-duration">{exp.duration}</span>
            </div>
            <p className="exp-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyExperience;
