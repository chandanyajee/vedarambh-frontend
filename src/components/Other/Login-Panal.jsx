import './style.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../Home.css';

const Login_panal = () => {
  
  return (
      <div>
        <Navbar />
        <h2 className="text-2xl font-bold mb-4">  Registration / Login Panal</h2>
        <div className="p-4 max-w-md mx-auto shadow rounded bg-white mt-6">
          
            <h2 className="text-2xl font-bold mb-4"> Student</h2>

          <div className='diplay'>
            <Link to = '/student' > <br /><button type="submit" className=" bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Ragistashan</button></Link>
            <Link to = 'StudentLogin' > <br /><button type="submit" className=" bg-blue-600 text-white py-2 rounded hover:bg-blue-500"> Login </button></Link>
          </div>

          <h2 className="text-2xl font-bold mb-4"> Admin</h2>
          <div className='diplay'>
            <Link to = '/admin/login' > <br /><button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Ragistashan</button></Link>
            <Link to = '/admin/login' > <br /><button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"> Login </button></Link>
          </div>

            <h2 className="text-2xl font-bold mb-4"> Teacher</h2>

          <div className='diplay'>
            <Link to = '/teacher/register' > <br /><button type="submit" className=" bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Ragistashan</button></Link>
            <Link to = '/teacher/login' > <br /><button type="submit" className=" bg-blue-600 text-white py-2 rounded hover:bg-blue-500"> Login </button></Link>
          </div>

           <h2 className="text-2xl font-bold mb-4"> Institution</h2>

          <div className='diplay'>
            <Link to = '/InstitutionRegister' > <br /><button type="submit" className=" bg-blue-600 text-white py-2 rounded hover:bg-blue-500">Ragistashan</button></Link>
            <Link to = '/login' > <br /><button type="submit" className=" bg-blue-600 text-white py-2 rounded hover:bg-blue-500"> Login </button></Link>
          </div>
        </div>
        <Footer/>
      </div>
    );
};

export default Login_panal;
