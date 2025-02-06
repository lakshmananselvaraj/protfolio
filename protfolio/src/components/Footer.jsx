import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Your Portfolio | All Rights Reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/yourgithubprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedinprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="footer-link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
