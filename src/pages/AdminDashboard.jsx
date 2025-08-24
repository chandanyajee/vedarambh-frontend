import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LogoutButton from '../components/Login panal/LogoutButton';

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/overview', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setStats(res.data))
    .catch(err => console.error('Failed to load stats', err));
  }, [token]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/admin/users?role=${role}&page=${page}&search=${search}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => {
      setUsers(res.data.users);
      setTotalPages(res.data.pages);
    })
    .catch(err => console.error('Failed to load users', err));
  }, [role, search, page, token]);

  const handleToggleStatus = async (userId) => {
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/admin/user/${userId}/toggle-status`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const newStatus = res.data.status;
      setUsers(prev =>
        prev.map(user =>
          user._id === userId ? { ...user, status: newStatus } : user
        )
      );
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await axios.delete(
        `http://localhost:5000/api/admin/user/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers(prev => prev.filter(user => user._id !== userId));
    } catch (err) {
      alert('Failed to delete user');
    }
  };

  const exportToCSV = () => {
    const headers = ['Name',role,stats];
    const rows = users.map(u => [u.name, u.role, u.status]);
    const csvContent = [headers, ...rows]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'users.csv';
    link.click();
  };

  return (
    <>
      <Navbar />
      <LogoutButton />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Admin Dashboard</h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {['students', 'teachers', 'institutions', 'courses'].map(key => (
            <div key={key} className="bg-white p-4 rounded shadow text-center">
              <h4 className="text-lg font-semibold text-gray-700 capitalize">{key}</h4>
              <p className="text-3xl font-bold text-blue-600">{stats[key]}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <select onChange={(e) => setRole(e.target.value)} className="p-2 border rounded">
            <option value="">All Roles</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="institution">Institution</option>
          </select>
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded w-60"
          />
        </div>

        {/* Export Button */}
        <button
          onClick={exportToCSV}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-4"
        >
          Export Users to CSV
        </button>

        {/* Users Table */}
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-xl font-semibold mb-4">Users</h3>
          <table className="w-full text-left border">
            <thead>
              <tr className="border-b">
                <th className="p-2">Name</th>
                <th className="p-2">Role</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">{user.status}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => handleToggleStatus(user._id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 text-sm rounded"
                    >
                      {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 text-sm rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-end mt-4 space-x-2">
            <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">Prev</button>
            <span className="px-3 py-1">Page {page} of {totalPages}</span>
            <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
