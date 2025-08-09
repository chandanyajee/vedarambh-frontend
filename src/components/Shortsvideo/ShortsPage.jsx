import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './ShortsPage.css';


const ShortsPage = () => {
  const [shorts, setShorts] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [video, setVideo] = useState(null);
  const [thumb, setThumb] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/shorts')
      .then(res => setShorts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!video || !token) {
      alert("Video aur login token zaruri hai.");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', desc);
    formData.append('video', video);
    if (thumb) formData.append('thumbnail', thumb);

    try {
      await axios.post('http://localhost:5000/api/shorts/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      alert("Short uploaded successfully");
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <>
    <Navbar />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📱 Sanatan Shorts</h2>

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="space-y-2 mb-6">
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full border p-2" />
        <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" className="w-full border p-2" />
        <input type="file" accept="video/*" onChange={e => setVideo(e.target.files[0])} />
        <input type="file" accept="image/*" onChange={e => setThumb(e.target.files[0])} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Upload</button>
      </form>

      {/* Reels layout */}
      <div className="flex flex-col gap-6 items-center">
        {shorts.map((item, index) => (
          <div key={index} className="w-[90vw] md:w-[400px] bg-black rounded-xl overflow-hidden shadow-lg">
            <video 
              src={`http://localhost:5000${item.videoUrl}`}
              poster={item.thumbnailUrl ? `http://localhost:5000${item.thumbnailUrl}` : ''}
              className="w-full aspect-[9/16] object-cover shortvideo"
              controls
              autoPlay
              muted
              loop
            />
            <div className="p-2 text-white bg-gray-900">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
              <p className="text-xs text-gray-400">👤 Uploaded by: {item.uploadedBy?.name || 'Unknown'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ShortsPage;
