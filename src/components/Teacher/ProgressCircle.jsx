import React from 'react';

export default function ProgressCircle({ percent = 72, size = 64 }) {
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle cx={size/2} cy={size/2} r={r} stroke="#e5e7eb" strokeWidth={stroke} fill="none" />
      <circle cx={size/2} cy={size/2} r={r} stroke="#ea580c" strokeWidth={stroke} fill="none"
              strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
            className="rotate-[90deg] fill-gray-700 font-semibold text-xs">{percent}%</text>
    </svg>
  );
}

// import React from "react";

// const ProgressCircle = ({ value = 0 }) => {
//   return (
//     <div style={{
//       width: "60px",
//       height: "60px",
//       borderRadius: "50%",
//       border: "5px solid #ddd",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "14px",
//       fontWeight: "bold"
//     }}>
//       {value}%
//     </div>
//   );
// };

// export default ProgressCircle;
