import { useState } from 'react';
import axios from 'axios';

function StudentRegisterForm() {
  const [formData, setFormData] = useState({
    rollNo: '',
    admissionNo: '',
    name: '',
    fatherName: '',
    dob: '',
    mobile: '',
    address: '',
    email: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/students/register', formData);
      alert('Student registered!');
    } catch (error) {
      alert('Error: ' + error.response?.data?.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow w-full max-w-lg mx-auto space-y-4">
      {['rollNo', 'admissionNo', 'name', 'fatherName', 'dob', 'mobile', 'address', 'email'].map(field => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={formData[field]}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Register Student</button>
    </form>
  );
}

export default StudentRegisterForm;
