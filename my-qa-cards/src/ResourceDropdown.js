// src/ResourceDropdown.js
import React, { useState } from 'react';
import './ResourceDropdown.css'; // optional styling

function ResourceDropdown({ label, resources }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="resource-dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {label}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {resources.map((resource, index) => (
            <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResourceDropdown;
