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
    
    {
      question: "What is the 60-second financial content feature?",
      answer: " Our 60-second content feature delivers short, educational videos and articles on basic financial terms and concepts. It’s perfect for users looking to quickly grasp financial topics, such as budgeting, investing, or tax planning, in a format that’s engaging and easy to understand."
    },

    {
      question: "What topics are covered in the 60-second finance content?",
      answer: "We cover a wide array of financial topics including budgeting, investment strategies, savings tips, debt management, tax planning, retirement preparation, and more. The content is designed to boost your financial knowledge in just a minute."
    },
    
    {
        question: "How does the AI advisor differ from human advisors?",
        answer: "The AI advisor provides instant, data-driven recommendations based on your financial profile, while human advisors offer personalized, detailed advice with the added value of experience and human insight. You can use both services to get a well-rounded financial plan."
      },
      {
        question: "How can I join the Fin360 community?",
        answer: "By signing up on our platform, you gain access to the community space where you can connect with other users, participate in discussions, share financial tips, and get answers to your finance-related questions."
      },
      {
        question: "Is Fin360’s financial advisory service free?",
        answer: "Our basic AI advisory service is free, along with access to 60-second educational content and the community space. For more advanced financial planning and personalized sessions with human advisors, we offer premium plans at competitive rates."
      },
      {
        question: "What investment options does Fin360 recommend?",
        answer: "Based on your financial situation, the AI and our advisors will recommend investment options tailored to your goals. These may include mutual funds, stocks, bonds, fixed deposits, or government-backed schemes to ensure balanced growth and security."
      },
      {
        question: "Can Fin360 help with tax planning?",
        answer: "Yes, both the AI model and our human advisors provide tax-saving strategies tailored to your financial profile. We help you optimize your investments for tax benefits under schemes such as ELSS, PPF, and others."
      },
      {
        question: "How secure is my financial information on Fin360?",
        answer: "We prioritize your privacy and security. All financial data you share with us is encrypted, and we employ top-tier security measures to protect your personal and financial information from unauthorized access."
      },
      {
        question: "What makes Fin360 different from other financial platforms?",
        answer: "Fin360 offers a unique blend of AI-driven financial advice and access to human experts. Our AI advisor provides instant, personalized recommendations, while our human advisors add value with detailed, experience-based insights. Plus, our 60-second educational content helps users quickly learn essential financial concepts."
      },
      {
        question: "How do I get started with Fin360?",
        answer: "It’s easy! Sign up on our website or app, provide your financial details and goals, and start receiving AI-driven advice right away. For personalized sessions, you can schedule time with our human advisors to further refine your financial plan."
      },
      {
        question: "Is there a way to combine AI and human advice?",
        answer: "Yes, Fin360 allows you to use both AI and human advisory services together. You can start with the AI for quick advice and consult a human advisor for a more comprehensive plan. Both systems work hand-in-hand to provide the best financial guidance."
      },
      {
        question: "How often can I access my financial plan?",
        answer: "You can access your financial plan anytime through your dashboard on Fin360. The AI continuously updates your plan based on market trends and your financial activities, ensuring that your strategy stays relevant and effective."
      },
      {
        question: "Is Fin360 available on mobile?",
        answer: "Yes, Fin360 is accessible on both desktop and mobile platforms, allowing you to manage your finances and receive advice wherever you are. Simply download our app or use our website to get started."
      }
    
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
