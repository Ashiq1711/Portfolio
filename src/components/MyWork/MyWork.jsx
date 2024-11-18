import React from "react";
import "./MyWork.css";
import Title from "../Title/Title";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow from "../../assets/arrow_icon.svg";
const MyWork = () => {
  return (
    <div id="portfolio" className="mywork">
      <div>
        <Title text="My Work" theme_pattern={theme_pattern} />
      </div>
      <div className="mywork-card">
        {mywork_data.map((item, index) => {
          return (
            <div key={index} className="mywork-card-item">
              <img src={item.w_img} alt="" />
              <p>{item.w_desc}</p>
            </div>
          );
        })}
      </div>
              <div className="showmore">
                <p>Show more</p>
                <img src={arrow} alt="" />
              </div>
    </div>
  );
};

export default MyWork;
