import React from 'react';
import './Homepage.css';

const Homepage = () => {
  const products = [
    {
      id: 1,
      icon: '📦', // You can replace this with an image or icon component
      title: 'Finance Specific Chatbot',
      description: 'Chatgpt is trained to answer a wide range of questions. Fin60.fis Copilot is trained on only finance related data and data which affects the financial world. It does not give “close enough” answers but answers which are highly accurate and tailored investment recommendations. Chatgpt is only trained on data till January 2022. ',
      linkText: 'See products',
    },
    {
      id: 2,
      icon: '📈', // Replace with an image or icon
      title: 'ITR filing & Black App',
      description: 'File ITR, grow your wealth with mutual funds investments',
      linkText: 'See products',
    },
    {
      id: 3,
      icon: '📄', // Replace with an image or icon
      title: 'ClearOne',
      description: 'Invoicing and payment solutions for businesses',
      linkText: 'See products',
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
