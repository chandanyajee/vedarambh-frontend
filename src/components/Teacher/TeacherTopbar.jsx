import React from 'react';
import { FaBell, FaMagnifyingGlass } from 'react-icons/fa6';

export default function TeacherTopbar({ teacher }) {
  return (
    <header className="h-16 bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-30">
      <div className="h-full px-4 lg:pl-80 flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 flex-1 max-w-xl bg-gray-100 rounded-lg px-3">
          <FaMagnifyingGlass className="text-gray-500" />
          <input
            type="text"
            placeholder="Search courses, students, topics…"
            className="bg-transparent outline-none w-full py-2"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100">
          <FaBell />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-orange-600 text-white text-[10px] grid place-items-center">3</span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <img
            src={teacher?.avatar || 'https://i.pravatar.cc/40'}
            alt="avatar"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <div className="text-sm font-semibold">{teacher?.name || 'Teacher'}</div>
            <div className="text-xs text-gray-500">{teacher?.qualification || 'Instructor'}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
