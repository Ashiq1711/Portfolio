import React from "react";
import "./Service.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data";
import arrow from "../../assets/arrow_icon.svg";
import Title from "../Title/Title";
const Service = () => {
  return (
    <div id="servise" className="services">
      <div>
       <Title text="Services" theme_pattern={theme_pattern} />
      </div>
      <div className="service-card">
        {services_data.map((item, index) => {
          return (
            <div key={index} className="service-card-item">
             
                <h3>{item.s_no}</h3>
                <h1>{item.s_name}</h1>
              
                <p>{item.s_desc}</p>
                <div className="services-redmore">
                  <p>Read more</p>
                  <img src={arrow} alt="" />
                </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
