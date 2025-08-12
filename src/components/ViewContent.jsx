// // ViewContent.jsx
// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// const MOCK_DATA = [
//   {
//     _id: '1',
//     title: 'Gayatri Mantra',
//     description: 'A sacred hymn from the Vedas.',
//     type: 'audio',
//     category: 'Vedas',
//     language: 'Sanskrit',
//     filePath: 'uploads/sample-audio.mp3',
//   },
//   {
//     _id: '2',
//     title: 'Bhagavad Gita Chapter 1',
//     description: 'Document from Mahabharat.',
//     type: 'document',
//     category: 'Mahabharat',
//     language: 'Hindi',
//     filePath: 'uploads/sample-document.pdf',
//   },
//   {
//     _id: '3',
//     title: 'Hanuman Ji Image',
//     description: 'Spiritual depiction of Hanuman.',
//     type: 'image',
//     category: 'Ramayan',
//     language: 'Hindi',
//     filePath: 'uploads/sample-image.jpg',
//   },
// ];

// const ViewContent = () => {
//   const [uploadType, setUploadType] = useState('document');
//   const [category, setCategory] = useState('All');
//   const [contentList, setContentList] = useState([]);

//   const fetchContent = useCallback(async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/upload`, {
//         params: {
//           type: uploadType,
//           category: category === 'All' ? undefined : category,
//         },
//       });
//       setContentList(res.data);
//     } catch (err) {
//       console.warn('API request failed, using mock data instead.');
//       const filtered = MOCK_DATA.filter(
//         (item) =>
//           item.type === uploadType &&
//           (category === 'All' || item.category === category)
//       );
//       setContentList(filtered);
//     }
//   }, [uploadType, category]);

//   useEffect(() => {
//     fetchContent();
//   }, [fetchContent]);

//   const renderPreview = (item) => {
//     const fileUrl = `http://localhost:5000/${item.filePath}`;

//     if (item.type === 'document') {
//       return <iframe src={fileUrl} className="w-full h-96 border mt-2" title={item.title}></iframe>;
//     }
//     if (item.type === 'video') {
//       return <video controls className="w-full mt-2"><source src={fileUrl} type="video/mp4" /></video>;
//     }
//     if (item.type === 'audio') {
//       return <audio controls className="mt-2"><source src={fileUrl} type="audio/mpeg" /></audio>;
//     }
//     if (item.type === 'image') {
//       return <img src={fileUrl} alt={item.title} className="w-full h-auto mt-2" />;
//     }
//     return null;
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-4 text-center">View Uploaded Content</h2>

//       <div className="flex gap-4 mb-4 flex-wrap justify-center">
//         {['document', 'video', 'audio', 'image'].map((type) => (
//           <label key={type} className="capitalize">
//             <input
//               type="radio"
//               value={type}
//               checked={uploadType === type}
//               onChange={() => setUploadType(type)}
//               className="mr-1"
//             />
//             {type}
//           </label>
//         ))}
//       </div>

//       <div className="flex gap-4 mb-6 flex-wrap justify-center">
//         {['All', 'Vedas', 'Puranas', 'Mahabharat', 'Ramayan', 'Other'].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setCategory(cat)}
//             className={`px-4 py-2 rounded-full border ${category === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {contentList.length === 0 ? (
//         <p className="text-center text-gray-500">No content available.</p>
//       ) : (
//         <div className="space-y-6 max-w-4xl mx-auto">
//           {contentList.map((item) => (
//             <div key={item._id} className="bg-white p-4 rounded shadow">
//               <h3 className="text-lg font-semibold">{item.title}</h3>
//               <p className="text-sm text-gray-600">{item.description}</p>
//               <p className="text-xs text-gray-500 mt-1">
//                 Category: {item.category} | Language: {item.language}
//               </p>
//               {renderPreview(item)}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewContent;



'use client';

import { useState } from 'react';
import Header from './Navbar';
import Footer from './Footer';
import Button from './ui/Button';

const categories = [
  'All Categories', 'Vedic Studies', 'Bhagavad Gita', 'Ramayan', 
  'Mahabharat', 'Puranas', 'Sanskrit Learning', 'Yoga & Meditation',
  'Moral Stories', 'Bhajans & Mantras', 'Cultural Festivals'
];

const classLevels = [
  'All Classes', 'Playgroup', 'Nursery', 'LKG', 'UKG', 
  'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
  'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'
];

const languages = ['All Languages', 'Hindi', 'English', 'Sanskrit'];

