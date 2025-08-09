import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';


const StudentCourseDetails = () => {
  const { id } = useParams(); // course ID from URL
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error('Failed to fetch course details', err);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">{course.title}</h2>
        <p className="text-gray-700 mb-6">{course.description}</p>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h4 className="font-semibold mb-2">Course Content:</h4>
          <p>{course.content}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default StudentCourseDetails;
