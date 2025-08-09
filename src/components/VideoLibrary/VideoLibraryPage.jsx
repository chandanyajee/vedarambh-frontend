import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const VideoLibraryPage = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [isYouTube, setIsYouTube] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [thumb, setThumb] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('/api/videolibrary')
      .then(res => setVideos(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', desc);
    formData.append('isYouTube', isYouTube);

    if (isYouTube) {
      formData.append('youtubeUrl', youtubeUrl);
    } else {
      formData.append('video', videoFile);
    }

    if (thumb) formData.append('thumbnail', thumb);

    await axios.post('http://localhost:5000/api/videolibrary/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });await axios.post('http://localhost:5000/api/videolibrary/upload', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer ' + localStorage.getItem('token') // optional if needed
  }
});

    alert("Uploaded Successfully!");
    window.location.reload();
};
  return (
    <>
    <Navbar />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📺 Video Library</h2>

      <form onSubmit={handleUpload} className="space-y-2 mb-6">
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full border p-2" />
        <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} className="w-full border p-2" />

        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={isYouTube} onChange={() => setIsYouTube(!isYouTube)} />
          <span>Is this a YouTube video?</span>
        </label>

        {isYouTube ? (
          <input type="text" placeholder="YouTube URL" value={youtubeUrl} onChange={e => setYoutubeUrl(e.target.value)} className="w-full border p-2" />
        ) : (
          <input type="file" accept="video/*" onChange={e => setVideoFile(e.target.files[0])} />
        )}

        <input type="file" accept="image/*" onChange={e => setThumb(e.target.files[0])} />

        <button type="submit" className="bg-green-600 text-white px-4 py-1 rounded">Upload</button>
      </form>

      <div className="grid md:grid-cols-3 gap-4">
        {videos.map(video => (
          <div key={video._id} className="border rounded p-2">
            {video.thumbnailUrl && <img src={video.thumbnailUrl} alt="thumb" className="h-40 w-full object-cover mb-2" />}
            <h3 className="font-semibold">{video.title}</h3>
            <p className="text-sm">{video.description}</p>
            {video.isYouTube ? (
              <iframe className="w-full aspect-video mt-2" src={video.videoUrl.replace("watch?v=", "embed/")} allowFullScreen></iframe>
            ) : (
              <video controls className="w-full mt-2">
                <source src={video.videoUrl} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default VideoLibraryPage;
