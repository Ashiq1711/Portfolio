import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/fiverProfile.jpg";
import Title from "../Title/Title";
const About = () => {
  return (
    <div id="about" className="about">
      <div >
        <Title text="About Me" theme_pattern={theme_pattern} />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-pera">
            <p>
              I'm a full stack developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building responsive
              full-stack web applications.
            </p>
            <p>
              My skills include HTML, CSS, JavaScript, React, Node.js, Express,
              MongoDB, and more.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>03+</h1>
          <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>28+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>GitHub Repositories</p>
        </div>
      
      </div>
    </div>
  );
};

export default About;
