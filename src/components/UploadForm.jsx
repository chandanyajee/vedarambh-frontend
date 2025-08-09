// UploadContent.jsx (React + Tailwind CSS)
import { useState } from 'react';
import axios from 'axios';
// import Navbar from './Navbar';
// import Footer from './Footer';


const UploadContent = () => {
  const [type, setType] = useState('document');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Vedas');
  const [language, setLanguage] = useState('Hindi');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setMessage('Please select a file to upload.');

    const formData = new FormData();
    formData.append('type', type);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('language', language);
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData);
      setMessage(res.data.message);
      setTitle('');
      setDescription('');
      setFile(null);
    } catch (error) {
      console.error(error);
      setMessage('Upload failed. Try again later.');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload Your Content</h2>
      {message && <p className="text-center text-sm text-blue-600 mb-4">{message}</p>}
      <form onSubmit={handleUpload} className="space-y-4">
        <div className="flex gap-4 flex-wrap justify-center">
          {['document', 'video', 'audio', 'image'].map((t) => (
            <label key={t} className="capitalize">
              <input
                type="radio"
                value={t}
                checked={type === t}
                onChange={() => setType(t)}
                className="mr-1"
              />
              {t}
            </label>
          ))}
        </div>

        <input
          type="text"
          placeholder="Title"
          className="w-full border px-4 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          className="w-full border px-4 py-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex flex-wrap gap-4">
          <select
            className="border px-4 py-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {['Vedas', 'Puranas', 'Mahabharat', 'Ramayan', 'Other'].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            className="border px-4 py-2 rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {['Hindi', 'English', 'Sanskrit', 'Other'].map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        <input
          type="file"
          className="block w-full border px-4 py-2 rounded"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadContent;
