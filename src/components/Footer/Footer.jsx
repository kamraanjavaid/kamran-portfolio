import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Kamran Javaid. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/KamranJavaid" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kamranjavaid/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:kamranjavaid@example.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
