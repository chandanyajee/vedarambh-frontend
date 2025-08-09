// import React from 'react';

// const QuickStats = () => (
//   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//     {['Courses Enrolled', 'Assignments Due', 'Certificates Earned'].map((stat, i) => (
//       <div key={i} className="bg-white p-4 shadow rounded">
//         <h4 className="text-gray-700 font-semibold">{stat}</h4>
//         <p className="text-2xl text-orange-700">X</p>
//       </div>
//     ))}
//   </div>
// );

// export default QuickStats;

import React from 'react';

const QuickStats = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700">Courses Enrolled</h3>
        <p className="text-2xl font-bold text-indigo-600">3</p>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700">Assignments Due</h3>
        <p className="text-2xl font-bold text-red-600">2</p>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700">Certificates Earned</h3>
        <p className="text-2xl font-bold text-green-600">1</p>
      </div>
    </div>
  );
};

export default QuickStats;