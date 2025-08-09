import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AssignedCourses = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('studentToken');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/student/assigned-courses', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCourses(res.data);
      } catch (err) {
        alert('Failed to load assigned courses');
      }
    };
    fetchCourses();
  }, );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Courses Assigned to You</h2>
      {courses.length === 0 ? (
        <p className="text-gray-600">No courses assigned to your batch yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div key={course._id} className="bg-white border p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignedCourses;
