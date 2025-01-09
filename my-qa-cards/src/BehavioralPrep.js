import React, { useState, useEffect } from 'react';
import { qaData } from './data';
import './App.css'; // Import the CSS file

function BehavioralPrep() {
  const [groupProjectResponse, setGroupProjectResponse] = useState('');
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [showAnswer, setShowAnswer] = useState({});

  const getRandomQuestions = () => {
    const shuffled = [...qaData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    setRandomQuestions(getRandomQuestions());
  }, []);

  const toggleAnswer = (index) => {
    setShowAnswer((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSubmit = () => {
    if (groupProjectResponse.trim()) {
      alert(`Your response has been submitted: ${groupProjectResponse}`);
      setGroupProjectResponse(''); // Reset the text box
    } else {
      alert('Please enter your response before submitting!');
    }
  };

  const handleMorePractice = () => {
    setRandomQuestions(getRandomQuestions());
    setShowAnswer({}); // Reset the answers visibility
  };

  return (
    <div className="App">
      <div className="category-title">Prepare for Your Behavioral Interview</div>
      <div className="content-container">
        <div className="star-intro">
          <h2>STAR Method Overview</h2>
          <p>
            We have found that most companies prefer you to use the STAR Method when answering
            interview questions. Are you familiar with the STAR method? If not, below is a short
            video to explain:
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=WRLF8ULhZmw"
              target="_blank"
              rel="noopener noreferrer"
            >
              STAR Method Video
            </a>
          </p>
        </div>

        <div>
          <h2>Group Project Collaboration</h2>
          <p>
            Think of a time you had to collaborate on a group project. Please write it below:
          </p>
          <textarea
            style={{ width: '100%', height: '100px' }}
            value={groupProjectResponse}
            onChange={(e) => setGroupProjectResponse(e.target.value)}
            placeholder="Share your experience here..."
          />
          <br />
          <button
            onClick={handleSubmit}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </div>

        <div>
          <h2>Relatable Questions</h2>
          <p>
            Can you relate your situation to one of these questions below? Click a question card to
            see a sample answer.
          </p>
          {randomQuestions.map((item, index) => (
            <div
              key={index}
              className="question-card"
              onClick={() => toggleAnswer(index)}
            >
              <p>{item.question}</p>
              {showAnswer[index] && (
                <p className="answer-text">
                  <strong>Sample Answer:</strong> {item.answer}
                </p>
              )}
            </div>
          ))}

          {/* Button for more practice */}
          <button
            onClick={handleMorePractice}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Click here for more practice
          </button>
        </div>
      </div>
    </div>
  );
}

export default BehavioralPrep;
