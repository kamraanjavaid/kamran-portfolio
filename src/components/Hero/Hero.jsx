import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faFigma } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Hero Content Animation */}
      <motion.div 
        className="hero-desc"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <p>👋 Hi, I'm</p>
        <h1>Kamran Javaid</h1>
        <h3>Frontend developer</h3>
        <p>
          Passionate about building interactive websites and seamless user experiences.
          I love working with modern web technologies to create stunning and efficient solutions.
        </p>
      </motion.div>

      {/* Animated Skill Icons */}
      <motion.div 
        className="hero-icons"
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        <FontAwesomeIcon icon={faHtml5} className="icon html" />
        <FontAwesomeIcon icon={faCss3Alt} className="icon css" />
        <FontAwesomeIcon icon={faJs} className="icon js" />
        <FontAwesomeIcon icon={faReact} className="icon react" />
        <FontAwesomeIcon icon={faFigma} className="icon figma" />
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
