import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faFigma } from "@fortawesome/free-brands-svg-icons"; 
import "./Myskills.css";
import framerMotion from "../../assets/framermotion.png"; // Ensure correct path

const skills = [
  { name: "HTML5", icon: faHtml5, isImage: false },
  { name: "CSS3", icon: faCss3Alt, isImage: false },
  { name: "JavaScript", icon: faJs, isImage: false },
  { name: "ReactJS", icon: faReact, isImage: false },
  { name: "Figma", icon: faFigma, isImage: false },
  { name: "Framer Motion", icon: framerMotion, isImage: true }, // Mark as an image
];

const Myskills = () => {
  return (
    <div className="myskills">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="skills-title">
          <h1>My Skills</h1>
        </div>

        <div className="skills-boxes">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255, 204, 0, 0.8)",
              }}
            >
              {skill.isImage ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{ width: "60px", height: "60px"}}
                />
              ) : (
                <FontAwesomeIcon icon={skill.icon} size="3x" />
              )}
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Myskills;
