import React from 'react';
import './FinancialAdvisor.css'; 
import tickIcon from '../assets/tick1.png'; 
import h1Video from '../assets/HI.mp4'; 

const FinancialAdvisor = () => {
  return (
    <div className="financial-advisor-container">
      <div className="left-content">
        <h1 className="header">Maximize Your Financial Future potential with Our AI Advisor</h1>
        <div className="features">
          <div className="feature-item">
            <img src={tickIcon} alt="Tick Icon" className="tick-icon" />
            <p><strong>Personalized Financial Advice:</strong> Our AI-powered advisor tailors financial plans based on your unique goals, income, and expenses, ensuring strategies which align with your personal financial journey.</p>
          </div>
          <div className="feature-item">
            <img src={tickIcon} alt="Tick Icon" className="tick-icon" />
            <p><strong>Future-Proof Planning:</strong> The model helps you plan for upcoming years by forecasting your financial trajectory, including retirement savings, investments, and major life events.</p>
          </div>
          <div className="feature-item">
            <img src={tickIcon} alt="Tick Icon" className="tick-icon" />
            <p><strong>Real-Time Updates:</strong> Stay on top of your Financial health with real-time insights and recommendations as market conditions and your financial situation change.</p>
          </div>
          <div className="feature-item">
            <img src={tickIcon} alt="Tick Icon" className="tick-icon" />
            <p><strong>Comprehensive Budgeting Solutions:</strong> It offers detailed budgeting plans, from daily expenses to long-term savings goals, helping you achieve financial stability.</p>
          </div>
          <div className="feature-item">
            <img src={tickIcon} alt="Tick Icon" className="tick-icon" />
            <p><strong>Investment Optimization:</strong> Receive customized investment strategies that balance risk and return, aligning with your financial objectives and tolerance.</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <video className="advisor-video" autoPlay loop muted>
          <source src={h1Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FinancialAdvisor;
