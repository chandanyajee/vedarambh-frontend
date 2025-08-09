import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const BrowseCourses = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('studentToken');

  useEffect(() => {
    axios.get('http://localhost:5000/api/course/public')
      .then(res => setCourses(res.data))
      .catch(err => console.error('Failed to fetch courses', err));
  }, []);

  const handleEnroll = async (courseId) => {
    try {
      await axios.post(`http://localhost:5000/api/student/enroll/${courseId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("✅ Enrolled Successfully!");
    } catch (err) {
      alert("❌ Already Enrolled or Error!");
    }
  };

  useEffect(() => {
  axios.get(`/api/student/progress/${courseId}`, { headers })
    .then(res => setAllowed(true))
    .catch(() => navigate('/browse-courses')); // Redirect if not enrolled
}, []);


  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map(course => (
            <div key={course._id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <p className="text-sm text-gray-400 mt-2">Category: {course.category}</p>
              <button
                className="mt-3 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                onClick={() => handleEnroll(course._id)}
              >
                Enroll
              </button>
            </div>
          ))}
        </div>
      </div>


          <div>
            <ul className="list-disc pl-5">
                {student.courses?.map((c, i) => <li key={i}>{c.title}</li>)}
            </ul>
        </div>
      <Footer />
    </>
  );
};

export default BrowseCourses;
