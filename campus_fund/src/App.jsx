import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import logo from './assets/logo.png';





const App = () => {
  return (
    <>
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
  <div className="logo">
    <img src={logo} alt="FinChat Logo" /> {/* Replace with logo path */}
    <span className="logo-name">Fin360</span> {/* Add this line */}
  </div>
  <div className="nav-links">
    <a href="#">Pricing</a>
    <a href="#">Fin360</a>
    <a href="#">About Us</a>
    <button className="dashboard-btn">Sign Up Free</button>
  </div>
</nav>
      
      {/* Main Content */}
      <div className="main-content">
        <p className="live-notification">
          FinChat v4 is now live! 🎉
        </p>
        <h1><text>The future of Financial Planning,<br/>Learning and Investing powered by AI.</text></h1>

        {/* Search Bar with Questions */}
        <div className="questions">
          <div className="question">What is Spotify's premium subscriber count?</div>
          <div className="question">Show me stocks in South America with the highest dividend yield.</div>
          <div className="question">Summarize Microsoft's latest earnings call.</div>
          <div className="question">What are Mark Zuckerberg's and Satya Nadella's recent comments about AI?</div>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search your next investment idea..." />
        </div>
      </div>
    </div>

    </>
  );
};



export default App;

