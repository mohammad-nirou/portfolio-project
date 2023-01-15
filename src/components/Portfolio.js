import React from "react";
import blog from "../images/blog.jpg";
import bike from "../images/bike.jpg";
import AI from "../images/AI.jpg";
import PRI from "../images/PRI.jpg";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT POPUPBOX IMPORTS
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {


// Blog
const openPopupboxBlog = () => {
  const content =(
  <div>  
  <img className="portfolio-image-popupbox" src={blog} alt="blog clone project ..." />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatibus aperiam, ab assumenda sed ipsa nobis quo tenetur quibusdam aliquam quae? Nostrum, sit, delectus amet minima rem asperiores, mollitia eligendi tenetur iure beatae magni numquam nam deserunt voluptate et! Fuga.</p>
  
  <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/mohammad-nirou/Bike_Repair_Website")}>https://github.com/mohammad-nirou/Bike_Repair_Website</a>
  
  </div>
  )
  PopupboxManager.open({ content })

}

const popupboxConfigBlog = {
  titleBar: {
    enable: true,
    text: "Blog Clone Project."
  },
  fadeIn: true,
  fadeInSpeed: 500

}

// Bike
const openPopupboxBike = () => {
  const content =(
  <div>  
  <img className="portfolio-image-popupbox" src={bike} alt="bike clone project ..." />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatibus aperiam, ab assumenda sed ipsa nobis quo tenetur quibusdam aliquam quae? Nostrum, sit, delectus amet minima rem asperiores, mollitia eligendi tenetur iure beatae magni numquam nam deserunt voluptate et! Fuga.</p>
  
  <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/mohammad-nirou/Bike_Repair_Website")}>https://github.com/mohammad-nirou/Bike_Repair_Website</a>
  
  </div>
  )
  PopupboxManager.open({ content })

}

const popupboxConfigBike = {
  titleBar: {
    enable: true,
    text: "Bike Clone Project."
  },
  fadeIn: true,
  fadeInSpeed: 500

}








  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          {/* */}
          <div className="portfolio-image-box" onClick={openPopupboxBlog}>
            <img 
              className="portfolio-image "
              src={blog}
              alt="blog project ..."
            />
            <div className="overflow" ></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* */}

          <div className="portfolio-image-box" onClick={openPopupboxBike} >
            <img
              className="portfolio-image"
              src={bike}
              alt="bike project ..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* */}

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={AI} alt="AI project ..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* */}

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={PRI} alt="PRI project ..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* */}
        </div>
      </div>
      
      <PopupboxContainer {...popupboxConfigBlog} />
      <PopupboxContainer {...popupboxConfigBike} />
    </div>
  );
};

export default Portfolio;
