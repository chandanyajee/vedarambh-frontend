import React from 'react';
import LogoutButton from '../../Login panal/LogoutButton';

const Topbar = () => (
  <header className="bg-white p-4 shadow flex justify-between items-center">
    <nav className="space-x-6 font-medium">
      <a href="/">Home</a>
      <a href="#">Courses</a>
      <a href="#">Assignments</a>
      <a href="#">Calendar</a>
      <a href="#">Resources</a>
    </nav>
    <div>
      <LogoutButton />🌗
    </div>
  </header>
);

export default Topbar;
