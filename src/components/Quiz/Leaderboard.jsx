import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from API
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/leaderboard"); // adjust URL
        setLeaderboard(res.data);
      } catch (err) {
        console.error("Failed to fetch leaderboard", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.length === 0 ? (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          ) : (
            leaderboard.map((user, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.studentId?.name}</td>
                <td>
                  {user.score}/{user.total}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
