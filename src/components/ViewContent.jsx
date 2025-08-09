// ViewContent.jsx
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const MOCK_DATA = [
  {
    _id: '1',
    title: 'Gayatri Mantra',
    description: 'A sacred hymn from the Vedas.',
    type: 'audio',
    category: 'Vedas',
    language: 'Sanskrit',
    filePath: 'uploads/sample-audio.mp3',
  },
  {
    _id: '2',
    title: 'Bhagavad Gita Chapter 1',
    description: 'Document from Mahabharat.',
    type: 'document',
    category: 'Mahabharat',
    language: 'Hindi',
    filePath: 'uploads/sample-document.pdf',
  },
  {
    _id: '3',
    title: 'Hanuman Ji Image',
    description: 'Spiritual depiction of Hanuman.',
    type: 'image',
    category: 'Ramayan',
    language: 'Hindi',
    filePath: 'uploads/sample-image.jpg',
  },
];

const ViewContent = () => {
  const [uploadType, setUploadType] = useState('document');
  const [category, setCategory] = useState('All');
  const [contentList, setContentList] = useState([]);

  const fetchContent = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/upload`, {
        params: {
          type: uploadType,
          category: category === 'All' ? undefined : category,
        },
      });
      setContentList(res.data);
    } catch (err) {
      console.warn('API request failed, using mock data instead.');
      const filtered = MOCK_DATA.filter(
        (item) =>
          item.type === uploadType &&
          (category === 'All' || item.category === category)
      );
      setContentList(filtered);
    }
  }, [uploadType, category]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  const renderPreview = (item) => {
    const fileUrl = `http://localhost:5000/${item.filePath}`;

    if (item.type === 'document') {
      return <iframe src={fileUrl} className="w-full h-96 border mt-2" title={item.title}></iframe>;
    }
    if (item.type === 'video') {
      return <video controls className="w-full mt-2"><source src={fileUrl} type="video/mp4" /></video>;
    }
    if (item.type === 'audio') {
      return <audio controls className="mt-2"><source src={fileUrl} type="audio/mpeg" /></audio>;
    }
    if (item.type === 'image') {
      return <img src={fileUrl} alt={item.title} className="w-full h-auto mt-2" />;
    }
    return null;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">View Uploaded Content</h2>

      <div className="flex gap-4 mb-4 flex-wrap justify-center">
        {['document', 'video', 'audio', 'image'].map((type) => (
          <label key={type} className="capitalize">
            <input
              type="radio"
              value={type}
              checked={uploadType === type}
              onChange={() => setUploadType(type)}
              className="mr-1"
            />
            {type}
          </label>
        ))}
      </div>

      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        {['All', 'Vedas', 'Puranas', 'Mahabharat', 'Ramayan', 'Other'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border ${category === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {contentList.length === 0 ? (
        <p className="text-center text-gray-500">No content available.</p>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          {contentList.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-xs text-gray-500 mt-1">
                Category: {item.category} | Language: {item.language}
              </p>
              {renderPreview(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewContent;
