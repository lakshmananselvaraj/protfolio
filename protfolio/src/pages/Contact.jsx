import React, { useState } from "react";
import "./ContactPage.css"; // Import the CSS styles

const PortfolioContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending the data to an API)
    console.log(formData);
  };

  return (
    <div className="portfolio-contact-page">
      <div className="portfolio-contact-overlay">
        <h1 className="portfolio-contact-title">Contact Me</h1>
        <div className="portfolio-contact-container">
          <div className="portfolio-contact-info">
            <h2>Let's Connect</h2>
            <p>
              Have any questions or want to discuss a project? Feel free to
              reach out! I'm always open to new opportunities and collaborations.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="portfolio-contact-form">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message here"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContactPage;
