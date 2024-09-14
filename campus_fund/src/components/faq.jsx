import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Fin360.co.in?",
      answer: "Fin360 is a platform that provides both AI-driven financial advisory and access to a panel of experienced human advisors. We help middle-class individuals manage their savings, make smart investments, and achieve their financial goals through tailored financial planning."
    },
    {
      question: "How does the AI financial advisor work?",
      answer: "Our AI model analyzes your financial information, goals, and market trends to provide personalized investment advice. It offers real-time suggestions on how to manage your savings, where to invest, and helps you stay on track with your financial goals."
    },
    {
      question: "Can I speak with a human financial advisor as well?",
      answer: "Yes! In addition to our AI advisor, we have a panel of expert financial advisors who can offer personalized guidance. You can choose to consult the AI for quick advice or schedule a one-on-one session with a human advisor for more in-depth financial planning."
    },
    {
      question: "How can Fin360 help me with financial planning?",
      answer: "Whether through our AI or human advisors, we provide detailed financial planning based on your savings, income, and goals. We guide you on how to save more efficiently, invest in the right products, and work toward achieving financial milestones like retirement, home ownership, or education funding."
    },
    
    {
      question: "Who can benefit from Fin360’s services?",
      answer: " Fin360 is designed for middle-class individuals with limited income who are seeking smart ways to manage their finances. Our services cater to anyone looking for personalized investment advice and financial planning, with easy access to both AI and human expertise."
    },
    
    
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <header className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Get answers to the most common questions about Fin360</p>
      </header>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`} 
              onClick={() => handleToggle(index)}
            >
              {faq.question}
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
