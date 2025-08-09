// // frontend/pages/teacher/AddCourse.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from '../Navbar';
// import Footer from '../Footer';

// const AddCourse = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: '',
//     status: 'draft'
//   });
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');
//   const token = localStorage.getItem('teacherToken');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const data = new FormData();
//       data.append('title', formData.title);
//       data.append('description', formData.description);
//       data.append('category', formData.category);
//       data.append('status', formData.status);
//       if (file) data.append('file', file);

//       await axios.post('http://localhost:5000/api/teacher/course', data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       setMessage('✅ Course created successfully!');
//       setFormData({ title: '', description: '', category: '', status: 'draft' });
//       setFile(null);
//     } catch (err) {
//       console.error(err);
//       setMessage('❌ Failed to create course');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-6">
//         <h2 className="text-2xl font-semibold mb-4 text-blue-700">Add New Course</h2>
//         {message && <div className="mb-4 text-green-600 font-medium">{message}</div>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="title"
//             placeholder="Course Title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//             className="w-full border p-2 rounded"
//           />

//           <textarea
//             name="description"
//             placeholder="Course Description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//             className="w-full border p-2 rounded"
//           />

//           <input
//             type="text"
//             name="category"
//             placeholder="Category (e.g. Bhagavad Gita, Ramayan)"
//             value={formData.category}
//             onChange={handleChange}
//             required
//             className="w-full border p-2 rounded"
//           />

//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           >
//             <option value="draft">Draft</option>
//             <option value="published">Published</option>
//           </select>

//           <input
//             type="file"
//             accept=".pdf,.mp4"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="w-full border p-2 rounded"
//           />

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Add Course
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AddCourse;


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
