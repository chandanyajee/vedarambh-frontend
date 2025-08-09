import React, { useState, useEffect } from "react";

const StudentQuiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds per question
  const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(30);
    } else {
      alert("✅ Quiz finished!");
      console.log("Your answers:", answers);
    }
  };

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
    handleNext();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          handleNext(); // auto move
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>📝 Student Quiz</h2>
      <p>
        Question {currentQuestion + 1} of {questions.length}
      </p>
      <p>⏳ Time Left: {timeLeft}s</p>

      <div style={{ margin: "20px 0", fontSize: "18px" }}>
        <strong>{questions[currentQuestion].question}</strong>
        {questions[currentQuestion].options.map((opt, i) => (
          <div key={i} style={{ marginTop: "8px" }}>
            <button
              onClick={() => handleAnswer(opt)}
              style={{
                padding: "8px 16px",
                margin: "4px",
                cursor: "pointer",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              {opt}
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        style={{
          padding: "8px 16px",
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Skip
      </button>
    </div>
  );
};

export default StudentQuiz;
