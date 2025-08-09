import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import AddCourse from '../course/AddCourse';

const StudentCourses = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('studentToken');

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/courses');
      setCourses(res.data);
    } catch (err) {
      console.error('Failed to load courses', err);
    }
  };

  const enrollCourse = async (courseId) => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/student/enroll/${courseId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert(res.data.message);
    } catch (err) {
      alert('Enrollment failed');
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Available Courses</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {courses.map((course) => (
            <div key={course._id} className="border rounded p-4 bg-white shadow">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700 mb-3">{course.description}</p>
              <button
                onClick={() => enrollCourse(course._id)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default StudentCourses;
