import React from 'react';
import './Homepage.css';

const Homepage = () => {
  const products = [
    {
      id: 1,
      icon: '🤖', // You can replace this with an image or icon component
      title: 'Finance Specific Chatbot',
      description: 'Chatgpt is trained to answer a wide range of questions. Fin60.fis Copilot is trained on only finance related data and data which affects the financial world. It does not give “close enough” answers but answers which are highly accurate and tailored investment recommendations. Chatgpt is only trained on data till January 2022. ',
      linkText: 'Learn More',
    },
    {
      id: 2,
      icon: '📈', // Replace with an image or icon
      title: 'Peronalized financial solutions',
      description: 'fin360.fi’s makes use of personal data such as age, income savings and expenditure and financial goals to offer short and long term customised investment strategies.',
      linkText: 'Learn More',
    },
    {
      id: 3,
      icon: '📄', // Replace with an image or icon
      title: 'Finance in 60 Seconds!',
      description: 'Master essential financial concepts in just a minute with our engaging, bite-sized videos. Perfect for busy learners, each video breaks down complex topics into simple, actionable insights.',
      linkText: 'Learn More',
    },
  ];

  return (
    <div className="homepage">
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-icon">{product.icon}</div>
            <h2 className="card-title">{product.title}</h2>
            <p className="card-description">{product.description}</p>
            <a href="#" className="card-link">
              {product.linkText} <span className="arrow">→</span>
            </a>
          </div>
        ))}
            <div className="page">Why we are different?...</div>
      </div>
    </div>


  );
};

export default Homepage;
