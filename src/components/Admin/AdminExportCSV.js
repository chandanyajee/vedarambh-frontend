import React from 'react';

const AdminExportCSV = () => {
  const token = localStorage.getItem('adminToken');

  const download = (type) => {
    window.open(`http://localhost:5000/api/admin/export/${type}?token=${token}`, '_blank');
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Export Data as CSV</h2>
      <div className="space-y-3">
        <button onClick={() => download('students')} className="w-full bg-green-600 text-white py-2 rounded">Download Students</button>
        <button onClick={() => download('teachers')} className="w-full bg-indigo-600 text-white py-2 rounded">Download Teachers</button>
        <button onClick={() => download('institutions')} className="w-full bg-orange-600 text-white py-2 rounded">Download Institutions</button>
      </div>
    </div>
  );
};

export default AdminExportCSV;
