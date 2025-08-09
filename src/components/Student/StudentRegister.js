// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// // import studentlogin from './StudentLogin';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
// import './student.css'

// const StudentRegister = () => {
//   const [formData, setFormData] = useState({

//     name: '',
//     email: '',
//     password: '',
//     institution: '',
//     class: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/student/register', formData);
//       alert(res.data.message);
//     } catch (err) {
//       console.error(err);
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className=" max-w-md mx-auto shadow rounded bg-red mt-6">
//         <h2 className="text-2xl font-bold mb-4">Student Registration</h2>
//         <form onSubmit={handleSubmit} className="space-y-3 ">
//           <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full p-2 border rounded" />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded" />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full p-2 border rounded" />
//           <input type="text" name="institution" placeholder="Institution Name" onChange={handleChange} className="w-full p-2 border rounded" />
//           <input type="text" name="class" placeholder="Class" onChange={handleChange} className="w-full p-2 border rounded" />
//           <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
//           <Link to = '/StudentLogin' > <br /><button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">student Login</button></Link>
//         </form>

//         <Link to = '/forgot-password' > <br /><button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"> ForgotPassword</button></Link>

//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default StudentRegister;


import React, { useState } from 'react';
import axios from 'axios';

const StudentRegister = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/student/register', formData);
      setMsg('✅ Registered successfully!');
    } catch (err) {
      setMsg('❌ ' + err.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-8 rounded shadow">
      <h2 className="text-lg font-bold text-blue-700">Student Registration</h2>
      {msg && <p className="text-green-600 mt-2">{msg}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        {['name', 'email', 'password'].map(field => (
          <input
            key={field}
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full border p-2 rounded"
            required
          />
        ))}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default StudentRegister;
