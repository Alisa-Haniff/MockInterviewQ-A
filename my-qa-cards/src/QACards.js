// src/QACards.js
import React, { useState } from 'react';
import { qaData } from './data';
import './QACards.css';

function QACards({ category }) {
  const [openIndex, setOpenIndex] = useState(null);

  // Filter data by the category prop
  const filteredData = qaData.filter((item) => item.category === category);

  const handleCardClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="qa-grid-container">
      {filteredData.map((item, index) => (
        <div
          key={index}
          className="qa-card"
          onClick={() => handleCardClick(index)}
        >
          <h3 className="qa-question">{item.question}</h3>
          {openIndex === index && (
            <p className="qa-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default QACards;
