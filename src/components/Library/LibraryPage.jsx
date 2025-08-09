import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const LibraryPage = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get('/api/library')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('pdf', pdf);
    if (image) formData.append('image', image);

    await axios.post('/api/library/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    alert('Uploaded');
    window.location.reload();
  };

  return (
    <>
    <Navbar />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📘 Online Library (with Image)</h2>

      <form onSubmit={handleUpload} className="mb-6 space-y-2">
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border p-2 w-full" />
        <input type="file" accept="application/pdf" onChange={e => setPdf(e.target.files[0])} />
        <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Upload</button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(item => (
          <div key={item._id} className="border p-2 rounded shadow">
            {item.imageUrl && (
              <img src={item.imageUrl} alt="cover" className="h-32 w-full object-cover rounded mb-2" />
            )}
            <p className="font-semibold text-sm">{item.title}</p>
            <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">📥 Download PDF</a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LibraryPage;
