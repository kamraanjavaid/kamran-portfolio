import React from "react";
import "./Myskills.css";

const skills = [
  { name: "HTML5", image: "/icons/html5.png" },
  { name: "CSS3", image: "/icons/css3.png" },
  { name: "JavaScript", image: "/icons/js.png" },
  { name: "ReactJS", image: "/icons/reactjs.png" },
  { name: "Typescript", image: "/icons/ts.png" },
  { name: "Nextjs", image: "/icons/nextjs.png" },
];

const Myskills = () => {
  return (
    <div className="myskills">
      <div className="skills-title">
        <h1>Skills</h1>
      </div>
      <div className="marquee-container">
        <div className="marquee-track">
          {skills.concat(skills).map((skill, index) => (
            <div className="marquee-item" key={index}>
              <img
                src={skill.image}
                alt={skill.name}
                className="skill-image"
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myskills;
