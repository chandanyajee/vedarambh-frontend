// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/admin/login', { email, password });
//       if (res.data.success) {
//         // localStorage.setItem('adminToken', res.data.token);
//         localStorage.setItem('token', res.data.token);
//         navigate('/admin/dashboard');
//       } else {
//         alert(res.data.message);
//       }
//     } catch (err) {
//       alert('Login failed');
//     }
//   };

//   return (
//     <>
//     <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow rounded">
//       <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Admin Login</h2>
//       <form onSubmit={handleLogin} className="space-y-4">
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//         <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
//           Login
//         </button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default AdminLogin;

import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', { email, password });
      localStorage.setItem('adminToken', res.data.token);
      window.location.href = '/admin/dashboard';
    } catch (err) {
      setMsg('❌ Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Admin Login</h2>
      {msg && <div className="text-red-600">{msg}</div>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full border p-2 rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
