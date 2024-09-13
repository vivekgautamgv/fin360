import React from 'react';
import './pagethree.css';
import icon from '../assets/icon.png'; // Adjust the path based on the actual structure of your project
import { CSSTransition } from 'react-transition-group';

const PageThird = () => {
  const [inProp, setInProp] = React.useState(false);

  React.useEffect(() => {
    // Trigger animation when the component is mounted
    setInProp(true);
  }, []);

  return (
    <CSSTransition in={inProp} timeout={500} classNames="page-animation" unmountOnExit>
      <div className="page-third-container">
        <div className="content-box">
          <div className="data-image">
            <img src={icon} alt="Checkmark" className="checkmark-icon" />
          </div>
          <div className="text-content">
            <h1>Make Financial Planning with finance specific LLM Model</h1>
            <p className="highlight-text">
              Using a large language model, we generated responses that offered you richer insights to support your decision-making process.
            </p>
            <div className="button-section">
              <button className="info-button">Now Take Better financial Decisions</button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default PageThird;
