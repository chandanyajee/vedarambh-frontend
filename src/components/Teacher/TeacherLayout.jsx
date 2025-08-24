import React, { useState } from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherTopbar from './TeacherTopbar';

export default function TeacherLayout({ teacher, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0`}>
        <TeacherSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 lg:ml-64">
        {/* Topbar */}
        <TeacherTopbar teacher={teacher} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="p-6 lg:p-10">{children}</main>
      </div>
    </div>
  );
}