const videosData = [
  {
    id: 1,
    title: 'Krishna Leela - Makhan Chor',
    description: 'Delightful animated story of young Krishna and his love for butter, teaching lessons about childhood innocence.',
    category: 'Moral Stories',
    class: 'Playgroup-UKG',
    language: 'Hindi',
    duration: '8:45',
    views: '12,547',
    likes: 1203,
    teacher: 'Smt. Radha Sharma',
    uploadDate: '2 days ago',
    thumbnail: 'https://readdy.ai/api/search-image?query=Animated%20young%20Krishna%20with%20butter%20pot%2C%20colorful%20cartoon%20style%20for%20children%2C%20playful%20expression%20with%20traditional%20Indian%20art%20elements%20and%20bright%20colors&width=320&height=180&seq=video001&orientation=landscape'
  },
  {
    id: 2,
    title: 'Sanskrit Pronunciation - Basic Mantras',
    description: 'Learn correct pronunciation of fundamental Sanskrit mantras with audio guidance and visual cues.',
    category: 'Sanskrit Learning',
    class: 'Class 3-6',
    language: 'Sanskrit',
    duration: '15:30',
    views: '8,934',
    likes: 892,
    teacher: 'Pandit Arun Shastri',
    uploadDate: '5 days ago',
    thumbnail: 'https://readdy.ai/api/search-image?query=Traditional%20Indian%20guru%20teaching%20Sanskrit%20mantras%2C%20ancient%20manuscript%20with%20Devanagari%20script%2C%20peaceful%20ashram%20setting%20with%20soft%20lighting%20and%20spiritual%20atmosphere&width=320&height=180&seq=video002&orientation=landscape'
  },
  {
    id: 3,
    title: 'Hanuman Chalisa Explanation',
    description: 'Detailed explanation of each verse of Hanuman Chalisa with meaning and spiritual significance.',
    category: 'Bhajans & Mantras',
    class: 'Class 5-10',
    language: 'Hindi',
    duration: '22:15',
    views: '25,678',
    likes: 2341,
    teacher: 'Dr. Suresh Pandey',
    uploadDate: '1 week ago',
    thumbnail: 'https://readdy.ai/api/search-image?query=Lord%20Hanuman%20in%20traditional%20Indian%20art%20style%20with%20golden%20divine%20light%2C%20peaceful%20temple%20background%20with%20Sanskrit%20text%20and%20devotional%20atmosphere&width=320&height=180&seq=video003&orientation=landscape'
  },
  {
    id: 4,
    title: 'Yoga for Young Minds',
    description: 'Simple yoga asanas and breathing exercises designed specifically for children and beginners.',
    category: 'Yoga & Meditation',
    class: 'Class 1-5',
    language: 'English',
    duration: '12:00',
    views: '15,432',
    likes: 1456,
    teacher: 'Yogi Priya Devi',
    uploadDate: '3 days ago',
    thumbnail: 'https://readdy.ai/api/search-image?query=Children%20practicing%20simple%20yoga%20poses%20in%20peaceful%20garden%20setting%20with%20trees%20and%20flowers%2C%20morning%20sunlight%20with%20traditional%20Indian%20ashram%20peaceful%20environment&width=320&height=180&seq=video004&orientation=landscape'
  },
  {
    id: 5,
    title: 'Vedic Mathematics - Mental Calculation',
    description: 'Amazing mental calculation techniques from ancient Vedic mathematics that make arithmetic fun and fast.',
    category: 'Vedic Studies',
    class: 'Class 6-10',
    language: 'English',
    duration: '18:20',
    views: '9,876',
    likes: 1087,
    teacher: 'Prof. Madhavi Joshi',
    uploadDate: '4 days ago',
    thumbnail: 'https://readdy.ai/api/search-image?query=Ancient%20Indian%20mathematical%20symbols%20and%20calculations%20on%20traditional%20palm%20leaf%20manuscript%2C%20geometric%20patterns%20and%20vedic%20numerals%20with%20golden%20decorative%20borders&width=320&height=180&seq=video005&orientation=landscape'
  },
  {
    id: 6,
    title: 'Ramayan - Sita Haran Episode',
    description: "Dramatic narration of Sita's abduction from Ramayan with moral lessons about good vs evil.",
    category: 'Ramayan',
    class: 'Class 7-10',
    language: 'Hindi',
    duration: '25:40',
    views: '18,923',
    likes: 1789,
    teacher: 'Guru Vishnu Das',
    uploadDate: '6 days ago',
    thumbnail: 'https://readdy.ai/api/search-image?query=Traditional%20Indian%20art%20depicting%20Ramayan%20scene%20with%20Ravana%20and%20Sita%2C%20epic%20mythology%20illustration%20with%20dramatic%20colors%20and%20classical%20Indian%20painting%20style&width=320&height=180&seq=video006&orientation=landscape'
  },
  {
    id: 7,
    title: 'Diwali Celebration Significance',
    description: 'Understanding the spiritual and cultural significance of Diwali festival in Sanatan tradition.',
    category: 'Cultural Festivals',
    class: 'Class 3-8',
    language: 'Hindi',
    duration: '14:55',
    views: '22,134',
    likes: 2098,
    teacher: 'Smt. Lakshmi Devi',
    uploadDate: '1 week ago',
    thumbnail: 'https://readdy.ai/api/search-image?query=Beautiful%20Diwali%20celebration%20with%20traditional%20oil%20lamps%2C%20colorful%20rangoli%20patterns%2C%20families%20celebrating%20with%20sweets%20and%20decorations%20in%20warm%20golden%20lighting&width=320&height=180&seq=video007&orientation=landscape'
  },
  {
    id: 8,
    title: 'Bhagavad Gita - Chapter 2 Summary',
    description: "Simple explanation of Bhagavad Gita's second chapter focusing on the eternal nature of the soul.",
    category: 'Bhagavad Gita',
    class: 'Class 8-10',
    language: 'English',
    duration: '20:30',
    views: '11,567',
    likes: 1234,
    teacher: 'Dr. Krishna Murthy',
    uploadDate: '5 days ago',
    thumbnail: 'https://readdy.ai/api/search-image?query=Lord%20Krishna%20teaching%20Arjuna%20on%20battlefield%20of%20Kurukshetra%2C%20traditional%20Indian%20art%20style%20with%20divine%20light%20and%20spiritual%20atmosphere%2C%20classical%20painting%20technique&width=320&height=180&seq=video008&orientation=landscape'
  }
];

