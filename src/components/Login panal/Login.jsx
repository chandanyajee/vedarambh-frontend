// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
// import { useNavigate } from 'react-router-dom';
// import API_BASE_URL from '../../config';

// const UnifiedLogin = () => {
//   const [role, setRole] = useState('student');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();


//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       let endpoint = '';
//       if (role === 'student') endpoint = '/api/student/login';
//       else if (role === 'teacher') endpoint = '/api/teacher/login';
//       else if (role === 'institution') endpoint = '/api/institutions/login';
//       else if (role === 'admin') endpoint = '/api/admin/login';

//         fetch(`${API_BASE_URL}/api/some-endpoint`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.error(err));
//         const res = await axios.post(`http://localhost:5000${endpoint}`,  {
//         email,
//         password,
//       });

//       const token = res.data.token;
//       const name = res.data.name;

//       if (!token) {
//         alert(res.data.message || 'Login failed ❌');
//         return;
//       }

//       // ✅ Save role-specific token
//       localStorage.setItem(`${role}Token`, token);
//       localStorage.setItem('name', name || '');

//       alert('Login successful ✅');

//       // ✅ Navigate by role
//       if (role === 'student') navigate('/student/dashboard');
//       else if (role === 'teacher') navigate('/teacher/dashboard');
//       else if (role === 'institution') navigate('/institution/dashboard');
//       else if (role === 'admin') navigate('/admin/dashboard');

//     } catch (err) {
//       console.error(err);
//       alert('Login failed. Please check your credentials ❌');
//     }
//   };



//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-100 to-white px-4">
//         <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
//           <div className="flex items-center justify-center mb-4">
//             <img src="logo.PNG" alt="Om" className="w-8 h-8 mr-2" />
//             <h2 className="text-2xl font-bold text-orange-900">Login to VedArambh</h2>
//           </div>

//           <form onSubmit={handleLogin} className="space-y-5">
//             <div>
//               <label className="text-sm font-medium text-gray-700">Login As</label>
//               <select
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
//               >
//                 <option value="student">Student</option>
//                 <option value="teacher">Teacher</option>
//                 <option value="institution">Institution</option>
//                 <option value="admin">Admin</option>
//               </select>
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-700">Password</label>
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
//               />
//             </div>

//             <div>
//               <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
//                 Login
//               </button>
//             </div>
//           </form>

//           <p className="text-center text-sm text-gray-600 mt-5">
//             Don’t have an account?{' '}
//             <a href="/register" className="text-orange-700 underline">
//               Register Here
//             </a>
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default UnifiedLogin;


import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

// Backend base URL - deployed backend
const API_BASE_URL = 'https://vedarambh-backend.onrender.com';

const UnifiedLogin = () => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let endpoint = '';
      if (role === 'student') endpoint = '/api/student/login';
      else if (role === 'teacher') endpoint = '/api/teacher/login';
      else if (role === 'institution') endpoint = '/api/institutions/login';
      else if (role === 'admin') endpoint = '/api/admin/login';

      // Axios POST request to backend
      const res = await axios.post(`${API_BASE_URL}${endpoint}`, {
        email,
        password,
      });

      const token = res.data.token;
      const name = res.data.name;

      if (!token) {
        alert(res.data.message || 'Login failed ❌');
        return;
      }

      // Save role-specific token and name in localStorage
      localStorage.setItem(`${role}Token`, token);
      localStorage.setItem('name', name || '');

      alert('Login successful ✅');

      // Redirect user based on role
      if (role === 'student') navigate('/student/dashboard');
      else if (role === 'teacher') navigate('/teacher/dashboard');
      else if (role === 'institution') navigate('/institution/dashboard');
      else if (role === 'admin') navigate('/admin/dashboard');

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Login failed. Please check your credentials ❌');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-100 to-white px-4">
        <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
          <div className="flex items-center justify-center mb-4">
            <img src="logo.PNG" alt="Om" className="w-8 h-8 mr-2" />
            <h2 className="text-2xl font-bold text-orange-900">Login to VedArambh</h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700">Login As</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="institution">Institution</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <button type="submit" className="w-full bg-orange-700 hover:bg-orange-800 text-white font-semibold py-2 rounded-lg transition">
                Login
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600 mt-5">
            Don’t have an account?{' '}
            <a href="/register" className="text-orange-700 underline">
              Register Here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UnifiedLogin;
