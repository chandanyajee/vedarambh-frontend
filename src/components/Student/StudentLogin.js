// // src/pages/StudentLogin.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// import Navbar from '../Navbar';
// import Footer from '../Footer';

// const StudentLogin = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     try {
//       // Replace with your backend login endpoint
//       const res = await axios.post('http://localhost:5000/api/student/login', formData);
      
//       if (res.data.success) {
//         localStorage.setItem('studentToken', res.data.token);
//         navigate('/student/dashboard');
//       } else {
//         setError(res.data.message || 'Invalid credentials');
//       }
//     } catch (err) {
//       setError('Server error. Please try again.');
//     }
//   };

//   return (
//     <>
//     <Navbar />
//     <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6 text-blue-800">Student Login</h2>
        
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter your email"
//             />
//           </div>
          
//           <div className="mb-6">
//             <label className="block text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded"
//           >
//             Login
//           </button>
//           <br /> <br />
//           <Link to = "/student"><button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" >Student Register</button></Link>

//         </form>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default StudentLogin;


// import React, { useState } from 'react';
// import axios from 'axios';

// const StudentLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [msg, setMsg] = useState('');

//   const handleLogin = async e => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/student/login', { email, password });
//       localStorage.setItem('studentToken', res.data.token);
//       window.location.href = '/student/dashboard';
//     } catch (err) {
//       setMsg('❌ ' + err.response.data.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
//       <h2 className="text-xl font-semibold text-blue-700 mb-4">Student Login</h2>
//       {msg && <div className="text-red-600">{msg}</div>}
//       <form onSubmit={handleLogin} className="space-y-4">
//         <input type="email" className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" className="w-full border p-2 rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
//       </form>
//     </div>
//   );
// };

// export default StudentLogin;




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 🚀 Navigation hook

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ Use for redirect

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/student/login", {
        email,
        password,
      });

      // ✅ Save token
      localStorage.setItem('studentToken', res.data.token);

      // ✅ Redirect to Student Dashboard
      navigate('/student/dashboard');

    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 m-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
};

export default StudentLogin;
