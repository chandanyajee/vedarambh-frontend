import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    setName(storedName || 'Guest');
  }, []);

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col justify-between">
      <div>
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          👋 Welcome, {name}
        </div>

        <nav className="mt-4 flex flex-col space-y-2">
          <Link to="/" className="px-4 py-2 hover:bg-gray-700">Home</Link>
          <Link to="/student/dashboard" className="px-4 py-2 hover:bg-gray-700">Student Dashboard</Link>
          <Link to="/teacher/dashboard" className="px-4 py-2 hover:bg-gray-700">Teacher Dashboard</Link>
          <Link to="/institution/dashboard" className="px-4 py-2 hover:bg-gray-700">Institution Dashboard</Link>
          <Link to="/admin/dashboard" className="px-4 py-2 hover:bg-gray-700">Admin Dashboard</Link>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-700">
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = '/';
          }}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
