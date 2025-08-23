import React from 'react';

export default function StatCard({ title, value, sub, right }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
        {sub && <div className="text-xs mt-1 text-gray-500">{sub}</div>}
      </div>
      {right}
    </div>
  );
}
