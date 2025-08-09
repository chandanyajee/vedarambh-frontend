import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white p-6">
      {/* Header */}
      <div className="text-center mt-10">
        
        <h1 className="text-4xl font-bold text-orange-800">VedArambh: A Sanatan Initiative</h1>
        <p className="mt-2 text-lg text-gray-700 italic">Gyaan ki Pehli Seedi Sanatan ke Saath</p>
      </div>

      {/* Join Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <Link to="/student/register" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 shadow">
          Join as Student
        </Link>
        <Link to="/teacher/register" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 shadow">
          Join as Teacher
        </Link>
        <Link to="/institution/register" className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 shadow">
          Join as Institution
        </Link>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto mt-16 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-3 text-orange-700">What is VedArambh?</h2>
        <p className="text-gray-700">
          VedArambh is a modern platform to educate the next generation about our ancient Sanatan Dharma. With
          courses designed for kids from Playgroup to Class 10, we aim to connect institutions, teachers, and
          students to the timeless wisdom of the Vedas, Upanishads, and Indian values.
        </p>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-3 text-orange-700">Our Mission</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Bring Sanatan Dharma teachings to classrooms</li>
          <li>Empower teachers to preserve Vedic knowledge</li>
          <li>Offer free and accessible education rooted in values</li>
        </ul>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default HomePage;
