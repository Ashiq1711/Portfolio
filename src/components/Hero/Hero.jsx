import React from "react";
import "./Hero.css";
import profile_img from "../../assets/pp.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Ashiq.dev.pdf";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Backend Developer", "MERN Stack Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div id="home" className="hero">
      <h1>
        I'm <span>Robiul Islam Ashiq</span>
      </h1>
      <img src={profile_img} alt="" />
      <h2>A <span>{text}.</span> <Cursor cursorColor="white" cursorBlinking cursorStyle="|"  /> </h2>

      <p>
        I'm a full stack developer specializing in building exceptional digital
        experiences. Currently, I'm focused on building responsive full-stack
        web applications.
      </p>
      <div className="hero-action">
        <div className="hero-contact">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact With Me</p>
          </AnchorLink>{" "}
        </div>
        <div className="hero-resume">
          {" "}
          <a target="_blank" href={resume} download={resume}>
            {" "}
            My Resume <FaCloudDownloadAlt className="download-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
