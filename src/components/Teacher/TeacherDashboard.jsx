// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import Navbar from '../Navbar';
// // import Footer from '../Footer';


// // const TeacherDashboard = () => {
// //   const [teacher, setTeacher] = useState(null);
// //   const [courses, setCourses] = useState([]);
// //   const token = localStorage.getItem('teacherToken');

// //   useEffect(() => {
// //     const fetchDashboard = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:5000/api/teacher/dashboard', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setTeacher(res.data.teacher);
// //         setCourses(res.data.courses);
// //       } catch (err) {
// //         console.error('Failed to load dashboard', err);
// //       }
// //     };

// //     fetchDashboard();
// //   },);

// //   if (!teacher) return <div className="text-center mt-10">Loading Dashboard...</div>;


// //   const handleDelete = async (id) => {
// //   if (!window.confirm("Are you sure you want to delete this course?")) return;
// //   try {
// //     await axios.delete(`http://localhost:5000/api/teacher/course/${id}`, {
// //       headers: { Authorization: `Bearer ${token}` }
// //     });
// //     setCourses(courses.filter((c) => c._id !== id));
// //     alert("Course deleted successfully");
// //   } catch (err) {
// //     alert("Failed to delete course");
// //   }
// // };

// // const handleEdit = (course) => {
// //   const newTitle = prompt("Enter new course title:", course.title);
// //   if (!newTitle) return;
// //   try {
// //     axios.put(`http://localhost:5000/api/teacher/course/${course._id}`, {
// //       title: newTitle,
// //     }, {
// //       headers: { Authorization: `Bearer ${token}` }
// //     }).then((res) => {
// //       alert("Course updated");
// //       // update local list
// //       const updated = courses.map(c => c._id === course._id ? {...c, title: newTitle} : c);
// //       setCourses(updated);
// //     });
// //   } catch (err) {
// //     alert("Failed to update course");
// //   }
// // };


// //   return (
// //     <>
// //     <Navbar />
// //     <div className="max-w-6xl mx-auto p-6">
// //       <h2 className="text-2xl font-bold text-blue-800 mb-4">Welcome, {teacher.name}</h2>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// //         <div className="bg-white p-4 rounded shadow">
// //           <h3 className="text-lg font-semibold mb-2">Profile</h3>
// //           <p><strong>Email:</strong> {teacher.email}</p>
// //           <p><strong>Qualification:</strong> {teacher.qualification}</p>
// //           <p><strong>Experience:</strong> {teacher.experience}</p>
// //         </div>

// //         <div className="bg-white p-4 rounded shadow">
// //           <h3 className="text-lg font-semibold mb-2">My Courses</h3>
// //           {courses.length > 0 ? (
// //             <ul className="list-disc pl-5">
// //               {courses.map((course) => (
// //                 <li key={course._id}>{course.title}</li>
// //               ))}
// //             </ul>
// //           ) : (
// //             <p className="text-gray-600">No courses added yet.</p>
// //           )}
// //         </div>
// //       </div>

// //           <Link to="/teacher/add-course">
// //   <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded mb-4">
// //     + Add New Course
// //   </button>
// // </Link>



// //   <div className="bg-white p-4 rounded shadow">
// //   <h3 className="text-lg font-semibold mb-2">My Courses</h3>
// //   {courses.length > 0 ? (
// //     <ul className="space-y-3">
// //       {courses.map((course) => (
// //         <li key={course._id} className="border p-3 rounded flex justify-between items-center">
// //           <div>
// //             <p className="font-medium">{course.title}</p>
// //             <p className="text-sm text-gray-500">{course.category}</p>
// //           </div>
// //           <div className="space-x-2">
// //             <button
// //               onClick={() => handleEdit(course)}
// //               className="text-blue-600 hover:underline"
// //             >
// //               Edit
// //             </button>
// //             <button
// //               onClick={() => handleDelete(course._id)}
// //               className="text-red-600 hover:underline"
// //             >
// //               Delete
// //             </button>
// //           </div>
// //         </li>
// //       ))}
// //     </ul>
// //   ) : (
// //     <p className="text-gray-600">No courses added yet.</p>
// //   )}
// // </div>


// //     </div>

// //     <Link to="/teacher/add-course">
// //   <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded mb-4">
// //     + Add New Course
// //   </button>
// // </Link>
  

// //     <Footer/>
// //     </>
// //   );
// // };

// // export default TeacherDashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TeacherDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const token = localStorage.getItem('teacherToken');

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/teacher/my-courses', {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(res => setCourses(res.data))
//     .catch(err => console.error(err));
//   }, [token]);

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Welcome, Teacher</h2>

//       <div className="grid grid-cols-3 gap-4 mb-6">
//         <div className="bg-white p-4 rounded shadow">Active Courses: {courses.length}</div>
//         <div className="bg-white p-4 rounded shadow">Total Students: --</div>
//         <div className="bg-white p-4 rounded shadow">Earnings: ₹--</div>
//       </div>

//       <div className="bg-white p-4 rounded shadow">
//         <h3 className="text-xl font-semibold mb-4">My Courses</h3>
//         <table className="w-full text-left">
//           <thead>
//             <tr><th>Title</th><th>Status</th><th>Action</th></tr>
//           </thead>
//           <tbody>
//             {courses.map((course, i) => (
//               <tr key={i}>
//                 <td className="p-2">{course.title}</td>
//                 <td className="p-2 capitalize">{course.status}</td>
//                 <td className="p-2"><button className="text-blue-600">Edit</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TeacherDashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

const TeacherDashboard = () => {
  const [teacher, setTeacher] = useState(null);
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('teacherToken');

  useEffect(() => {
    axios.get('http://localhost:5000/api/teacher/dashboard', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setTeacher(res.data.teacher);
      setCourses(res.data.courses);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Welcome, {teacher?.name}</h2>
        <div className="bg-white shadow p-4 rounded mb-4">
          <p><strong>Email:</strong> {teacher?.email}</p>
          <p><strong>Qualification:</strong> {teacher?.qualification}</p>
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">My Courses</h3>
          {courses.length > 0 ? (
            <ul>
              {courses.map(c => <li key={c._id}>{c.title}</li>)}
            </ul>
          ) : (
            <p>No courses yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeacherDashboard;
