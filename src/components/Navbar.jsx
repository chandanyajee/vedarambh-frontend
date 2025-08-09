// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
//             <div className="flex items-center gap-2">
//               <img
//                 src="/logo.png"
//                 alt="VedArambh Logo"
//                 className="w-10 h-10"
//               />
//               <Link to="/">
//               <div>
//                 <h1 className="text-xl font-bold text-orange-700">VedArambh</h1>
//                 <p className="text-sm text-gray-600">A Sanatan Initiative</p>
//               </div>
//               </Link>
//             </div>
//             <nav className="space-x-6 text-md font-medium text-gray-700">
              
              // <Link to = "/AllLibrary"><button className="hover:text-orange-600 font-medium" >All Library</button></Link>
              // <Link to = "/Login_panal"><button className="hover:text-orange-600 font-medium" >Loginpanel</button></Link>
              // <Link to = "/student"><button className="hover:text-orange-600 font-medium" >Student</button></Link>
              // <Link to = "/StudentCourses"><button className="hover:text-orange-600 font-medium" >Courses</button></Link>
              // <Link to = "/about"><button className="hover:text-orange-600 font-medium" >About</button></Link>
              // <Link to = "/contact"><button className="hover:text-orange-600 font-medium" >Contact</button></Link>
              
//               {/* <button onClick>Click me</button> */}
//             </nav>
//           </header>
    
//   );
// }

// src/components/Navbar.jsx

// Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import  './Home.css'
import LogoutButton from './Login panal/LogoutButton';

// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
import Button from './ui/Button';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [language, setLanguage] = useState('English');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'English' ? 'हिंदी' : 'English');
  };


  return (
    <>
    
    {/* <nav className="bg- shadow-sm border-b border-orange-100 fixed top-0 w-full z-50    "> */}
      {/* Top Nav (Logo + Menu Toggle) */}
      {/* <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center"> */}
        {/* Logo */}
        {/* <Link to="/">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="VedArambh Logo" className="w-10 h-10 rounded" />
            <div>
              <h1 className="text-xl font-bold text-orange-800">VedArambh</h1>
              <p className="text-xs text-gray-600">A Sanatan Initiative</p>
            </div>
          </div>
        </Link> */}

        {/* Desktop Nav Links */}
        {/* <ul className="hidden Nave md:flex space-x-6  font-medium text-md  text-gray-700 ">
          <li><Link to="/StudentCourses" className="hover:text-orange-600">Coureses</Link></li> */}
          {/* <li><Link to="/AllLibrary" className="hover:text-orange-600">AllLibrary</Link></li> */}
          {/* <li><Link to="/login" className="hover:text-orange-600">Loginpanel</Link></li> */}
          {/* <li><Link to="/student" className="hover:text-orange-600">Student</Link></li> */}
          
          {/* <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
          <LogoutButton />
        </ul> */}

        {/* Mobile Toggle Button */}
        {/* <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div> */}

      {/* Mobile Slide-down Menu BELOW navbar */}
      {/* <div className={`md:hidden duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-96 py-4 px-6' : 'max-h-0 px-6 py-0'}`}>
        <ul className="flex flex-col gap-4 text-gray-700 text-base">
          <li><Link to="/AllLibrary" onClick={toggleMenu}>All Library</Link></li>
          <li><Link to="/Login_panal" onClick={toggleMenu}>Loginpanel</Link></li>
          <li><Link to="/studen" onClick={toggleMenu}>Student</Link></li>
          <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div> */}
    {/* </nav> */}


    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-['Pacifico'] text-2xl text-orange-500">VedArambh</span>
            <span className="text-sm text-gray-500 hidden sm:block">A Sanatan Initiative</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/courses" className="text-gray-700 hover:text-orange-500 transition-colors">
              Courses
            </Link>
            <Link href="/video-library" className="text-gray-700 hover:text-orange-500 transition-colors">
              Videos
            </Link>
            <Link href="/calendar" className="text-gray-700 hover:text-orange-500 transition-colors">
              Calendar
            </Link>
            <Link href="/upload" className="text-gray-700 hover:text-orange-500 transition-colors">
              Upload
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors cursor-pointer whitespace-nowrap flex items-center space-x-1"
            >
              <i className="ri-translate-2 w-4 h-4 flex items-center justify-center"></i>
              <span>{language}</span>
            </button>
            
            <Link href="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
            
            <Link href="/signup">
              <Button size="sm">Join VedArambh</Button>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-6 h-6 flex items-center justify-center"
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/courses" className="text-gray-700 hover:text-orange-500 transition-colors">
                Courses
              </Link>
              <Link href="/video-library" className="text-gray-700 hover:text-orange-500 transition-colors">
                Videos
              </Link>
              <Link href="/calendar" className="text-gray-700 hover:text-orange-500 transition-colors">
                Calendar
              </Link>
              <Link href="/upload" className="text-gray-700 hover:text-orange-500 transition-colors">
                Upload Content
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>

    </>



  );
};

export default Navbar;

