import React, { useState } from "react";
import Questions from "./Questions"; 
import Result from "./Results"; 

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [ishighlight, setisHighlight] = useState(false)

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === Questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question or show the score
    if (currentQuestionIndex + 1 < Questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <Result score={score} totalQuestions={Questions.length} restartQuiz={restartQuiz} />
      ) : (
        <div className="question-section">
          <h2 className="heading">Question {currentQuestionIndex + 1} out of {Questions.length}</h2>
          <p className="qn" style={{
            color:`${ishighlight?"#C5001A":"white"}`
          }}>{Questions[currentQuestionIndex].text}</p>
          <div className="options">
            {Questions[currentQuestionIndex].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswerClick(option.id)}
                className="option"
              >
                {option.text}
              </button>
              
            ))}
            <div className="highlights">
                <button onClick={()=>{
                    setisHighlight(true)
                }} className="highbtn">HIGHLIGHT</button>
                <button onClick={()=>{
                    setisHighlight(false)
                }} className="highbtn">REMOVE HIGHLIGHT</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;