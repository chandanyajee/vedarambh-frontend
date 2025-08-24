import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [counts, setCounts] = useState({});
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/overview', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCounts(res.data);
      } catch (err) {
        console.error('Failed to load stats', err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">AAdmin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded">
          <h4 className="text-lg font-semibold text-gray-700">Total Students</h4>
          <p className="text-3xl font-bold text-green-600">{counts.students}</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h4 className="text-lg font-semibold text-gray-700">Total Teachers</h4>
          <p className="text-3xl font-bold text-indigo-600">{counts.teachers}</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h4 className="text-lg font-semibold text-gray-700">Institutions</h4>
          <p className="text-3xl font-bold text-orange-600">{counts.institutions}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
