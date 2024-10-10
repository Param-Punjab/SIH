// src/Candidates.js

import React from 'react';

const Candidates = () => {
  return (
    <div className="dashboard">
      <h1>Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data */}
          <tr>
            <td>Emily Davis</td>
            <td>emilydavis@example.com</td>
            <td><button>View Details</button></td>
          </tr>
          <tr>
            <td>Mark Johnson</td>
            <td>markjohnson@example.com</td>
            <td><button>View Details</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Candidates;

