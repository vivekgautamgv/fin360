import React from 'react';
import './pagefive.css';
import image from '../assets/gap.png'; 
 

const PageFive = () => {
  return (
    <div className="page-five-container">
      <div className="content-wrapper">
        <div className="image-section">
          <img src={image} alt="Bridging gaps" className="illustration" />
        </div>
        <div className="text-section">
          <h1 className="title">Bridging gaps in wealth and financial literacy</h1>
          <p className="description">
            Fin360 is creating solutions to address the critical gap in financial education and to combat growing wealth disparities.
            Our mission is to make advanced, personalized financial guidance accessible to everyone and empower individuals to navigate their financial journey with confidence.
            By providing intuitive AI-driven insights, Fin360 aims to bridge the wealth gap, fostering a future where effective financial management and literacy are within reach for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageFive;
