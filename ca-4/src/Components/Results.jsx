import React from "react";
import "../App.css"

function Result({ score, totalQuestions, restartQuiz }) {
   const scoreper=Math.floor((score/totalQuestions)*100)
  return (
    <div className="score-section">
        <h1>RESULTS</h1>
        <h2 className="msg">CONGRATULATIONS IF YOU GET BAD MARKS THEN WORK HARD THIS IS NOT THE END BUT IF YOU SCORED WELL THEN KEEP UP THE WORK</h2>
      <h2>Your Score: {scoreper}%</h2>
      <button onClick={restartQuiz} className="retry">RETRY</button>
    </div>
  );
}

export default Result;