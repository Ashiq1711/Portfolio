import React, { useRef } from "react";
import "./Contact.css";
import Title from "../Title/Title";
import theme_pattern from "../../assets/theme_pattern.svg";
import { IoIosMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uzrk5vk", "template_fnd63ov", form.current, {
        publicKey: "kl94SiDjjE3sD1t3Z",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success('Successfully Send Email!')
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact" className="contact">
      <div>
        <Title text="Contact With Me" theme_pattern={theme_pattern} />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-via">
              <IoIosMail /> <p>robiulislam.1711@gmail.com</p>
            </div>
            <div className="contact-via">
              <MdAddCall /> <p>+ 8801778-571951</p>
            </div>
            <div className="contact-via">
              <FaLocationDot /> <p>Faridpur, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input required type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input required type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write Your Message</label>
          <textarea required rows="8" placeholder="Enter your message" name="message" />
          <button type="submit" className="contact-send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
