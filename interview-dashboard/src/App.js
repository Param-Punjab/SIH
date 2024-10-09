import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css"; // Import the CSS file for styles

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    duration: 0.5, // Adjust the transition duration
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <motion.div
            key="home"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="content"
          >
            <h1>Upcoming Interviews</h1>
            <p>Details of upcoming interviews...</p>
          </motion.div>
        );
      case "interviewers":
        return (
          <motion.div
            key="interviewers"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="content"
          >
            <h1>Interviewers</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>More Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>View</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        );
      case "candidates":
        return (
          <motion.div
            key="candidates"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="content"
          >
            <h1>Candidates</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>More Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jane Smith</td>
                  <td>jane@example.com</td>
                  <td>View</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        );
      case "reports":
        return (
          <motion.div
            key="reports"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="content report-section"
          >
            <h1>Reports</h1>
            <div className="reports-box">
              <div className="report-item">
                <h2>Total Interviews</h2>
                <p>50</p>
              </div>
              <div className="report-item">
                <h2>Upcoming Interviews</h2>
                <p>15</p>
              </div>
              <div className="report-item">
                <h2>Completed Interviews</h2>
                <p>35</p>
              </div>
            </div>
          </motion.div>
        );
      case "settings":
        return (
          <motion.div
            key="settings"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="content"
          >
            <h1>Settings</h1>
            <p>Change theme, preferences...</p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li
            className={activeTab === "home" ? "active" : ""}
            onClick={() => setActiveTab("home")}
          >
            Home
          </li>
          <li
            className={activeTab === "interviewers" ? "active" : ""}
            onClick={() => setActiveTab("interviewers")}
          >
            Interviewers
          </li>
          <li
            className={activeTab === "candidates" ? "active" : ""}
            onClick={() => setActiveTab("candidates")}
          >
            Candidates
          </li>
          <li
            className={activeTab === "reports" ? "active" : ""}
            onClick={() => setActiveTab("reports")}
          >
            Reports
          </li>
          <li
            className={activeTab === "settings" ? "active" : ""}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        <AnimatePresence>
          {renderContent()}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;

