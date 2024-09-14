import React, { useEffect, useRef } from 'react';
import './footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const footer = footerRef.current;
      const footerPosition = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerPosition < windowHeight) {
        footer.classList.add('show'); // Add 'show' class when in view
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="footer-container" ref={footerRef}>
      <div className="footer-left">
        <h1>You have the power to achieve your financial goals</h1>
        <button className="signup-button">Alpha Will Launch Soon</button>
      </div>
      <div className="footer-right">
        <div className="connect">
          <h3>Connect</h3>
          <ul>
            <li>About Fin360</li>
            <li>How Fin360 Works</li>
            <li>Why Fin360</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>fin360@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Fin360.co.in, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
