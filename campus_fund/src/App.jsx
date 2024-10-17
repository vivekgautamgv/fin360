import React from 'react';
// import './App.css'; 
import logo from './assets/logo.png';
import HomePage from './components/Homepage';
import PageThird from './components/pagethird';
import FinanceLearningSection from './components/FinanceLearningSection.jsx';
import FinancialAdvisor from './components/FinancialAdvisor.jsx';
import PageFive from './components/pagefive.jsx'
import FAQ from './components/faq.jsx'
import Footer from './components/footer.jsx';



function App() {
  return (
    <>

      <div className="app">
       
        {/* <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="FinChat Logo" />
            <span className="logo-name">Fin360</span>
          </div>
          <div className="nav-links">
            <a href="#">Pricing</a>
            <a href="#">Fin60</a>
            <a href="#">About Us</a>
            <button className="dashboard-btn">Sign Up Free</button>
          </div>
        </nav> */}

        
        <div className="main-content">
          <p className="live-notification">
          🎉 Fin360 website is now live! 🎉
          </p>
          <h1><text>Hi, Thank you for visiting..<br />Checkout v1.0 on Nov 1 2024....</text></h1>

          {/* <div className="questions">
            <div className="question">What is the total AUM of ICICI Prudential Mutual Fund?</div>
            <div className="question">Show me Indian stocks with the highest dividend yield.</div>
            <div className="question">Summarize Reliance Industries' latest earnings call.</div>
            <div className="question">What are the recent comments from Nandan Nilekani and Uday Kotak about the future of AI in India?</div>
          </div> */}

       <div className="ann">Ready to be a part of Financial revolution of india</div>
          {/* <div className="search-bar">
            <input type="text" placeholder="Search your next investment idea..." />
          </div> */}
        </div>
      </div>
      {/* <div>
          <FinanceLearningSection/>
        </div>

      
      <div>
        <PageThird />
        </div> */}
{/* 
        <div>
        <HomePage />
      </div> */}
      {/* <div>
        <FinancialAdvisor/>
      </div>
      <div>
        <PageFive/>
      </div>
     <div><FAQ/></div>
     <div><Footer/></div> */}
    </>
  );
}



export default App;
