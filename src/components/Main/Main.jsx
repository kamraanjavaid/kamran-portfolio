import React from "react";
import profile_img from "../../assets/profilePic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // For Email
import "./Main.css";
import Hero from "../Hero/Hero";

const Main = () => {
  return (
    <div className="main-container-outer">
      <div className="main-container-inner">
        <div className="main-title">
          <h1>KAMRAN JAVAID</h1>
        </div>
        <div className="main-image">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className="main-desc">
          <p>Specialization</p>
          <h3>Full-Stack Developer</h3>
          <p>Based in</p>
          <h3>Rawalpindi, Pakistan</h3>
        </div>
        <div className="connect-icons">
          <a href="https://github.com/kamraanjavaid" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/kamran-javaid-37baa626a/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:khaankamran.121@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://wa.me/923123456789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>{" "}
        </div>
      </div>
      <Hero />
    </div>
  );
};

export default Main;
