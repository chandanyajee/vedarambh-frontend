import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const StudentProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    class: ''
  });
  const token = localStorage.getItem('studentToken');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/student/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setFormData({
          name: res.data.name || '',
          institution: res.data.institution || '',
          class: res.data.class || ''
        });
      } catch (err) {
        console.error('Error loading profile', err);
      }
    };
    fetchProfile();
  }, [token]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put('http://localhost:5000/api/student/profile', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert(res.data.message);
    } catch (err) {
      alert('Update failed');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-6">
        <h2 className="text-xl font-bold mb-4 text-blue-800">Update Profile</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            placeholder="Institution Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            placeholder="Class"
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Update Profile
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default StudentProfile;
