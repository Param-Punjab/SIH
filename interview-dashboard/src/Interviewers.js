// src/Interviewers.js

import React from 'react';

const Interviewers = () => {
  return (
    <div className="dashboard">
      <h1>Interviewers</h1>
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
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td><button>View Details</button></td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>janesmith@example.com</td>
            <td><button>View Details</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Interviewers;

