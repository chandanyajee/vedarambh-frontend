import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const CourseDiscussion = () => {
  
   // UI display
    <p className="mt-4"><strong>Progress:</strong> {progress}%</p>

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6">

        <form onSubmit={handlePostComment}>
  <textarea value={text} onChange={e => setText(e.target.value)} className="w-full p-2 border rounded" />
  <button className="bg-blue-600 text-white px-4 py-1 rounded mt-2">Post</button>
</form>

{comments.map(c => (
  <div key={c._id} className="p-2 border-b">
    <strong>{c.user.name}</strong>
    <p>{c.text}</p>
  </div>
))}



      </div>  


      <Footer />
    </>
  );
};

export default CourseDiscussion;
