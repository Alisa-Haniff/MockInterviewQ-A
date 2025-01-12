import React, { useState, useEffect } from 'react';
import { level1Questions, level2Questions, level3Questions } from './questionsData';
import './App.css'; // Import the CSS file

function BehavioralPrep() {
  const [groupProjectResponse, setGroupProjectResponse] = useState('');
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [showAnswer, setShowAnswer] = useState({});

  // Function to get random questions for each level
  const getRandomQuestionsByLevel = () => {
    const level1 = level1Questions[Math.floor(Math.random() * level1Questions.length)];
    const level2 = level2Questions[Math.floor(Math.random() * level2Questions.length)];
    const level3 = level3Questions[Math.floor(Math.random() * level3Questions.length)];
    return [
      { level: 1, question: level1 },
      { level: 2, question: level2 },
      { level: 3, question: level3 },
    ];
  };

  useEffect(() => {
    setRandomQuestions(getRandomQuestionsByLevel());
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
    setRandomQuestions(getRandomQuestionsByLevel());
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
          <h2>Brainstorming Collaboration For An Interview</h2>
          <p>
            Think of a senerio that can relate to a possible interview question. For some topic ideas, you can think of an achievement, envolement in an organization or project, etc; 
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
          <h2>Common behavioral questions by level that can give you an idea of how to relate it to your senerio you wrote above</h2>
          <p>
            Each card displays a random question from its corresponding level. Click a card to see
            a sample answer.
          </p>
          {randomQuestions.map((item, index) => (
            <div
              key={index}
              className="question-card"
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '10px',
                background: '#f9f9f9',
              }}
              onClick={() => toggleAnswer(index)}
            >
              <p><strong>Level {item.level}:</strong> {item.question}</p>
              {showAnswer[index] && (
                <p className="answer-text">
                  <strong>Sample Answer:</strong> Answer placeholder for Level {item.level}.
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

