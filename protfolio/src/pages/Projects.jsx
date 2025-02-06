import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  const projects = [
    {
      title: "Hospital Management Application",
      description:
        "A ReactJS-based application to streamline hospital operations, including patient management, appointment scheduling, and record tracking.",
    },
    {
      title: "Portfolio Application",
      description:
        "A personal portfolio application built with ReactJS, showcasing projects, skills, and achievements in a clean, user-friendly design.",
    },
    {
      title: "Data Analytics Report HR Dashboard",
      description:
        "An HR dashboard offering detailed analytics and insights into employee performance and organizational metrics.",
    },
    {
      title: "UI/UX Food Ordering Application",
      description:
        "A Figma-designed UI/UX project featuring an intuitive and visually appealing food ordering application for restaurants and users.",
    },
    {
      title: "UI/UX Shoe Shopping Application",
      description:
        "A Figma-designed UI/UX project offering an engaging and seamless shopping experience for shoe enthusiasts.",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-name">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
