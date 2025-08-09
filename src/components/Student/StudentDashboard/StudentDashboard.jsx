// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import Navbar from '../Navbar';
// // import Footer from '../Footer';

// // const StudentDashboard = () => {
// //   const [student, setStudent] = useState(null);
// //   const token = localStorage.getItem('studentToken');

// //   useEffect(() => {
// //     const fetchStudent = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:5000/api/student/profile', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setStudent(res.data);
// //       } catch (err) {
// //         console.error('Error fetching profile', err);
// //       }
// //     };
// //     fetchStudent();
// //   }, [token]);

// //   if (!student) return <div className="text-center mt-10 text-gray-600">Loading...</div>;

// //   return (
// //     <>
// //     <Navbar/>
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <h2 className="text-2xl font-bold mb-4 text-blue-800">Welcome, {student.name}</h2>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// //         <div className="bg-white shadow rounded p-4">
// //           <h3 className="font-semibold text-lg mb-2">Profile Info</h3>
// //           <p><strong>Email:</strong> {student.email}</p>
// //           <p><strong>Class:</strong> {student.class}</p>
// //           <p><strong>Institution:</strong> {student.institution}</p>
// //         </div>

// //         <div className="bg-white shadow rounded p-4">
// //           <h3 className="font-semibold text-lg mb-2">Your Courses</h3>
// //           <ul className="list-disc pl-5">
// //             {student.courses?.length > 0
// //               ? student.courses.map((c, i) => <li key={i}>{c}</li>)
// //               : <p className="text-gray-500">No courses enrolled</p>}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //     <Link to="/AddCourse">
// //           <button className="bg-blue-400 mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-black font-medium rounded-xl shadow-lg">
// //             Browse Courses
// //           </button>
// //         </Link>
// //     <Footer/>
// //     </>
// //   );
// // };

// // export default StudentDashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const StudentDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const token = localStorage.getItem('studentToken');

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/student/dashboard', {
//       headers: { Authorization: `Bearer ${token}` }
//     }).then(res => setCourses(res.data.enrolledCourses));
//   }, [token]);

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <h2 className="text-2xl font-bold text-blue-700 mb-4">Welcome, Student</h2>
//       <h3 className="text-lg mb-2">📚 Your Courses:</h3>
//       <ul className="list-disc pl-6">
//         {courses.map(course => (
//           <li key={course._id}>{course.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentDashboard;

// import React from 'react';
// import Sidebar from './Sidebar';
// import Topbar from './Topbar';
// import QuickStats from './QuickStats';
// import CalendarWidget from './CalendarWidget';
// import ProgressOverview from './ProgressOverview';
// import ContinueLearning from './ContinueLearning';
// import NewLessons from './NewLessons';
// import ActivityFeed from './ActivityFeed';

// const StudentDashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Topbar />

//         <main className="flex-1 overflow-y-auto p-6 space-y-6">
//           <h1 className="text-2xl font-bold">Welcome, [Student Name]</h1>
//           <p className="text-gray-600 mb-4">Start your learning journey today.</p>

//           <QuickStats />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <ActivityFeed />
//             <CalendarWidget />
//           </div>

//           <ProgressOverview />
//           <ContinueLearning />
//           <NewLessons />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;


import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import QuickStats from './QuickStats';
import CalendarWidget from './CalendarWidget';
import ProgressOverview from './ProgressOverview';
import ContinueLearning from './ContinueLearning';
import NewLessons from './NewLessons';
import ActivityFeed from './ActivityFeed';

const StudentDashboard = () => {

  const studentName = localStorage.getItem('name'); // 👈 naam nikal lo

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-6 space-y-6 overflow-y-auto">
          {/* Welcome Heading */}
          <div>
             <div className="p-4">
              <h1 className="text-2xl font-bold">
                Welcome, {studentName ? studentName : 'Student'}
             </h1>
              <p>Start your learning journey today.</p>
            </div>
          </div>

        

          {/* Middle Grid: Activity + Calendar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            
          </div>

          {/* Progress Overview */}
          

          {/* Bottom Section: Learning + Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-50%">
            
            
          </div>
          <table>
            <tr></tr>
            <tr>
              <td><ProgressOverview /></td>
            
              <td><CalendarWidget /></td>
            </tr>
            <tr>
              <td>
                  {/* Quick Stats */}
                  <QuickStats />
              </td>
            </tr>
            <tr>
              <td><ActivityFeed /></td>
              <td></td>
            </tr>
            <tr>
              <td><ContinueLearning /></td>
              <td><NewLessons /></td>
            </tr>
          </table>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
