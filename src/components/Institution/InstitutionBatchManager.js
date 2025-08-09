import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstitutionBatchManager = () => {
  const [batches, setBatches] = useState([]);
  const [newBatch, setNewBatch] = useState('');
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('institutionToken');

  // Load batches and courses
  const fetchData = async () => {
    try {
      const [batchRes, courseRes] = await Promise.all([
        axios.get('http://localhost:5000/api/institution/batches', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get('http://localhost:5000/api/courses')
      ]);
      setBatches(batchRes.data);
      setCourses(courseRes.data);
    } catch (err) {
      console.error('Error loading data', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Create Batch
  const createBatch = async () => {
    if (!newBatch) return alert('Enter batch name');
    try {
      await axios.post('http://localhost:5000/api/institution/batch', { name: newBatch }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNewBatch('');
      fetchData();
    } catch (err) {
      alert('Failed to create batch');
    }
  };

  // Assign course
  const assignCourse = async (batchId, courseId) => {
    try {
      await axios.put(`http://localhost:5000/api/institution/batch/${batchId}/assign`, { courseId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchData();
    } catch (err) {
      alert('Assignment failed');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Batch Manager</h2>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Enter new batch name"
          value={newBatch}
          onChange={(e) => setNewBatch(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={createBatch} className="bg-green-600 text-white px-4 rounded">Add Batch</button>
      </div>

      <div className="space-y-4">
        {batches.map((batch) => (
          <div key={batch._id} className="bg-white border rounded shadow p-4">
            <h4 className="font-semibold text-lg mb-2">{batch.name}</h4>
            <p className="mb-2 text-sm text-gray-600">Assigned Courses: {batch.assignedCourses.length}</p>

            <select
              onChange={(e) => assignCourse(batch._id, e.target.value)}
              className="border p-2 rounded w-full"
              defaultValue=""
            >
              <option value="" disabled>Assign a course</option>
              {courses.map((c) => (
                <option key={c._id} value={c._id}>{c.title}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionBatchManager;
