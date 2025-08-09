import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('adminToken');

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/courses', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCourses(res.data);
    } catch (err) {
      alert('Failed to load courses');
    }
  };

  const deleteCourse = async (id) => {
    if (window.confirm('Are you sure to delete this course?')) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/courses/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchCourses();
      } catch (err) {
        alert('Delete failed');
      }
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Manage All Courses</h2>
      {courses.length === 0 ? (
        <p className="text-gray-600">No courses found.</p>
      ) : (
        <div className="space-y-4">
          {courses.map(course => (
            <div key={course._id} className="bg-white p-4 border rounded shadow">
              <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
              <p className="text-gray-700 mb-1">{course.description}</p>
              <p className="text-sm text-gray-500">Uploaded by: {course.teacher?.name || 'Unknown'}</p>
              <button onClick={() => deleteCourse(course._id)} className="mt-2 bg-red-600 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminManageCourses;
