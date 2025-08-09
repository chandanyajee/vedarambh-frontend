// import React from 'react';

// const ActivityFeed = () => (
//   <div className="bg-white p-4 shadow rounded h-full">
//     <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
//     <ul className="space-y-2 text-sm">
//       <li>✅ Enrolled in Bhagavad Gita Course</li>
//       <li>📥 Watched Ramayan Lesson 3</li>
//       <li>📤 Submitted assignment on 2nd July</li>
//     </ul>
//   </div>
// );

// export default ActivityFeed;

// ✅ ActivityFeed.jsx
import React from 'react';

const ActivityFeed = () => {
  const activities = [
    'User reaffirmed lesson on Gita',
    'Completed Ramayan Quiz',
    'Viewed Shivaji Story'
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        {activities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
