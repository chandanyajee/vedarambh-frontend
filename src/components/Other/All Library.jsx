import './style.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../Home.css';

const AllLibrary = () => {
  
  return (
      <div>
        <Navbar />
        <h2 className="text-2xl font-bold mb-4">  All Library Panal</h2>
        <div className="p-4 max-w-md mx-auto shadow rounded bg-white mt-6">
          
            <h2 className="text-2xl font-bold mb-4"> Video Library</h2>

          <div className='diplay'>
            <Link to = '/VideoLibraryPage' > <br /><button type="submit" className=" bg-blue-600 text-white py-2 rounded hover:bg-blue-500"> Video L </button></Link>
          </div>

          <h2 className="text-2xl font-bold mb-4"> Sort Video Page</h2>
          <div className='diplay'>
            <Link to = '/ShortsPage' > <br /><button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Ragistashan</button></Link>
          </div>

            <h2 className="text-2xl font-bold mb-4"> LibraryPage</h2>

          <div className='diplay'>
            <Link to = '/LibraryPage' > <br /><button type="submit" className=" bg-blue-600 text-white py-2 rounded hover:bg-blue-500">LibraryPage</button></Link>
          </div>

           
        </div>
        <Footer/>
      </div>
    );
};

export default AllLibrary;
