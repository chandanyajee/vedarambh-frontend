useEffect(() => {
  axios.get('/api/quiz/results/student', {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => setHistory(res.data));
}, []);

{history.map(result => (
  <div className="p-4 bg-white rounded shadow mb-3">
    <p><strong>Course:</strong> {result.quizId.courseId}</p>
    <p><strong>Score:</strong> {result.score}/{result.total}</p>
    <p><strong>Date:</strong> {new Date(result.submittedAt).toLocaleString()}</p>
  </div>
))}
