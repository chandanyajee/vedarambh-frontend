import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import TeacherTopbar from './TeacherTopbar';

export default function TeacherLayout({ teacher, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      <TeacherSidebar />
      <TeacherTopbar teacher={teacher} />
      <main className="px-4 lg:pl-80 pt-6 pb-10">{children}</main>
    </div>
  );
}
