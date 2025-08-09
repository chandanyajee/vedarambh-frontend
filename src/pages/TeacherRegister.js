import React, { useState } from 'react';
import axios from 'axios';

const TeacherRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    mode: 'online', // online or offline
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/teachers/register', formData);
      alert('Registration Successful!');
      console.log(res.data);
    } catch (error) {
      alert('Registration Failed!');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Teacher Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required /><br />
        <input type="text" name="subject" placeholder="Subject You Teach" onChange={handleChange} required /><br />
        
        <select name="mode" onChange={handleChange}>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select><br /><br />
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default TeacherRegister;
