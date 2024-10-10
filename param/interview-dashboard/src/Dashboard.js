// src/Dashboard.js

import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Upcoming Interviews</h1>
      <table>
        <thead>
          <tr>
            <th>Interviewer</th>
            <th>Candidate</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data, replace with real data */}
          <tr>
            <td>John Doe</td>
            <td>Jane Smith</td>
            <td>Oct 15, 2024, 10:00 AM</td>
          </tr>
          <tr>
            <td>Mark Johnson</td>
            <td>Emily Davis</td>
            <td>Oct 16, 2024, 2:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

