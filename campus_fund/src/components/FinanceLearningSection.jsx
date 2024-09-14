import React, { useState, useEffect } from 'react';
import './FinanceLearningSection.css';
import wallet from '../assets/wallet.png';
import longTerm from '../assets/long.png';
import tradingOne from '../assets/tradingone.png';
import trading from '../assets/trading.png';

const FinanceLearningSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY >= windowHeight * 3.25) setVisibleIndex(1);
      if (scrollY >= windowHeight * 3.5) setVisibleIndex(2);
      if (scrollY >= windowHeight * 3.75) setVisibleIndex(3);
      if (scrollY >= windowHeight) setVisibleIndex(4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="finance-section">
      <h1 className="main-heading">Now Learning Becomes Easy with Finance in 60 Seconds</h1>
      <div className="finance-cards">
        <div className={`finance-card ${visibleIndex >= 1 ? 'visible' : ''}`}>
          <img src={wallet} alt="Master Money Management" />
          <h3>Master Money Management</h3>
          <p>Learn the essential skills to budget, save, and spend wisely. Take control of your financial future in just 60 seconds!</p>
        </div>

        <div className={`finance-card ${visibleIndex >= 2 ? 'visible' : ''}`}>
          <img src={longTerm} alt="Smart Investment Strategies" />
          <h3>Smart Investment Strategies</h3>
          <p>Explore how to grow your wealth by making informed and strategic investment decisions. Quick and simple guides tailored for beginners.</p>
        </div>

        <div className={`finance-card ${visibleIndex >= 3 ? 'visible' : ''}`}>
          <img src={tradingOne} alt="Basic Trading Terms" />
          <h3 className='bg-blue-500'>Basic Trading Terms</h3>
          <p>Demystify the world of trading with easy-to-understand definitions of the most common terms, helping you trade confidently.</p>
        </div>

       
      </div>
    </div>
  );
};

export default FinanceLearningSection;
