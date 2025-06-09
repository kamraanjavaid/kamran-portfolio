import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

const skills = [
  { name: "HTML5", image: "/icons/html5.png", className: "html" },
  { name: "CSS3", image: "/icons/css3.png", className: "css" },
  { name: "JavaScript", image: "/icons/js.png", className: "js" },
  { name: "React", image: "/icons/reactjs.png", className: "react" },
  { name: "Typescript", image: "/icons/ts.png", className: "figma" },
  { name: "Nextjs", image: "/icons/nextjs.png", className: "figma" },
];

const Hero = () => {
  return (
    <div className="hero-container">
      <motion.div
        className="hero-desc"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p>👋 Hi, I'm</p>
        <h1>Kamran Javaid</h1>
        <h3>Frontend Developer</h3>
        <p>
          Passionate about building interactive websites and seamless user experiences.
          I love working with modern web technologies to create stunning and efficient solutions.
        </p>
      </motion.div>

      {/* Animated Skill Icons (Now Images) */}
      <motion.div
        className="hero-icons"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill.image}
            alt={skill.name}
            className={`icon ${skill.className}`}
            title={skill.name}
          />
        ))}
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.div
        className="hero-btn"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <Link to="/services" style={{ textDecoration: "none" }}>
          <button>🚀 Explore My Services</button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
