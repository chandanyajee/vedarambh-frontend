// import React, { useState } from 'react';
// import '../Institution/InstitutionRegister.css';
// import axios from 'axios';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
// import InstitutionLogin from './InstitutionLogin';

// const InstitutionRegister = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     pincode: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/institutions/register", formData);
//       alert("✅ Institution Registered Successfully!");
//       console.log(response.data);
//     } catch (error) {
//       alert("❌ Registration failed");
//       console.error(error);
//     }
//   };

//   return (
//     <>
//     <Navbar />
//     <div>
//       <h2 >Institution Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Institution Name" value={formData.name} onChange={handleChange} /><br/>
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br/>
//         <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} /><br/>
//         <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} /><br/>
//         <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} /><br/>
//         <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} /><br/>
//         <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} /><br/>
//         <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} /><br/>
//         <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} /><br/>
//         <button type="submit">Register</button> 
//         <button type="/login">React</button>
//       </form>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default InstitutionRegister;

import React, { useState } from 'react';
import axios from 'axios';

const InstitutionRegister = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', address: '', contact: ''
  });
  const [msg, setMsg] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/institution/register', formData);
      setMsg('✅ Registered successfully! Wait for approval.');
    } catch (err) {
      setMsg('❌ ' + err.response.data.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white mt-10 rounded shadow">
      <h2 className="text-xl mb-4 text-blue-700 font-bold">Institution Registration</h2>
      {msg && <div className="mb-4 text-green-600">{msg}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'email', 'password', 'address', 'contact'].map((field) => (
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

export default InstitutionRegister;
