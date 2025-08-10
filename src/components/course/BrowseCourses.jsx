import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';


const BrowseCourses = () => {
  const [courses, setCourses] = useState([]);
  const [student, setStudent] = useState({});
  const [allowed, setAllowed] = useState(false);
  const token = localStorage.getItem('studentToken');
  const { courseId } = useParams();
  const navigate = useNavigate();

  // Common headers for API requests
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  // Fetch all available courses
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/course/public')
      .then((res) => setCourses(res.data))
      .catch((err) => console.error('Failed to fetch courses', err));
  }, []);

  // Enroll in a course
  const handleEnroll = async (courseId) => {
    try {
      await axios.post(
        `http://localhost:5000/api/student/enroll/${courseId}`,
        {},
        { headers }
      );
      alert('✅ Enrolled Successfully!');
    } catch (err) {
      alert('❌ Already Enrolled or Error!');
    }
  };

  // Check if student is allowed to access a specific course
  useEffect(() => {
    if (!courseId) return; // Only run if courseId is available
    axios
      .get(`http://localhost:5000/api/student/progress/${courseId}`, { headers })
      .then(() => setAllowed(true))
      .catch(() => navigate('/browse-courses'));
  }, [courseId, navigate, headers]);

  // Fetch student details (for enrolled courses list)
  useEffect(() => {
    if (!token) return;
    axios
      .get('http://localhost:5000/api/student/profile', { headers })
      .then((res) => setStudent(res.data))
      .catch((err) => console.error('Failed to fetch student data', err));
  }, [token, headers]);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
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

        {/* Show student's enrolled courses */}
        <div className="mt-8">
          <h3 className="text-lg font-bold">Your Enrolled Courses</h3>
          <ul className="list-disc pl-5">
            {student?.courses?.map((c, i) => (
              <li key={i}>{c.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrowseCourses;
