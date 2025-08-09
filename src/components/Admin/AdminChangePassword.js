import React, { useState } from 'react';
import axios from 'axios';

const AdminChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const token = localStorage.getItem('adminToken');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        'http://localhost:5000/api/admin/change-password',
        { oldPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert(res.data.message);
      setOldPassword('');
      setNewPassword('');
    } catch (err) {
      alert('Password change failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white mt-10 shadow rounded">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder="Old Password" className="w-full border p-2 rounded" required />
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" className="w-full border p-2 rounded" required />
        <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">Update Password</button>
      </form>
    </div>
  );
};

export default AdminChangePassword;
