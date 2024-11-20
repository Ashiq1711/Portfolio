import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div className="footer">
        <ScrollToTop smooth top='1500' color="white"   style={{
          backgroundColor: "#36342f", // Change to your desired color
                   // Optional: adjust padding
        }} />
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="footer-logo" src={logo} alt="" />
          <p>
            I'm a full stack developer specializing in building exceptional
            digital experiences. Currently, I'm focused on building responsive
            full-stack web applications.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email">
          <FaRegUser className="user-icon"/>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>Copyright © 2025. All rights reserved</p>
        </div>
        <div className="footer-bottom-right">
          <p>Created by Robiul Islam Ashiq</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
