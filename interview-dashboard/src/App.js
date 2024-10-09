import React, { useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // Importing CSSTransition and TransitionGroup
import "./App.css";
import "./Dashboard.css";
import Candidates from "./Candidates";
import Interviewers from "./Interviewers";
import Reports from "./Reports";
import Settings from "./Settings";
import AnimatedButton from "./AnimatedButton";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div key="home" className="content">
            <h1>Upcoming Interviews</h1>
            <p>Details of upcoming interviews...</p>
          </div>
        );
      case "interviewers":
        return (
          <div key="interviewers">
            <Interviewers />
            <AnimatedButton text="Add Interviewers" onClick={() => alert("Add Interviewers Clicked!")} />
          </div>
        );
      case "candidates":
        return (
          <div key="candidates">
            <Candidates />
            <AnimatedButton text="Add Candidates" onClick={() => alert("Add Candidates Clicked!")} />
          </div>
        );
      case "reports":
        return <Reports key="reports" />;
      case "settings":
        return <Settings key="settings" />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <h1 className="dashboard-title">Dashboard</h1>

      <nav className="navbar">
        <ul>
          {["home", "interviewers", "candidates", "reports", "settings"].map((tab) => (
            <li
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <TransitionGroup>
          <CSSTransition key={activeTab} timeout={300} classNames="fade">
            {renderContent()}
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  );
}

export default App;
