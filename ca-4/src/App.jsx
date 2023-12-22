
import React, { useState } from "react";
import Quiz from "./Components/Quiz";
import "./App.css";

// Main App component
function App() {
  // State to enable dark mode
  const [dark, setDark] = useState(false);

  // Function to cahnge or rather play with dark and light modes
  const toggleDarkMode = () => {
    setDark(!dark);
  };

  // Rendering the App component
  return (
    <div className="app" style={{ backgroundColor: dark ? "#D9D9D9" : "#02040F" }}>
      {/* Navbar section */}
      <div className="navbar">
        <h3 className="logo">Kalvium</h3>
        {/* Button to toggle dark mode */}
        <button
          className="theme"
          style={{
            backgroundColor: dark ? "#D9D9D9" : "#02040F",
            color: dark ? "#000" : "#E5DADA",
          }}
          onClick={toggleDarkMode}
        >
          {dark ? "LIGHT" : "DARK"}
        </button>
      </div>

      {/* Questions section containing the Quiz component */}
      <div
        className="questions"
        style={{
          backgroundColor: dark ? "rgba(2, 4, 15, 0.5)" : "rgba(229, 218, 218, 0.7)",
        }}
      >
        {/* Render the Quiz component */}
        <Quiz />
      </div>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
