import React from "react";
import { Link } from "react-router-dom";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaClipboardList,
  FaUserGraduate,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

const TeacherSidebar = () => {
  return (
    <div>
      <h2 className="text-xl mt-16 font-bold mb-6">Teacher Panel</h2>
      <ul className=" space-y-4">
        <li>
          <Link to="/teacher/dashboard" className="flex items-center gap-2 hover:text-blue-600">
            <FaChalkboardTeacher /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/teacher/courses" className="flex items-center gap-2 hover:text-blue-600">
            <FaBookOpen /> Courses
          </Link>
        </li>
        <li>
          <Link to="/teacher/assignments" className="flex items-center gap-2 hover:text-blue-600">
            <FaClipboardList /> Assignments
          </Link>
        </li>
        <li>
          <Link to="/teacher/students" className="flex items-center gap-2 hover:text-blue-600">
            <FaUserGraduate /> Students
          </Link>
        </li>
        <li>
          <Link to="/teacher/settings" className="flex items-center gap-2 hover:text-blue-600">
            <FaCog /> Settings
          </Link>
        </li>
        <li>
          <Link to="/logout" className="flex items-center gap-2 hover:text-red-600">
            <FaSignOutAlt /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeacherSidebar;
