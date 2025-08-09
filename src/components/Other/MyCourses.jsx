import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('studentToken');

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/student/my-courses', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCourses(res.data);
      } catch (err) {
        console.error('Error loading enrolled courses', err);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">My Enrolled Courses</h2>
      {courses.length === 0 ? (
        <p className="text-gray-600">You haven't enrolled in any courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div key={course._id} className="p-4 border bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
