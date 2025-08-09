// src/components/admin/AdminSidebar.jsx

import { FaUsers, FaBook, FaChartBar, FaBell, FaCog, FaTachometerAlt } from 'react-icons/fa';

const AdminSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 shadow-md fixed">
      <div className="p-4 font-bold text-xl border-b">VedArambh</div>
      <ul className="mt-4 space-y-2 p-4">
        <li className="flex items-center space-x-2 hover:text-orange-600 cursor-pointer">
          <FaTachometerAlt /> <span>Dashboard</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-orange-600 cursor-pointer">
          <FaUsers /> <span>Users Management</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-orange-600 cursor-pointer">
          <FaBook /> <span>Course Management</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-orange-600 cursor-pointer">
          <FaChartBar /> <span>Payment Reports</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-orange-600 cursor-pointer">
          <FaBell /> <span>Notifications</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-orange-600 cursor-pointer">
          <FaCog /> <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
