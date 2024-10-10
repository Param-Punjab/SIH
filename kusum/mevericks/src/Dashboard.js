import React, { useState } from 'react';
import Papa from 'papaparse';

const AdminDashboard = () => {
    const [interviewersCSV, setInterviewersCSV] = useState([]);
    const [intervieweesCSV, setIntervieweesCSV] = useState([]);
    const [interviewResults, setInterviewResults] = useState([]); // State for interview results

    const handleCSVUpload = (e, setCSV) => {
        const file = e.target.files[0];

        Papa.parse(file, {
            header: true,
            complete: function (results) {
                setCSV(results.data);
                console.log(results.data);
            }
        });
    };

    const handleSubmit = () => {
        // Match interviewers and interviewees and generate relevancy scores
        const results = interviewersCSV.map((interviewer, index) => ({
            interviewer: interviewer.name,
            interviewee: intervieweesCSV[index]?.name || 'N/A',
            relevancyScore: Math.floor(Math.random() * 100) + 1 // Example score
        }));

        setInterviewResults(results);
    };

    return (
        <div className="dashboard-container">
            <div className="header">
            <h2>Upload Credentials</h2>

                <button className="login-button">Login</button>
            </div>

            <div className="csv-upload">
                <h3>Upload Interviewers CSV</h3>
                <input type="file" onChange={(e) => handleCSVUpload(e, setInterviewersCSV)} />
            </div>

            <div className="csv-upload">
                <h3>Upload Interviewees CSV</h3>
                <input type="file" onChange={(e) => handleCSVUpload(e, setIntervieweesCSV)} />
            </div>

            <button className="submit-button" onClick={handleSubmit}>Submit</button>

            {/* Display Interview Results */}
            {interviewResults.length > 0 && (
                <div className="interview-results">
                    <h3>Interview Results</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Interviewer</th>
                                <th>Interviewee</th>
                                <th>Relevancy Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {interviewResults.map((result, index) => (
                                <tr key={index}>
                                    <td>{result.interviewer}</td>
                                    <td>{result.interviewee}</td>
                                    <td>{result.relevancyScore}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
