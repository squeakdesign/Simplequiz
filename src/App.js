import React, { useState } from "react";
import "./App.css";

function App() {
  //Properties
  const [showFinalResults, setFinalResults] = useState(false);
  const [Score, setScore] = useState(0);
  const [CurrentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "JavaScript is the programming language of the ---- ?",
      options: [
        { id: 0, text: "Desktop", isCorrect: false },
        { id: 1, text: "Web", isCorrect: true },
        { id: 2, text: "Server", isCorrect: false },
      ],
    },

    {
      text: "Which of the following is not a valid Javascript loop statement?",
      options: [
        { id: 0, text: "for", isCorrect: false },
        { id: 1, text: "While", isCorrect: true },
        { id: 2, text: "do.while", isCorrect: false },
      ],
    },

    {
      text: "Which Javascript method is used to access an HTML element by id?",
      options: [
        { id: 0, text: "getElementById()", isCorrect: false },
        { id: 1, text: "getElement(id)", isCorrect: false },
        { id: 2, text: "getElementById(id)", isCorrect: true },
      ],
    },

    {
      text: "Which event occurs when the user clicks on an HTML element?",
      options: [
        { id: 0, text: "onmouseover", isCorrect: false },
        { id: 1, text: "onclick", isCorrect: true },
        { id: 2, text: "onchange", isCorrect: false },
      ],
    },
  ];

  //Helper functions

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(Score + 1);
    }

    if (CurrentQuestion + 1 < questions.length) {
      setCurrentQuestion(CurrentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };
  return (
    <div className="App">
      {/* 1. Header */}
      <h1> Java Script Quiz</h1>

      {/* 2.Current Score*/}
      <h2>Current Score : {Score}</h2>

      {/* 4. Final Results */}
      {showFinalResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {Score} out of {questions.length} correct - (
            {(Score / questions.length) * 100})
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 3.Question Card */

        <div className="question-card">
          <h2>
            Question {CurrentQuestion + 1}out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[CurrentQuestion].text}</h3>

          <ul>
            {questions[CurrentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
