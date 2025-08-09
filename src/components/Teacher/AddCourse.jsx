import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [formData, setFormData] = useState({
    title: '', description: '', category: '', status: 'draft'
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('teacherToken');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (file) data.append('file', file);

    try {
      await axios.post('http://localhost:5000/api/teacher/course', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('✅ Course added!');
      setFormData({ title: '', description: '', category: '', status: 'draft' });
    } catch (err) {
      setMessage('❌ Error');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Course</h2>
      {message && <div>{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" onChange={handleChange} value={formData.title} className="w-full border p-2" />
        <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} className="w-full border p-2" />
        <input name="category" placeholder="Category" onChange={handleChange} value={formData.category} className="w-full border p-2" />
        <select name="status" value={formData.status} onChange={handleChange} className="w-full border p-2">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <input type="file" accept=".pdf,.mp4" onChange={(e) => setFile(e.target.files[0])} />
        <button className="bg-blue-600 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
};

export default AddCourse;
