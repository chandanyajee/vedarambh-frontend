import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const TeacherLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/teacher/login', { email, password });
      if (res.data.success) {
        localStorage.setItem('teacherToken', res.data.token);
        navigate('/teacher/dashboard');
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <>
    <Navbar />
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Teacher Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
        <br/> <br />
        <Link to='/teacher/register' >  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button></Link>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default TeacherLogin;
