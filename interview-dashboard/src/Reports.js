import React from 'react';
import './App.css'; // Ensure your CSS file is imported

const Reports = () => {
    return (
        <div className="reports-container">
            <h2 className="reports-header">Interview Reports</h2>
            <table className="reports-table">
                <thead>
                    <tr>
                        <th>Total Interviews</th>
                        <th>Upcoming Interviews</th>
                        <th>Completed Interviews</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>50</td>
                        <td>20</td>
                        <td>30</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Reports;

