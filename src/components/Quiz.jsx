import React, { useState } from "react";
import quizData from "../quizData";
import css from "./Quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleQuizReset = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <div>
            You scored {score} out of {quizData.length}
          </div>
          <button onClick={handleQuizReset}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestion + 1} / {quizData.length}
            </div>
            <div className="question-text">
              {quizData[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {quizData[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-buttons">
            {currentQuestion < quizData.length - 1 ? (
              <button onClick={handleNextQuestion}>Next</button>
            ) : (
              <button className="submit" onClick={() => setShowScore(true)}>Submit</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

