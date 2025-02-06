import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <p className="about-paragraph">
          Hello! I'm Lakshmanan S, A dynamic Artificial Intelligence and data
          science engineer with expertise in frontend development, data
          analytics, and UI&UX development. My passion lies in crafting
          responsive, user-friendly applications that provide exceptional user
          experiences.
        </p>

        <p className="about-paragraph">
          With a solid foundation in frontend technologies, I bring ideas to
          life through clean, efficient, and scalable code. My expertise extends
          to database management and data-driven decision-making, enabling me to
          deliver innovative, impactful solutions.
        </p>

        <p className="about-paragraph">
          I am committed to continuous learning and staying ahead of emerging
          technologies to drive meaningful contributions in the ever-evolving
          tech landscape. Let's connect and create something extraordinary!
        </p>

        {/* Buttons */}
        <div className="about-buttons">
          <button className="about-btn frontend-btn">
            <img src="/frontend-logo.png" alt="Frontend Developer Logo" />
            Frontend Developer
          </button>
          <button className="about-btn uiux-btn">
            <img src="/uiuxLogo.png" alt="UI/UX Developer Logo" />
            UI/UX Developer
          </button>
          <button className="about-btn analytics-btn">
            <img src="/analytics-logo.png" alt="Data Analytics Logo" />
            Data Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
