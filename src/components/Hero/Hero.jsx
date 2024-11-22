import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
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
    <motion.div
      id="home"
      className="hero"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I'm <span>Robiul Islam Ashiq</span>
      </motion.h1>
      <motion.img
        src={profile_img}
        alt=""
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      <h2>
        A <span>{text}.</span>{" "}
        <Cursor cursorColor="white" cursorBlinking cursorStyle="|" />{" "}
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        I'm a full stack developer specializing in building exceptional digital
        experiences. Currently, I'm focused on building responsive full-stack
        web applications.
      </motion.p>
      <motion.div
        className="hero-action"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { duration: 0.8, duration: 1 },
        }}
      >
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="hero-contact">
            <p>Contact With Me</p>
          </div>
        </AnchorLink>{" "}
        <div className="hero-resume">
          {" "}
          <a target="_blank" href={resume} download={resume}>
            {" "}
            My Resume <FaCloudDownloadAlt className="download-icon" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