export default function VideoLibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const filteredVideos = videosData.filter(video => {
    const matchesCategory = selectedCategory === 'All Categories' || video.category === selectedCategory;
    const matchesClass = selectedClass === 'All Classes' || video.class.includes(selectedClass);
    const matchesLanguage = selectedLanguage === 'All Languages' || video.language === selectedLanguage;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesClass && matchesLanguage && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">VedArambh Video Library</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover wisdom through engaging videos in Hindi, English, and Sanskrit
            </p>
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search videos, topics, or teachers..."
                  className="w-full px-4 py-3 pl-12 rounded-lg border-0 text-gray-900 placeholder-gray-500"
                />
                <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Filter Videos</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'} transition-colors cursor-pointer`}
                aria-label="Grid View"
              >
                <i className="ri-grid-line w-4 h-4 flex items-center justify-center"></i>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'} transition-colors cursor-pointer`}
                aria-label="List View"
              >
                <i className="ri-list-unordered w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-8"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="class-select" className="block text-sm font-medium text-gray-700 mb-2">Class Level</label>
              <select
                id="class-select"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-8"
              >
                {classLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="language-select" className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select
                id="language-select"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-8"
              >
                {languages.map((language) => (
                  <option key={language} value={language}>{language}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Video Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredVideos.length} videos
            {selectedCategory !== 'All Categories' && ` in ${selectedCategory}`}
          </p>
          <div className="flex items-center space-x-2">
            <label htmlFor="sort-select" className="text-sm text-gray-600">Sort by:</label>
            <select
              id="sort-select"
              className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-8"
              // Sorting functionality can be implemented here
            >
              <option>Most Popular</option>
              <option>Most Recent</option>
              <option>Most Liked</option>
              <option>Duration</option>
            </select>
          </div>
        </div>

        {/* Video Grid/List */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-8' : 'space-y-6'}>
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition-shadow ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`relative ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={`object-cover object-top ${
                    viewMode === 'list' ? 'w-full h-44' : 'w-full h-48'
                  }`}
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <i className="ri-play-fill text-orange-500 text-2xl w-6 h-6 flex items-center justify-center ml-1"></i>
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-orange-500 font-medium bg-orange-50 px-2 py-1 rounded">
                    {video.category}
                  </span>
                  <span className="text-xs text-gray-500">{video.language}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                  {video.description}
                </p>

                <div className="flex items-center mb-3">
                  <img
                    src={`https://readdy.ai/api/search-image?query=Professional%20Indian%20teacher%20portrait%20with%20peaceful%20expression%2C%20educational%20background%2C%20simple%20and%20clean%20for%20instructor%20profile&width=32&height=32&seq=teacher${video.id}&orientation=squarish`}
                    alt={video.teacher}
                    className="w-8 h-8 rounded-full object-cover object-top mr-3"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{video.teacher}</p>
                    <p className="text-xs text-gray-500">{video.class}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="ri-heart-line w-4 h-4 flex items-center justify-center"></i>
                      <span>{video.likes}</span>
                    </div>
                  </div>
                  <span className="text-xs">{video.uploadDate}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Button className="flex-1">
                    <i className="ri-play-circle-line w-4 h-4 flex items-center justify-center mr-2"></i>
                    Watch Now
                  </Button>
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors cursor-pointer" aria-label="Bookmark">
                    <i className="ri-bookmark-line w-4 h-4 flex items-center justify-center text-gray-600"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <i className="ri-video-line text-6xl text-gray-300 mb-4 w-16 h-16 flex items-center justify-center mx-auto"></i>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No videos found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
