import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Technical Skills</h1>

      {/* Web Development Container */}
      <div className="skills-section">
        <h2 className="skills-heading">Web Development</h2>
        <div className="skills-box">
          <div className="skill-item">HTML</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React.js</div>
          <div className="skill-item">UI/UX</div>
        </div>
      </div>

      {/* Database Management Container */}
      <div className="skills-section">
        <h2 className="skills-heading">Database Management</h2>
        <div className="skills-box">
          <div className="skill-item">MySQL</div>
          <div className="skill-item">MongoDB</div>
        </div>
      </div>

      {/* Version Control Container */}
      <div className="skills-section">
        <h2 className="skills-heading">Version Control</h2>
        <div className="skills-box">
          <div className="skill-item">Git</div>
          <div className="skill-item">GitHub</div>
        </div>
      </div>

      {/* Programming Languages Container */}
      <div className="skills-section">
        <h2 className="skills-heading">Programming Languages</h2>
        <div className="skills-box">
          <div className="skill-item">Python</div>
        </div>
      </div>

      {/* BI Tools Container */}
      <div className="skills-section">
        <h2 className="skills-heading">BI Tools</h2>
        <div className="skills-box">
          <div className="skill-item">Power BI</div>
          <div className="skill-item">Tableau</div>
          <div className="skill-item">Figma</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
