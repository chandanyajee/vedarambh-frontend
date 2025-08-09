import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const TeacherMyCourses = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('teacherToken');

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/teacher/my-courses', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCourse = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await axios.delete(`http://localhost:5000/api/teacher/courses/${id}`, {
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
    <>
    <Navbar />
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">My Courses</h2>
      <div className="space-y-4">
        {courses.map(course => (
          <div key={course._id} className="p-4 bg-white border rounded shadow">
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-gray-700">{course.description}</p>
            <div className="mt-2 flex gap-2">
              <button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => alert('Edit feature coming soon!')}>Edit</button>
              <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => deleteCourse(course._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TeacherMyCourses;
