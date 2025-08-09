import { useState } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';

function IDCardGenerator() {
  const [rollNo, setRollNo] = useState('');
  const [student, setStudent] = useState(null);

  const fetchStudent = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/students/${rollNo}`);
      setStudent(res.data);
    } catch (err) {
      alert("Student not found!");
      setStudent(null);
    }
  };

  const downloadCard = () => {
    const card = document.getElementById('id-card');
    html2canvas(card).then(canvas => {
      const link = document.createElement('a');
      link.download = `IDCard_Roll${rollNo}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <div className="flex gap-2">
        <input
          className="border px-3 py-2 w-full rounded"
          type="text"
          placeholder="Enter Roll No."
          value={rollNo}
          onChange={e => setRollNo(e.target.value)}
        />
        <button onClick={fetchStudent} className="bg-green-600 text-white px-4 py-2 rounded">Search</button>
      </div>

      {student && (
        <>
          <div id="id-card" className="border shadow-lg rounded p-4 text-sm w-[300px] h-[180px] bg-white">
            <h2 className="text-center font-bold text-base mb-1">🎓 VedArambh Student ID Card</h2>
            <div className="space-y-1">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Father:</strong> {student.fatherName}</p>
              <p><strong>DOB:</strong> {student.dob}</p>
              <p><strong>Mobile:</strong> {student.mobile}</p>
              <p><strong>Address:</strong> {student.address}</p>
              <p><strong>Roll No:</strong> {student.rollNo}</p>
              <p><strong>Session:</strong> {student.session || '2023-25'}</p>
            </div>
          </div>

          <button
            onClick={downloadCard}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
          >
            Download ID Card
          </button>
        </>
      )}
    </div>
  );
}

export default IDCardGenerator;
