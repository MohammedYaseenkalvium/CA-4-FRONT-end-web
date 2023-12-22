import React, { useState } from "react";
import Quiz from "./Components/Quiz"; 
import "./App.css"

function App() {
  const [dark,setDark] = useState(false);
  

  const toggleDarkMode=()=>{
    setDark(!dark)
  }
  return (
    <div className="app" style={{backgroundColor: dark ? "#D9D9D9" : "#02040F"}}>
      <div className="navbar">
        <h3 className="logo">Kalvium</h3>
        <button className="theme" style={{ backgroundColor: dark ? "#D9D9D9" : "#02040F",
        color: dark ? "#000" : "#E5DADA",
       }}
          onClick={toggleDarkMode}> {dark ? "LIGHT" : "DARK"}</button>
      </div>
      <div className="questions" style={{backgroundColor:dark? "rgba(2, 4, 15, 0.5)" : "rgba(229, 218, 218, 0.7)"}}>
        <Quiz /> 
      </div>
    </div>
  );
}

export default App;