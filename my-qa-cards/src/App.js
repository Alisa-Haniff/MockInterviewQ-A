// src/App.js
import React from 'react';
import './App.css';
import QACards from './QACards';
import ResourceDropdown from './ResourceDropdown';

function App() {
  // Example resource arrays for each category
  const behavioralResources = [
    { title: 'Behavioral Tips Article', link: 'https://example.com/behavioral-tips' },
    { title: 'STAR Method Guide', link: 'https://example.com/star-method' },
  ];

  const technicalResources = [
    { title: 'Data Structures Overview', link: 'https://example.com/data-structures' },
    { title: 'System Design Basics', link: 'https://example.com/system-design' },
  ];

  return (
    <div className="App">

      {/* Intro paragraph explaining the STAR method */}
      <section className="star-intro">
        <h2>Understanding the STAR Method</h2>
        <p>
          We’ve found that many companies expect you to use the STAR method when answering
          behavioral questions. STAR stands for Situation, Task, Action, and Result, and it’s
          a structured approach that helps you clearly illustrate your experiences. By outlining
          a specific situation, explaining the task at hand, describing the actions you took, and
          summarizing the results, you give interviewers a clear, concise view of how you tackle
          challenges and work effectively in various scenarios.
        </p>
      </section>

      <h1 className="category-title">Behavioral Questions</h1>
      <QACards category="Behavioral" />

      {/* Dropdown for Additional Behavioral Resources */}
      <ResourceDropdown
        label="Additional Behavioral Resources"
        resources={behavioralResources}
      />

      <h1 className="category-title">Technical Questions</h1>
      <QACards category="Technical" />

      {/* Dropdown for Additional Technical Resources */}
      <ResourceDropdown
        label="Additional Technical Resources"
        resources={technicalResources}
      />
    </div>
  );
}

export default App;
