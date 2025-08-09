import { useEffect, useState } from "react";

function PanchangComponent() {
  const [panchang, setPanchang] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/panchang/today')
      .then(res => res.json())
      .then(data => setPanchang(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="p-6 bg-yellow-50 rounded-xl shadow-md w-full max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-bold text-center mb-4">आज का पंचांग</h2>
      {panchang ? (
        <ul className="space-y-2 text-lg">
          <li>📅 <strong>तिथि:</strong> {panchang.tithi}</li>
          <li>📆 <strong>वार:</strong> {panchang.day}</li>
          <li>🔭 <strong>नक्षत्र:</strong> {panchang.nakshatra}</li>
          <li>🌅 <strong>सूर्योदय:</strong> {panchang.sunrise}</li>
          <li>🌇 <strong>सूर्यास्त:</strong> {panchang.sunset}</li>
        </ul>
      ) : (
        <p className="text-center text-gray-500">Loading Panchang...</p>
      )}
    </div>
  );
}

export default PanchangComponent;
