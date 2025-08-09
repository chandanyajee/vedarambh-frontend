import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const token = localStorage.getItem('teacherToken');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/course/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setCourse(res.data))
      .catch(err => console.error("Failed to load course", err));
  }, [id]);

  if (!course) return <div className="text-center mt-10">Loading...</div>;
  const [progress, setProgress] = useState(0);
// useEffect to fetch progress
useEffect(() => {
  if (token) {
    axios.get(`http://localhost:5000/api/student/progress/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setProgress(res.data.progress));
  }
}, [id, token]);

// UI display


  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6">
        <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
        <p className="text-gray-700 mb-3"><strong>Category:</strong> {course.category}</p>
        <p className="text-gray-600 mb-4">{course.description}</p>
        {course.fileUrl && (
          <div className="mt-4">
            <a href={course.fileUrl} className="text-blue-600 underline" target="_blank" rel="noreferrer">📥 Download Attached File</a>
          </div>
        )}
        <p className="mt-4"><strong>Status:</strong> {course.status}</p>
      </div>

          <p className="mt-4"><strong>Progress:</strong> {progress}%</p>

        {course.fileUrl && (
  <div className="mt-6">
    {course.fileUrl.endsWith('.pdf') ? (
      <iframe
        src={course.fileUrl}
        title="PDF Preview"
        width="100%"
        height="600px"
        className="border rounded"
      />
    ) : course.fileUrl.endsWith('.mp4') ? (
      <video controls width="100%" className="rounded shadow">
        <source src={course.fileUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : (
      <a href={course.fileUrl} className="text-blue-600 underline" download>
        Download Material
      </a>
    )}
  </div>
)}



      <Footer />
    </>
  );
};

export default CourseDetails;
