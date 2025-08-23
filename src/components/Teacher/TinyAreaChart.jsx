import React from 'react';

export default function TinyAreaChart({ data = [4,6,3,8,7,9,10,7,8], height = 48 }) {
  const max = Math.max(...data, 1);
  const points = data.map((v, i) => `${(i/(data.length-1))*100},${100 - (v/max)*100}`).join(' ');
  return (
    <svg viewBox="0 0 100 100" className="w-28 h-12">
      <polyline fill="rgba(251, 146, 60, 0.2)" stroke="none" points={`0,100 ${points} 100,100`} />
      <polyline fill="none" stroke="rgb(234, 88, 12)" strokeWidth="2" points={points} />
    </svg>
  );
}
