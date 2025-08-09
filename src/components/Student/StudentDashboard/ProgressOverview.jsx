// import React from 'react';

// const ProgressOverview = () => (
//   <div className="bg-white p-4 shadow rounded grid grid-cols-1 sm:grid-cols-3 gap-4">
//     <div>
//       <p className="text-gray-600">Courses Enrolled</p>
//       <h2 className="text-xl font-bold">X</h2>
//     </div>
//     <div>
//       <p className="text-gray-600">Videos Watched</p>
//       <h2 className="text-xl font-bold">X</h2>
//     </div>
//     <div>
//       <p className="text-gray-600">Certificates Earned</p>
//       <h2 className="text-xl font-bold">X</h2>
//     </div>
//   </div>
// );

// export default ProgressOverview;

// ✅ ProgressOverview.jsx
import React from 'react';

const ProgressOverview = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700">Courses Enrolled</h3>
        <p className="text-2xl font-bold text-indigo-600">3</p>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700">Videos Watched</h3>
        <p className="text-2xl font-bold text-blue-600">12</p>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700">Certificates Earned</h3>
        <p className="text-2xl font-bold text-green-600">1</p>
      </div>
    </div>
  );
};

export default ProgressOverview;