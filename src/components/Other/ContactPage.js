import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp link generate
    const whatsappNumber = "917370057723"; // <-- अपना WhatsApp नंबर डालो (91 के साथ)
    const whatsappMessage = `Hello, I am ${form.name} (${form.email}). My message: ${form.message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Email submit (FormSubmit का hidden form trigger होगा)
    e.target.submit();

    // साथ ही WhatsApp भी open हो जाएगा
    window.open(whatsappURL, "_blank");

    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/chandan552800@gmail.com"
          method="POST"
          className="space-y-4"
        >
          {/* FormSubmit hidden inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Contact Form Submission!"
          />
          <input
            type="hidden"
            name="_next"
            value="https://yourwebsite.com/thank-you"
          />

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full border p-2 rounded h-32"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
