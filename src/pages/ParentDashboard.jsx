import React, { useEffect, useState } from 'react';
//import { FaUser, FaCheckCircle, FaDownload, FaCalendarCheck, FaRupeeSign } from 'react-icons/fa';

export default function ParentDashboard() {
  const [parent, setParent] = useState(null);

  useEffect(() => {
    // Mock data simulating WOWdev portal
    setParent({
      name: "श्रीमती सुनीता शर्मा",
      childName: "अर्जुन शर्मा",
      class: "8A",
      avgScore: 87,
      attendance: 95,
      feesPaid: true,
      streak: 15,
      points: 2450,
      subjects: [
        { name: "Sanskrit Grammar", progress: 85 },
        { name: "Bhagavad Gita", progress: 62 },
        { name: "Yoga & Meditation", progress: 90 },
      ],
      recentActivities: [
        { type: "Quiz", desc: "Completed Quiz: Gita Chapter 1", detail: "Score: 18/20 (90%)", time: "2 hours ago", points: 50 },
        { type: "Assignment", desc: "Submitted Assignment: Sanskrit Essays", detail: "Submitted on time", time: "Yesterday, 4:30 PM", points: 30 },
        { type: "Live Class", desc: "Attended Live Class: Sanskrit Grammar", detail: "Active participation", time: "2 days ago, 10:00–11:00 AM", points: 0 },
      ],
      badges: [
        { title: "Sanskrit Scholar", earned: "Completed 50+ Sanskrit lessons with 85%+ average", time: "3 days ago" }
      ],
      messages: [
        { sender: "आचार्य प्रिया शर्मा", role: "Sanskrit & Gita Teacher", time: "1 hour ago", message: "अर्जुन जी का Sanskrit में बहुत अच्छा progress है। Keep encouraging him!" },
        { sender: "आचार्य विकास जी", role: "Yoga Instructor", time: "2 days ago", message: "अर्जुन के yoga sessions में excellent participation है। Please ensure he practices at home too." },
        { sender: "Principal माधुरी जी", role: "Principal", time: "1 week ago", message: "Parent-Teacher meeting scheduled for next Friday at 3:00 PM. Please confirm attendance." },
      ],
      events: [
        { title: "Parent-Teacher Meeting", time: "Friday, 3:00 PM", action: "Confirm" },
        { title: "Sanskrit Competition", time: "Next Week Tuesday", action: "View" },
        { title: "Diwali Celebration", time: "Nov 12", action: "View" },
      ],
      feeStatus: [
        { month: "Nov 2024", amount: 3500, paid: true },
        { month: "Dec 2024", amount: 3500, paid: false },
      ],
      attendanceThisMonth: {
        "Sanskrit Classes": "19/20",
        "Gita Classes": "18/20",
        "Yoga Sessions": "15/15"
      }
    });
  }, []);

  if (!parent) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h2 className="text-xl font-semibold">नमस्ते, {parent.name}!</h2>
          <p>Parent of {parent.childName} (Class {parent.class})</p>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold">{parent.avgScore}%</div>
          <div>Child's Average</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold">{parent.attendance}%</div>
          <div>Attendance</div>
          <div className="mt-2">
            {parent.feesPaid ? <span className="text-green-600">✅ Fees Paid</span> : <span className="text-red-600">Pending Fees</span>}
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3">
        {["Message Teacher", "View Progress", "Download Reports", "Schedule Meeting", "Pay Fees"].map(btn => (
          <button key={btn} className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">{btn}</button>
        ))}
      </div>

      {/* Child Progress */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">{parent.childName} की Progress</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="text-sm">Study Streak</div>
            <div className="font-bold">{parent.streak} days</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm">Points Earned</div>
            <div className="font-bold">{parent.points}</div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {parent.subjects.map(sub => (
            <div key={sub.name}>
              <div className="flex justify-between text-sm">{sub.name}<span>{sub.progress}%</span></div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-orange-600 rounded-full" style={{ width: `${sub.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities & Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md space-y-2">
          <h4 className="font-semibold">Recent Activities</h4>
          {parent.recentActivities.map((act, i) => (
            <div key={i} className="border-b pb-2">
              <div className="text-sm">{act.desc} • {act.detail}</div>
              <div className="text-xs text-gray-500">{act.time} {act.points ? `• +${act.points} pts` : ''}</div>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-2">
          <h4 className="font-semibold">Earned Badges</h4>
          {parent.badges.map((b, i) => (
            <div key={i} className="border-b pb-2">
              <div className="text-sm">{b.title}</div>
              <div className="text-xs text-gray-500">{b.earned} • {b.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher Messages */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-2">
        <h4 className="font-semibold">Teacher Messages</h4>
        {parent.messages.map((msg, i) => (
          <div key={i} className="border-b pb-2">
            <div className="flex justify-between">
              <div className="font-medium">{msg.sender} ({msg.role})</div>
              <div className="text-xs text-gray-500">{msg.time}</div>
            </div>
            <div className="text-sm">{msg.message}</div>
            <div className="flex gap-2 mt-1">
              <button className="text-blue-600 text-sm hover:underline">Reply</button>
              <button className="text-gray-600 text-sm hover:underline">Mark Read</button>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-2">
        <h4 className="font-semibold">Upcoming Events</h4>
        {parent.events.map((ev, i) => (
          <div key={i} className="flex justify-between items-center py-2">
            <div>
              <div className="text-sm">{ev.title}</div>
              <div className="text-xs text-gray-500">{ev.time}</div>
            </div>
            <button className="text-green-600 text-sm hover:underline">{ev.action}</button>
          </div>
        ))}
      </div>

      {/* Fee Status & Attendance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md space-y-2">
          <h4 className="font-semibold">Fee Status</h4>
          {parent.feeStatus.map((f, i) => (
            <div key={i} className="flex justify-between">
              <div>{f.month}</div>
              <div>{f.paid ? 'Paid' : `Due ₹${f.amount}`}</div>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-2">
          <h4 className="font-semibold">This Month's Attendance</h4>
          {Object.entries(parent.attendanceThisMonth).map(([k, v], i) => (
            <div key={i} className="flex justify-between">
              <div className="text-sm">{k}</div>
              <div className="text-sm">{v}</div>
            </div>
          ))}
          <div className="text-green-600 text-sm pt-2">Excellent Attendance!</div>
        </div>
      </div>
    </div>
  );
}
