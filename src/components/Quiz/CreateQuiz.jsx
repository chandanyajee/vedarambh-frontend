import React, { useState } from "react";
import axios from "axios";

const CreateQuiz = ({ courseId, token }) => {
  const [quiz, setQuiz] = useState({
    title: "",
    questions: [],
  });

  const handleChange = (e) => {
    setQuiz({ ...quiz, title: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `/api/courses/${courseId}/quiz`,
        quiz,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Quiz created:", response.data);
      alert("Quiz created successfully!");
      // optionally reset the form
      setQuiz({ title: "", questions: [] });
    } catch (err) {
      console.error("Failed to create quiz", err);
      alert("Failed to create quiz.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Quiz Title:</label>
          <input
            type="text"
            value={quiz.title}
            onChange={handleChange}
            placeholder="Enter quiz title"
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            required
          />
        </div>

        {/* you can add fields to add questions here */}
        <button type="submit" style={{ padding: "8px 16px" }}>
          Create Quiz
        </button>
      </form>
    </div>
  );
};

export default CreateQuiz;
