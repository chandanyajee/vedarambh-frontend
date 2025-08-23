// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
// import API_BASE_URL from '../../config';

// const UnifiedRegister = () => {
//   const [role, setRole] = useState('student');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     qualification: '',
//     experience: '',
//     document: '',
//     institution: '',
//     class: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     pincode: '',
//   });

//   const [files, setFiles] = useState({
//     profilePhoto: null,
//     qualificationCert: null,
//     idProof: null,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFiles({ ...files, [e.target.name]: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       let endpoint = '';
//       let data;

//       if (role === 'teacher') {
//         endpoint = '/api/teacher/register';
//         data = new FormData();
//         for (let key in formData) {
//           data.append(key, formData[key]);
//         }
//         data.append('profilePhoto', files.profilePhoto);
//         data.append('qualificationCert', files.qualificationCert);
//         data.append('idProof', files.idProof);
//       } else {
//         if (role === 'student') endpoint = '/api/student/register';
//         else if (role === 'institution') endpoint = '/api/institutions/register';
//         data = formData;
//       }
      
//       const res = await axios.post(`http://localhost:5000${endpoint}`, data, {
//         headers: role === 'teacher' ? { 'Content-Type': 'multipart/form-data' } : {}
//       });

//       alert(res.data.message || 'Registered successfully!');
//     } catch (err) {
//       console.error(err);
//       alert('Registration failed!');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-white flex items-center justify-center px-4">
//         <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg">
//           <h2 className="text-2xl font-bold mb-4 text-orange-800 text-center">📝 Register on VedArambh</h2>

//           {/* Role Selection */}
//           <div className="mb-4">
//             <label className="text-sm font-medium text-gray-700">Register As</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
//             >
//               <option value="student">Student</option>
//               <option value="teacher">Teacher</option>
//               <option value="institution">Institution</option>
//             </select>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Common */}
//             <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="w-full border p-2 rounded" />
//             <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full border p-2 rounded" />
//             <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full border p-2 rounded" />
//             <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required className="w-full border p-2 rounded" />

//             {/* Conditional Inputs */}
//             {role === 'student' && (
//               <>
//                 <input type="text" name="institution" placeholder="Institution Name" onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="text" name="class" placeholder="Class" onChange={handleChange} className="w-full border p-2 rounded" />
//               </>
//             )}

//             {role === 'teacher' && (
//               <>
//                 <input type="text" name="qualification" placeholder="Qualification" onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="text" name="experience" placeholder="Experience (optional)" onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="text" name="document" placeholder="Aadhar or PAN" onChange={handleChange} className="w-full border p-2 rounded" />

//                 <label className="block mt-2">Profile Photo</label>
//                 <input type="file" name="profilePhoto" accept="image/*" onChange={handleFileChange} className="w-full" />

//                 <label className="block mt-2">Qualification Certificate (PDF)</label>
//                 <input type="file" name="qualificationCert" accept="application/pdf" onChange={handleFileChange} className="w-full" />

//                 <label className="block mt-2">ID Proof (PDF)</label>
//                 <input type="file" name="idProof" accept="application/pdf" onChange={handleFileChange} className="w-full" />
//               </>
//             )}

//             {role === 'institution' && (
//               <>
//                 <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="text" name="city" placeholder="City" onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="text" name="state" placeholder="State" onChange={handleChange} className="w-full border p-2 rounded" />
//                 <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} className="w-full border p-2 rounded" />
//               </>
//             )}

//             {/* Submit */}
//             <button type="submit" className="bg-blue-600 text-white  rounded hover:bg-blue-500 w-full bg-orange-700 text-white py-2 rounded hover:bg-orange-800 transition">
//               Register
//             </button>
//           </form>

//           <p className="text-sm text-center mt-4">
//             Already registered? <a href="/login" className="text-orange-600 underline">Login here</a>
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default UnifiedRegister;



import React, { useState } from 'react'; 
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import  './Ragistesan.css'

// Backend base URL - deployed backend
const API_BASE_URL = 'https://vedarambh-backend.onrender.com';

const UnifiedRegister = () => {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    qualification: '',
    experience: '',
    document: '',
    institution: '',
    class: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [files, setFiles] = useState({
    profilePhoto: null,
    qualificationCert: null,
    idProof: null,
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFiles(prev => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      let endpoint = '';
      let data;

      if (role === 'teacher') {
        endpoint = '/api/teacher/register';
        data = new FormData();

        for (let key in formData) {
          data.append(key, formData[key]);
        }

        if (files.profilePhoto) data.append('profilePhoto', files.profilePhoto);
        if (files.qualificationCert) data.append('qualificationCert', files.qualificationCert);
        if (files.idProof) data.append('idProof', files.idProof);
      } else if (role === 'student') {
        endpoint = '/api/student/register';
        data = { ...formData };
      } else if (role === 'institution') {
        endpoint = '/api/institutions/register';
        data = { ...formData };
      }

      const res = await axios.post(`${API_BASE_URL}${endpoint}`, data, {
        headers: role === 'teacher' ? { 'Content-Type': 'multipart/form-data' } : {}
      });

      alert(res.data.message || 'Registered successfully!');
      // Optional: redirect to login or clear form here
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Registration failed!');
    }
  };

  return (
    <>
      <Navbar />
      <div className=" Ragistesan_Man_Cantenar min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-white flex items-center justify-center px-4">
        <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-orange-800 text-center">📝 Register on VedArambh</h2>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">Register As</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="institution">Institution</option>
            </select>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />

            {role === 'student' && (
              <>
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution Name"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  name="class"
                  placeholder="Class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </>
            )}

            {role === 'teacher' && (
              <>
                <input
                  type="text"
                  name="qualification"
                  placeholder="Qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  name="experience"
                  placeholder="Experience (optional)"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  name="document"
                  placeholder="Aadhar or PAN"
                  value={formData.document}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />

                <label className="block mt-2">Profile Photo</label>
                <input
                  type="file"
                  name="profilePhoto"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full"
                />

                <label className="block mt-2">Qualification Certificate (PDF)</label>
                <input
                  type="file"
                  name="qualificationCert"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="w-full"
                />

                <label className="block mt-2">ID Proof (PDF)</label>
                <input
                  type="file"
                  name="idProof"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="w-full"
                />
              </>
            )}

            {role === 'institution' && (
              <>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </>
            )}

            <button
              type="submit"
              className="bg-blue-500 p-4 bg-orange-700 text-white py-2 rounded hover:bg-orange-800 w-full transition"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already registered? <a href="/login" className="text-orange-600 underline">Login here</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UnifiedRegister;
