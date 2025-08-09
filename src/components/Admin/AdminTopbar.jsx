// src/components/admin/AdminTopbar.jsx
import { FaBell } from 'react-icons/fa';
// import { FaUser, FaHome } from 'react-icons/fa';
const AdminTopbar = () => {
  return (
        <div className="ml-64 flex justify-between items-center bg-white shadow px-6 py-4">
      <h2 className="text-2xl font-semibold">Admin Panel</h2>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600 cursor-pointer" />
        <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold">
          AD
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
