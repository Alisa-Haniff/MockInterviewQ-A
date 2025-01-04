// src/App.js
import React from 'react';
import './App.css';
import QACards from './QACards';

function App() {
  return (
    <div className="App">
      <h1 className="category-title">Behavioral Questions</h1>
      <QACards category="Behavioral" />

      <h1 className="category-title">Technical Questions</h1>
      <QACards category="Technical" />
    </div>
  );
}

export default App;
