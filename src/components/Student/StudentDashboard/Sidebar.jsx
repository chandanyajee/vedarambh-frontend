// import React from 'react';
// import { FaHome, FaBook, FaClipboard, FaCalendar, FaUser, FaCertificate, FaCog } from 'react-icons/fa';

// const Sidebar = () => {
//   const items = [
//     { label: 'Home', icon: <FaHome /> },
//     { label: 'Courses', icon: <FaBook /> },
//     { label: 'Assignments', icon: <FaClipboard /> },
//     { label: 'Calendar', icon: <FaCalendar /> },
//     { label: 'Profile', icon: <FaUser /> },
//     { label: 'Certificates (Coming)', icon: <FaCertificate /> },
//     { label: 'Settings', icon: <FaCog /> },
//   ];

//   return (
//     <aside className="w-64 bg-white shadow-lg h-full p-4 hidden md:block">
//       <div className="text-2xl font-semibold mb-8 text-orange-700">VedArambh</div>
//       <ul className="space-y-4">
//         {items.map((item, idx) => (
//           <li key={idx} className="flex items-center space-x-3 text-gray-700 hover:text-orange-700">
//             {item.icon}
//             <span>{item.label}</span>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, FileText, Calendar, User, Award, Settings } from 'lucide-react';

const menuItems = [
  { label: 'Dashboard', icon: <Home />, path: '/student/dashboard' },
  { label: 'My Courses', icon: <BookOpen />, path: '/student/courses' },
  { label: 'Assignments', icon: <FileText />, path: '/student/assignments' },
  { label: 'Calendar', icon: <Calendar />, path: '/student/calendar' },
  { label: 'Resources', icon: <BookOpen />, path: '/student/resources' },
  { label: 'Profile', icon: <User />, path: '/student/profile' },
  { label: 'Certificates', icon: <Award />, path: '/student/certificates' },
  { label: 'Settings', icon: <Settings />, path: '/student/settings' },
];

export default function Sidebar() {
  
  const [name, setName] = useState('Student');

useEffect(() => {
  const storedName = localStorage.getItem('name');
  if (storedName) {
    setName(storedName);
  }
}, []);


  return (
    <div className="w-64 bg-gray-100 h-screen p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold mb-2 text-center">
          👋 Welcome, {name}
        </h2>

        <div className="flex flex-col space-y-2 mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center gap-2 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
          <h2 className="text-lg font-bold mb-2 text-center">
  👋 Welcome, {name}
          </h2>

      {/* <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded"
      >
        Logout
      </button> */}
    </div>
  );
}
