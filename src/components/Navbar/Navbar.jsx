import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Listen to scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <h1>Kamran's Code Lab</h1>
      </div>

      {/* Menu Button for Mobile */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Navigation Links */}
      <div className={`nav-content ${menuOpen ? "open" : ""}`}>
        <ul className="list">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>HOME</li>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <li>PROJECTS</li>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <li>SERVICES</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li>CONTACT</li>
          </Link>
        </ul>

        <div className={`connect-btn ${menuOpen ? "open" : ""}`}>
          <button>Connect</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
