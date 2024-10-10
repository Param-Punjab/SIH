// src/Settings.js

import React from 'react';

const Settings = ({ toggleTheme }) => {
  return (
    <div className="dashboard">
      <h1>Settings</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Settings;

