import React, { useState } from "react";

const quizData = [
  {
    question: "What is Quantum Mechanics?",
    options: [
      "Study of large objects",
      "Study of particles at atomic scale",
      "Study of planets",
      "Study of electricity"
    ],
    answer: 1
  },
  {
    question: "Wave particle duality means?",
    options: [
      "Particles behave only as waves",
      "Particles behave only as particles",
      "Particles show both wave and particle nature",
      "None"
    ],
    answer: 2
  }
];

export default function Quiz({ onSubmit }) {
  const [answers, setAnswers] = useState({});

  const handleSelect = (qIndex, optionIndex) => {
    setAnswers({
      ...answers,
      [qIndex]: optionIndex
    });
  };

  const handleSubmit = () => {

    let correct = 0;

    quizData.forEach((q, i) => {
      if (answers[i] === q.answer) {
        correct++;
      }
    });

    alert(`You scored ${correct}/${quizData.length}`);

    // update quiz count
    let count = localStorage.getItem("quizCount") || 0;
    count = parseInt(count) + 1;
    localStorage.setItem("quizCount", count);

    onSubmit();
  };

  return (
    <div className="quiz-container">

      {quizData.map((q, qIndex) => (
        <div key={qIndex} className="quiz-question">

          <h4>{q.question}</h4>

          {q.options.map((opt, optIndex) => (
            <label key={optIndex}>
              <input
                type="radio"
                name={`question-${qIndex}`}
                onChange={() => handleSelect(qIndex, optIndex)}
              />
              {opt}
            </label>
          ))}

        </div>
      ))}

      <button onClick={handleSubmit}>Submit Quiz</button>

    </div>
  );
}