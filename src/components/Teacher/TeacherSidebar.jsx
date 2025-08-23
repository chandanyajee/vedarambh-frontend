import React from "react";
import { Link } from "react-router-dom";
import {
  FaChalkboardTeacher, // Font Awesome v5 se
  FaBookOpen,
  FaClipboardList,
  FaUserGraduate,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa"; // ✅ yahan fa6 ki jagah fa

const TeacherSidebar = () => {
  return (
    <div className="sidebar">
      <h2>Teacher Panel</h2>
      <ul>
        <li>
          <Link to="/teacher/dashboard">
            <FaChalkboardTeacher /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/teacher/courses">
            <FaBookOpen /> Courses
          </Link>
        </li>
        <li>
          <Link to="/teacher/assignments">
            <FaClipboardList /> Assignments
          </Link>
        </li>
        <li>
          <Link to="/teacher/students">
            <FaUserGraduate /> Students
          </Link>
        </li>
        <li>
          <Link to="/teacher/settings">
            <FaCog /> Settings
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <FaSignOutAlt /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeacherSidebar;
