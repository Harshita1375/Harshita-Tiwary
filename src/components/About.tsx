import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          I am a passionate Web Developer and Creative Designer focused on
          building modern, responsive, and user-friendly websites.
          <br />
          <br />
          I specialize in React-based frontend development and clean UI design
          that helps businesses create a strong digital presence. My goal is to
          turn ideas into real, impactful digital products.
        </p>
      </div>
    </section>
  );
};

export default About;