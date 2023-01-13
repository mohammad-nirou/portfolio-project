import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5"> MY SERVICES</h1> 
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /> </div>
                <h3>Web Design</h3>
                <p>
                  I work on each project individually and always focus on the
                  result. My goal is to create websites that are beautiful on
                  the inside and out.
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /> </div>
                <h3>Web Development</h3>
                <p>
                  My goal is to write elegant and efficient code, whether it is
                  HTML, CSS, JavaScript, or PHP. I also like to write clean
                  documentation.
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /> </div>
                <h3>Artificial Intelligence</h3>
                <p>
                  Artificial Intelligence would be the future of the world. I
                  can integrate state-of-the-art into your work.{" "}
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /> </div>
                <h3>Computer Vision</h3>
                <p>
                  You can benefit from the accuracy, speed, and authomation that
                  these systems can offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Services;
