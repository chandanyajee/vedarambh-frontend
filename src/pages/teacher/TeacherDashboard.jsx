import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TeacherLayout from "../../components/Teacher/TeacherLayout";
import StatCard from "../../components/Teacher/StatCard";
import TinyAreaChart from "../../components/Teacher/TinyAreaChart";
import ProgressCircle from "../../components/Teacher/ProgressCircle.jsx";
import { FaPlus, FaArrowRightLong } from "react-icons/fa6";
import API_BASE_URL from "../../config";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import "./TeacherDashboard.css";

export default function TeacherDashboard() {
  const [teacher, setTeacher] = useState(null);
  const [courses, setCourses] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("teacherToken");

    axios
      .get(`${API_BASE_URL}/api/teacher/dashboard`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setTeacher(res.data.teacher || {});
        setCourses(res.data.courses || []);
        setRecent(res.data.recent || []);
      })
      .catch((err) => {
        console.error("API Error:", err.message);

        // fallback demo data
        setTeacher({ name: "Shikshak Ji", qualification: "MA Sanskrit" });
        setCourses([
          {
            _id: "1",
            title: "Bhagavad Gita – Chapter 1",
            students: 42,
            progress: 76,
          },
          { _id: "2", title: "Upanishads Basics", students: 18, progress: 54 },
        ]);
        setRecent([
          { id: 1, text: "New assignment submitted by Arjun", time: "15m ago" },
          {
            id: 2,
            text: "2 students joined Bhagavad Gita course",
            time: "1h ago",
          },
        ]);
      });
  }, []);

  return (
    <TeacherLayout teacher={teacher}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-orange-50 to-transparent p-6 rounded-2xl">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-orange-900">
              Welcome, {teacher?.name || "Teacher"}
            </h1>
            <p className="text-orange-700/80 text-sm sm:text-base max-w-xl">
              Manage your courses, track progress, and engage with students.
            </p>
          </div>
          <Link
            to="/teacher/courses/new"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm hover:shadow-md"
          >
            <FaPlus className="text-xs" /> New Course
          </Link>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-orange-50 to-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-orange-900/70">
                Active Students
              </div>
              <div className="mt-2 text-2xl font-bold text-orange-900">
                {courses.reduce((a, c) => a + (c.students || 0), 0)}
              </div>
              <div className="mt-4">
                <TinyAreaChart />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-blue-900/70">
                Published Courses
              </div>
              <div className="mt-2 text-2xl font-bold text-blue-900">
                {courses.length}
              </div>
              <div className="mt-4">
                <TinyAreaChart data={[3, 4, 4, 5, 6, 7, 6, 8]} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-green-900/70">
                Avg. Completion
              </div>
              <div className="mt-2 text-2xl font-bold text-green-900">72%</div>
              <div className="mt-4 flex justify-center">
                <ProgressCircle percent={72} size={50} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-purple-900/70">
                New Messages
              </div>
              <div className="mt-2 text-2xl font-bold text-purple-900">
                8{" "}
                <span className="text-xs font-normal text-purple-600">
                  Last 24h
                </span>
              </div>
              <div className="mt-4">
                <TinyAreaChart data={[1, 2, 1, 3, 2, 4, 3]} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Courses */}
          <section className="xl:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="px-6 py-4 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                My Courses
              </h2>
              <Link
                to="/teacher/courses"
                className="text-orange-600 hover:text-orange-700 inline-flex items-center gap-1.5 text-sm font-medium"
              >
                View all <FaArrowRightLong className="text-xs" />
              </Link>
            </div>

            <div className="divide-y divide-gray-100">
              {courses.map((c) => (
                <div
                  key={c._id}
                  className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate mb-1">
                      {c.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {c.students || 0} students enrolled
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <ProgressCircle percent={c.progress || 0} size={44} />
                      <span className="text-sm text-gray-600 hidden sm:block">
                        {c.progress || 0}% Complete
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={`/teacher/courses/${c._id}/edit`}
                        className="px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/course/${c._id}`}
                        className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-sm font-medium text-white transition-colors"
                      >
                        View Course
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {courses.length === 0 && (
                <div className="p-8 text-center">
                  <p className="text-gray-500 text-sm">
                    No courses yet. Create your first one!
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-semibold text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { to: "/teacher/courses/new", label: "Create Assignment" },
                  { to: "/teacher/discussions", label: "Open Discussion" },
                  { to: "/teacher/students/invite", label: "Invite Students" },
                  { to: "/teacher/reports", label: "View Reports" },
                ].map((action) => (
                  <Link
                    key={action.to}
                    to={action.to}
                    className="px-4 py-2.5 rounded-xl border border-gray-200 hover:border-orange-200 hover:bg-orange-50 text-center text-sm font-medium text-gray-700 hover:text-orange-700 transition-colors"
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </section>

            {/* Recent Activity */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="px-6 py-4 border-b font-semibold text-gray-900">
                Recent Activity
              </h2>
              <div className="divide-y divide-gray-100">
                {recent.map((it) => (
                  <div
                    key={it.id}
                    className="px-6 py-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <p className="text-sm text-gray-700 mb-1">{it.text}</p>
                    <p className="text-xs text-gray-500">{it.time}</p>
                  </div>
                ))}
                {recent.length === 0 && (
                  <div className="px-6 py-8 text-center">
                    <p className="text-gray-500 text-sm">No recent updates</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
}
