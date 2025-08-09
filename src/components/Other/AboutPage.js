import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-3xl font-bold text-orange-800 mb-4">About VedArambh</h2>
      <p className="text-gray-700 text-lg">
        VedArambh is a Sanatan-inspired learning initiative designed to bring ancient Indian wisdom to modern
        classrooms. We aim to connect Students, Teachers, and Institutions through an accessible digital platform
        focused on the values and teachings of Sanatan Dharma.
      </p>
      <p className="mt-4 text-gray-700">
        From Playgroup to Class 10, children can now learn the essence of Vedas, Shlokas, Dharma, and Indian values
        in a structured and interactive way.
      </p>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;
