import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/public/contact', form);
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Failed to send message');
    }
  };

  return (
    <>
    <Navbar />
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className="w-full border p-2 rounded" />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required className="w-full border p-2 rounded" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required className="w-full border p-2 rounded h-32" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;
