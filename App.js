import React, { useState } from "react";
import "./App.css";

function App() {
  const [showResult, setResult] = useState(false);
  const [score,setScore] = useState(0)
  const [currentQuestion,setCurrentQuestion] = useState(0)

  const questions = [
    {
      text: "There are ___ levels of heading in HTML?",
      options: [
        { id: 0, text: "Three", isCorrect: false },
        { id: 1, text: "Four", isCorrect: false },
        { id: 2, text: "Five", isCorrect: false },
        { id: 3, text: "Six", isCorrect: true },
      ],
    },
    {
      text: "The purpose of markup is to?",
      options: [
        { id: 1, text: "add hypertext capabilities", isCorrect: false },
        { id: 2, text: "enhance the document", isCorrect: false },
        { id: 0, text: "both A & B", isCorrect: true },
        { id: 3, text: "none of the above", isCorrect: false },
      ],
    },
    {
      text: "Which of the following tags do not require a terminator?",
      options: [
        { id: 0, text: "<br>", isCorrect: true },
        { id: 1, text: " <u>", isCorrect: false },
        { id: 2, text: "<b>", isCorrect: false },
        { id: 3, text: "none of the above", isCorrect: false },
      ],
    },
    {
      text: " To get the ordered list we use?",
      options: [
        { id: 0, text: "<h1>", isCorrect: false },
        { id: 1, text: "<ol>", isCorrect: true },
        { id: 2, text: "<ml>", isCorrect: false },
        { id: 3, text: "<ul>", isCorrect: false },
      ],
    },
    {
      text: "For a particular font its size attribute can be an absolute value ranging form?",
      options: [
        { id: 0, text: "1-9", isCorrect: false },
        { id: 1, text: "1-10", isCorrect: true },
        { id: 2, text: "1-8", isCorrect: false },
        { id: 3, text: "1-7", isCorrect: false },
      ],
    },
  ];

const optionClicked = (isCorrect)=> {
if(isCorrect){
  setScore(score + 1)
}

if(currentQuestion + 1 < questions.length){
  
  setCurrentQuestion(currentQuestion + 1)
} else{
  setResult(true)
}
}




  return (
    <div className="App">
      <h1 className="top">QUIZ APP</h1>
      <h2>Current Score : {score}</h2>

      {showResult ? (
        <div className="result">
          <h1>Final Score</h1>
          <h2>
            {score} out of {questions.length} correct - ({(score/questions.length)* 100}%)
           </h2>
        </div>
      ) : (
        <div className="questionCard">
          <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
          <h2>{questions[currentQuestion].text}</h2>

          <ul>
            {questions[currentQuestion].options.map((option)=>{
              return(<li onClick={()=>optionClicked(option.isCorrect)} key = {option.id} >{option.text}</li>)
            })}
          </ul>
        </div>
      )}
      
    </div>
  );
}

export default App;
