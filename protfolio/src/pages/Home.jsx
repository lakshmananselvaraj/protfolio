import React from 'react';

import './Home.css'; // If Home-specific CSS is in a file like Home.css

const Home = () => {
  return (
    <div className="home-container">
      {/* Left side content */}
      <div className="home-left">
        <h2>Hello, it's Me</h2>
        <h1>Lakshmanan</h1>
        <h3>
  <span className="first-part">I'm a </span>
  <span className="second-part">Frontend Developer</span>
</h3>

        <p>
          A skilled frontend developer with expertise in creating modern web applications. Blending responsive front-end design architectures, I specialize in delivering innovative, efficient solutions that meet complex requirements and drive business success.
        </p>
        <a href="#contact" className="contact-btn">Contact Me</a>
      </div>

      {/* Right side: Profile Image */}
      <div className="home-right">
        <img src="mypic.jpg" alt="Profile" className="profile-img" />
      </div>
    </div>
  );
};

export default Home;
