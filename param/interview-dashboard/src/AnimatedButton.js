// AnimatedButton.js
import React from "react";
import { motion } from "framer-motion";
import "./AnimatedButton.css"; // Create a CSS file for button styles

const AnimatedButton = ({ text, onClick }) => {
  return (
    <motion.button
      className="animated-button"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;
