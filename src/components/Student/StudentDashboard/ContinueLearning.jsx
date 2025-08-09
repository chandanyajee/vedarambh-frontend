// import React from 'react';

// const ContinueLearning = () => (
//   <div className="bg-white p-4 shadow rounded">
//     <h3 className="text-lg font-semibold mb-3">Continue Learning</h3>
//     {[1, 2].map(i => (
//       <div key={i} className="flex justify-between items-center border-b py-2">
//         <span>Course Title {i}</span>
//         <button className="bg-orange-600 text-white px-3 py-1 rounded">Continue</button>
//       </div>
//     ))}
//   </div>
// );

// export default ContinueLearning;

// ✅ ContinueLearning.jsx
import React from 'react';

const ContinueLearning = () => {
  const handleClick = (title) => {
    alert(`Continue course: ${title}`);
  };

  const courses = [
    { title: "Ramayan for Kids" },
    { title: "Bhagavad Gita Basics" }
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
      {courses.map((course, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-3 border-b pb-2"
        >
          <span className="text-gray-700">{course.title}</span>
          <button
            className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
            onClick={() => handleClick(course.title)}
          >
            Continue
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContinueLearning;