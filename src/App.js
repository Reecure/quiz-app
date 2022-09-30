import { useState } from 'react';
import './App.css';
import questions from './data/data';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const resetButtonHandler = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  const onClickAnswerHandler = (isCorrect) => {
    const nextQuestion = currentQuestion + 1,
      increaseScore = score + 1;

    if (isCorrect === true) {
      setScore(increaseScore);
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      {showScore ? (
        <div className="scoreEnd">
          <div className="scoreection">
            You scored {score} out of {questions.length}
          </div>
          <div className="resetButton">
            <button onClick={resetButtonHandler}> RESET</button>
          </div>
        </div>
      ) : (
        <>
          <div className="questionSelection">
            <div className="questionCount">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="questionText">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answerSelection">
            {questions[currentQuestion].answerOptions.map((question, i) => {
              return (
                <button
                  onClick={() => onClickAnswerHandler(question.isCorrect)}
                  key={i}
                >
                  {question.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
