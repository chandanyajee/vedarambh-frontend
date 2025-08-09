import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('teacherToken');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: ''
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/teacher/courses/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setFormData({
          title: res.data.title,
          description: res.data.description,
          content: res.data.content
        });
      } catch (err) {
        alert('Failed to load course');
      }
    };
    fetchCourse();
  }, [id, token]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/teacher/courses/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Course updated successfully');
      navigate('/teacher/my-courses');
    } catch (err) {
      alert('Update failed');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Edit Course</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border p-2 rounded" required />
        <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="content" value={formData.content} onChange={handleChange} className="w-full border p-2 rounded h-32" />
        <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">Update Course</button>
      </form>
    </div>
  );
};

export default EditCourse;
