// import React from 'react';

// const NewLessons = () => (
//   <div className="bg-white p-4 shadow rounded">
//     <h3 className="text-lg font-semibold mb-3">New Lessons</h3>
//     <div className="flex gap-4">
//       {[1, 2, 3].map(i => (
//         <div key={i} className="w-24 h-24 bg-gray-200 rounded text-center flex items-center justify-center">
//           New {i}
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default NewLessons;

// ✅ NewLessons.jsx
import React from 'react';

const NewLessons = () => {
  const lessons = [
    { title: 'New Lesson 1' },
    { title: 'New Lesson 2' },
    { title: 'New Lesson 3' }
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-4">New Lessons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {lessons.map((lesson, i) => (
          <div
            key={i}
            className="border p-4 rounded-lg hover:shadow cursor-pointer"
            onClick={() => alert(`Opening: ${lesson.title}`)}
          >
            <p className="text-gray-800 font-medium">{lesson.title}</p>
            <p className="text-sm text-gray-500">Click to view</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewLessons;