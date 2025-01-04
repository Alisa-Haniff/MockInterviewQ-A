// src/QACards.js
import React, { useState } from 'react';
import { qaData } from './data';
import './QACards.css'; // We'll add some styles next


function QACards() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleCardClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="qa-grid-container">
      {qaData.map((item, index) => (
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
