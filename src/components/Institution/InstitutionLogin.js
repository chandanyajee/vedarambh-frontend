// // src/components/InstitutionLogin.js

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Navbar from '../Navbar';
// import Footer from '../Footer';

// function InstitutionLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/api/institutions/login", {
//         email,
//         password,
//       });

//       if (res.data.success) {
//         alert("Login Successful!");
//         // Aage dashboard page banayenge to yahan redirect hoga
//         navigate("/dashboard"); // dashboard page banana padega
//       } else {
//         alert(res.data.message);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <>
//     <Navbar />
//     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
//       <h2>Institution Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label><br />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px" }}
//           />
//         </div>
//         <div style={{ marginTop: "10px" }}>
//           <label>Password:</label><br />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: "100%", padding: "8px" }}
//           />
//         </div>
//         <button type="submit" style={{ marginTop: "15px", padding: "10px", width: "100%" }}>
//           Login
//         </button>
//       </form>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default InstitutionLogin;

import React, { useState } from 'react';
import axios from 'axios';

const InstitutionLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/institution/login', { email, password });
      localStorage.setItem('institutionToken', res.data.token);
      window.location.href = '/institution/dashboard';
    } catch (err) {
      setMsg('❌ ' + err.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-700 mb-4">Institution Login</h2>
      {msg && <div className="text-red-600">{msg}</div>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full border p-2 rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default InstitutionLogin;
