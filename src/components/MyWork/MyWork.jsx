import React, { useState } from "react";
import "./MyWork.css";
import Title from "../Title/Title";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow from "../../assets/arrow_icon.svg";
const MyWork = () => {
  const [visivle, setVisivle] =useState(3);
  const showMore=()=>{
    setVisivle(prevValue=>prevValue+3)
  }
  return (
    <div id="portfolio" className="mywork">
      <div>
        <Title text="My Work" theme_pattern={theme_pattern} />
      </div>
      <div className="mywork-card">
        {mywork_data.slice(0, visivle).map((item, index) => {
          return (
            <div key={index} className="mywork-card-item">
              <img src={item.w_img} alt="" />
              <p>{item.w_desc}</p>
            </div>
          );
        })}
      </div>
      <div onClick={showMore} className="showmore">
        <p >Show more  <img src={arrow} alt="" /></p>
       
      </div>
    </div>
  );
};

export default MyWork;
