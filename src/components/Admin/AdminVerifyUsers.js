import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminVerifyUsers = () => {
  const token = localStorage.getItem('adminToken');
  const [institutions, setInstitutions] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  const fetchPending = async () => {
    try {
      const [iRes, tRes, sRes] = await Promise.all([
        axios.get('http://localhost:5000/api/admin/institutions/pending', { headers: { Authorization: `Bearer ${token}` } }),
        axios.get('http://localhost:5000/api/admin/teachers/pending', { headers: { Authorization: `Bearer ${token}` } }),
        axios.get('http://localhost:5000/api/admin/students/pending', { headers: { Authorization: `Bearer ${token}` } })
      ]);
      setInstitutions(iRes.data);
      setTeachers(tRes.data);
      setStudents(sRes.data);
    } catch (err) {
      alert('Failed to load pending users');
    }
  };

  const verifyUser = async (type, id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/verify/${type}/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchPending();
    } catch (err) {
      alert('Verification failed');
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const renderList = (title, data, type) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {data.length === 0 ? (
        <p className="text-gray-500">No pending {type}s</p>
      ) : (
        <ul className="space-y-2">
          {data.map(user => (
            <li key={user._id} className="flex justify-between items-center bg-white p-3 border rounded shadow">
              <div>
                <p className="font-medium">{user.name || user.email}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <button onClick={() => verifyUser(type, user._id)} className="bg-green-600 text-white px-3 py-1 rounded">
                Verify
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">User Verification</h2>
      {renderList('Pending Institutions', institutions, 'institution')}
      {renderList('Pending Teachers', teachers, 'teacher')}
      {renderList('Pending Students', students, 'student')}
    </div>
  );
};

export default AdminVerifyUsers;
