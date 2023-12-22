
import React, { useState } from "react";
import Questions from "./Questions";
import Result from "./Results";

// Main Quiz component
function Quiz() {
  // to get or rather enable these given below
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [ishighlight, setisHighlight] = useState(false);

  // Function to handle answer option
  const handleAnswerClick = (selectedOption) => {
    // Check if the selected option is correct and update the score
    if (selectedOption === Questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question or show the score if it's the last question here we are using if condition
    if (currentQuestionIndex + 1 < Questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  // to restart the quiz
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  // Rendering the Quiz component
  return (
    <div className="quiz-container">
      {showScore ? (
        // Display the Result component if the quiz is completed
        <Result score={score} totalQuestions={Questions.length} restartQuiz={restartQuiz} />
      ) : (
        // Display the current question and options
        <div className="question-section">
          <h2 className="heading">Question {currentQuestionIndex + 1} out of {Questions.length}</h2>
        
          <p className="qn" style={{ color: `${ishighlight ? "#C5001A" : "white"}` }}>
            {Questions[currentQuestionIndex].text}
          </p>
          <div className="options">
            {/* Map through and display answer options as buttons */}
            {Questions[currentQuestionIndex].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswerClick(option.id)}
                className="option"
              >
                {option.text}
              </button>
            ))}
            {/* Highlight control buttons */}
            <div className="highlights">
              <button
                onClick={() => {
                  setisHighlight(true);
                }}
                className="highbtn"
              >
                HIGHLIGHT
              </button>
              <button
                onClick={() => {
                  setisHighlight(false);
                }}
                className="highbtn"
              >
                REMOVE HIGHLIGHT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Exporting the Quiz inside component file
export default Quiz;