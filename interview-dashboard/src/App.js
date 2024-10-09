import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import "./Dashboard.css";
import Candidates from "./Candidates";
import Interviewers from "./Interviewers";
import Reports from "./Reports";
import Settings from "./Settings";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [tabPosition, setTabPosition] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);

  const updateTabPosition = (index) => {
    if (navRef.current) {
      const navItem = navRef.current.children[index];
      const { left, width } = navItem.getBoundingClientRect();
      const navLeft = navRef.current.getBoundingClientRect().left;
      setTabPosition({ left: left - navLeft, width });
    }
  };

  const pageVariants = {
    initial: (custom) => ({
      opacity: 0,
      x: custom.left + custom.width / 2,
      y: -50,
      scale: 0.5,
    }),
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.2,
      },
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <motion.div key="home" className="content">
            <h1>Upcoming Interviews</h1>
            <p>Details of upcoming interviews...</p>
          </motion.div>
        );
      case "interviewers":
        return <Interviewers />;
      case "candidates":
        return <Candidates />;
      case "reports":
        return <Reports />;
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <ul ref={navRef}>
          {["home", "interviewers", "candidates", "reports", "settings"].map((tab, index) => (
            <li
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => {
                setActiveTab(tab);
                updateTabPosition(index);
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            custom={tabPosition}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;