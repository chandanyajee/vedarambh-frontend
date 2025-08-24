import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TeacherLayout from '../../components/Teacher/TeacherLayout';
import StatCard from '../../components/Teacher/StatCard';
import TinyAreaChart from '../../components/Teacher/TinyAreaChart';
import ProgressCircle from '../../components/Teacher/ProgressCircle.jsx';
import { FaPlus, FaArrowRightLong } from 'react-icons/fa6';
import API_BASE_URL from '../../config';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import './TeacherDashboard.css';

export default function TeacherDashboard() {
  const [teacher, setTeacher] = useState(null);
  const [courses, setCourses] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('teacherToken');

    axios.get(`${API_BASE_URL}/api/teacher/dashboard`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setTeacher(res.data.teacher || {});
        setCourses(res.data.courses || []);
        setRecent(res.data.recent || []);
      })
      .catch(err => {
        console.error("API Error:", err.message);

        // fallback demo data
        setTeacher({ name: 'Shikshak Ji', qualification: 'MA Sanskrit' });
        setCourses([
          { _id: '1', title: 'Bhagavad Gita – Chapter 1', students: 42, progress: 76 },
          { _id: '2', title: 'Upanishads Basics', students: 18, progress: 54 },
        ]);
        setRecent([
          { id: 1, text: 'New assignment submitted by Arjun', time: '15m ago' },
          { id: 2, text: '2 students joined Bhagavad Gita course', time: '1h ago' },
        ]);
      });
  }, []);

  return (
    <TeacherLayout teacher={teacher}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <div>
          <h1 className="text-2xl font-bold text-orange-900">
            Welcome, {teacher?.name || 'Teacher'}
          </h1>
          <p className="text-gray-600">
            Manage your courses, track progress, and engage with students.
          </p>
        </div>
        <Link
          to="/teacher/courses/new"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg"
        >
          <FaPlus /> New Course
        </Link>
      </div>

      {/* Dashboard Stats Card */}
      <Card className="w-full shadow-md rounded-2xl mb-6">
        <CardHeader>
          <h2 className="text-lg font-semibold">Dashboard Overview</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCard  
              title="Active Students"  
              value={courses.reduce((a, c) => a + (c.students || 0), 0)}  
              right={<TinyAreaChart />}  
            />
            <StatCard  
              title="Published Courses"  
              value={courses.length}  
              right={<TinyAreaChart data={[3, 4, 4, 5, 6, 7, 6, 8]} />}  
            />
            <StatCard  
              title="Avg. Completion"  
              value="72%"  
              right={<ProgressCircle percent={72} />}  
            />
            <StatCard  
              title="New Messages"  
              value="8"  
              sub="Last 24h"  
              right={<TinyAreaChart data={[1, 2, 1, 3, 2, 4, 3]} />}  
            />
          </div>
        </CardContent>
      </Card>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Courses */}
        <section className="xl:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="font-semibold">My Courses</h2>
            <Link to="/teacher/courses" className="text-orange-700 hover:underline flex items-center gap-1">
              View all <FaArrowRightLong />
            </Link>
          </div>

          <div className="divide-y max-h-[420px] overflow-y-auto">
            {courses.map(c => (
              <div key={c._id} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-orange-50/40">
                
                {/* Course Info */}
                <div className="flex-1">
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-gray-500">{c.students || 0} students</div>
                </div>

                {/* Progress + Buttons */}
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block text-sm text-gray-600">Progress</div>
                  <ProgressCircle percent={c.progress || 0} size={56} />
                  <div className="flex gap-2">
                    <Link to={`/teacher/courses/${c._id}/edit`} className="px-3 py-1 rounded-md border hover:bg-gray-50">
                      Edit
                    </Link>
                    <Link to={`/course/${c._id}`} className="px-3 py-1 rounded-md bg-orange-600 text-white hover:bg-orange-700">
                      Open
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {courses.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                No courses yet. Create your first one!
              </div>
            )}
          </div>
        </section>

        {/* Sidebar */}
        <section className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="font-semibold mb-3">Quick Actions</div>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/teacher/courses/new" className="px-3 py-2 rounded-lg border hover:bg-gray-50 text-center text-sm">
                Create Assignment
              </Link>
              <Link to="/teacher/discussions" className="px-3 py-2 rounded-lg border hover:bg-gray-50 text-center text-sm">
                Open Discussion
              </Link>
              <Link to="/teacher/students/invite" className="px-3 py-2 rounded-lg border hover:bg-gray-50 text-center text-sm">
                Invite Students
              </Link>
              <Link to="/teacher/reports" className="px-3 py-2 rounded-lg border hover:bg-gray-50 text-center text-sm">
                View Reports
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-4 border-b font-semibold">Recent Activity</div>
            <ul className="max-h-72 overflow-y-auto">
              {recent.map(it => (
                <li key={it.id} className="px-4 py-3 border-b last:border-b-0 hover:bg-orange-50/40">
                  <div className="text-sm">{it.text}</div>
                  <div className="text-xs text-gray-500">{it.time}</div>
                </li>
              ))}
              {recent.length === 0 && (
                <li className="px-4 py-6 text-center text-gray-500">No recent updates</li>
              )}
            </ul>
          </div>
        </section>
      </div>
    </TeacherLayout>
  );
}
