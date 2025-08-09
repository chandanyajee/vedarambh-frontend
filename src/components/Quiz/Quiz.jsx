import React, { useState } from "react";
import CreateQuiz from "./CreateQuiz";

const Quiz = ({ user }) => {
  const [quiz, setQuiz] = useState({
    title: "",
    questions: [],
  });

  const [answers, setAnswers] = useState({});

  const handleAddQuiz = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value.trim();
    if (!title) return alert("Please enter a quiz title");
    setQuiz({
      title,
      questions: [
        {
          question: "What is the capital of India?",
          options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        },
        {
          question: "Which is the largest planet?",
          options: ["Earth", "Mars", "Jupiter", "Venus"],
        },
      ],
    });
  };

  const handleAnswer = (questionIndex, optionIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex,
    });
  };

  if (user.role === "teacher" || user.role === "admin") {
    return <CreateQuiz />;
  }

  return (
    <div>
      <h1>hello </h1>
      <h2>Take Quiz</h2>

      <form onSubmit={handleAddQuiz}>
        <input
          type="text"
          name="title"
          placeholder="Quiz Title"
          style={{ padding: "8px", marginBottom: "10px" }}
        />
        <button type="submit">Save Quiz</button>
      </form>

      {quiz.questions.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>{quiz.title}</h3>
          {quiz.questions.map((q, index) => (
            <div key={index}>
              <p>
                <strong>Q{index + 1}:</strong> {q.question}
              </p>
              {q.options.map((opt, i) => (
                <label key={i} style={{ display: "block" }}>
                  <input
                    type="radio"
                    name={`q${index}`}
                    onChange={() => handleAnswer(index, i)}
                    checked={answers[index] === i}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
