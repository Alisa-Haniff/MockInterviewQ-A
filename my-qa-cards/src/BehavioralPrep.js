import React, { useState } from 'react';

function BehavioralPrep() {
  // This state will store the user’s response about collaborating on a group project
  const [groupProjectResponse, setGroupProjectResponse] = useState('');

  // Optional handler for submission (you can expand this later to save the input, send it to a server, etc.)
  const handleSubmit = () => {
    console.log(groupProjectResponse);
    alert('Your response has been captured!');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h1>Prepare for Your Behavioral Interview</h1>
      <p>
        We have found that most companies prefer you to use the STAR Method when answering
        interview questions. Are you familiar with the STAR method? If not, below is a short video
        to explain:
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
      <button onClick={handleSubmit} style={{ marginTop: '1rem' }}>
        Submit
      </button>
    </div>
  );
}

export default BehavioralPrep;
