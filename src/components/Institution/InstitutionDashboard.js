// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Footer from '../Footer';
// import Navbar from '../Navbar';

// const InstitutionDashboard = () => {
//   const [institution, setInstitution] = useState(null);
//   const token = localStorage.getItem('institutionToken');

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/institution/profile', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setInstitution(res.data);
//       } catch (err) {
//         console.error('Failed to load dashboard', err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   if (!institution) return <div className="text-center mt-10 text-gray-600">Loading...</div>;

//   return (
//     <>
//     <Navbar />
//     <div className="max-w-5xl mx-auto p-6">
//       <h2 className="text-2xl font-bold text-blue-800 mb-4">Welcome, {institution.name}</h2>
//       <div className="bg-white p-4 rounded shadow">
//         <h3 className="text-lg font-semibold mb-2">Profile Info</h3>
//         <p><strong>Email:</strong> {institution.email}</p>
//         <p><strong>Affiliation Code:</strong> {institution.code}</p>
//         <p><strong>Address:</strong> {institution.address}</p>
//       </div>
//     </div>
    
//     <button onClick={() => setShowAdd(true)} className="bg-green-600 text-white px-4 py-2 rounded">Add Teacher</button>

// {showAdd && (
//   <form onSubmit={handleAdd}>
//     <input type="text" name="name" placeholder="Name" />
//     <input type="email" name="email" placeholder="Email" />
//     {/* ... */}
//     <button type="submit">Save</button>
//   </form>
// )}

//     <Footer />
//     </>
//   );
// };

// export default InstitutionDashboard;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstitutionDashboard = () => {
  const [stats, setStats] = useState(null);
  const token = localStorage.getItem('institutionToken');

  useEffect(() => {
    axios.get('http://localhost:5000/api/institution/dashboard', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setStats(res.data));
  }, [token]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Institution Dashboard</h2>
      {stats && (
        <div className="bg-white p-4 rounded shadow">
          <p className="text-lg">📚 Total Courses Created: <strong>{stats.totalCourses}</strong></p>
        </div>
      )}
    </div>
  );
};

export default InstitutionDashboard;
