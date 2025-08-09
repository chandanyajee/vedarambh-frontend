import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../Navbar";

const AdminDashboard = () => {
  const [data, setData] = useState({
    students: 0,
    teachers: 0,
    institutions: 0,
    courses: 0,
  });

  const [messages, setMessages] = useState([]);
  const [broadcast, setBroadcast] = useState({
    title: "",
    message: "",
    targetRole: "all",
  });

  const [pendingTeachers, setPendingTeachers] = useState([]);
  const [pendingStudents, setPendingStudents] = useState([]);
  const [pendingInstitutions, setPendingInstitutions] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const headers = { Authorization: `Bearer ${token}` };

    axios.get("/api/admin/overview", { headers }).then((res) => setData(res.data)).catch(console.error);

    axios.get("/api/admin/broadcasts", { headers }).then((res) => setMessages(res.data)).catch(console.error);

    axios.get("/api/admin/teachers/pending", { headers }).then((res) => setPendingTeachers(res.data)).catch(console.error);

    axios.get("/api/admin/students/pending", { headers }).then((res) => setPendingStudents(res.data)).catch(console.error);

    axios.get("/api/admin/institutions/pending", { headers }).then((res) => setPendingInstitutions(res.data)).catch(console.error);
  }, [token]);

  const handleBroadcast = (e) => {
    e.preventDefault();

    axios
      .post("/api/admin/broadcast", broadcast, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        alert("Broadcast sent!");
        setMessages((prev) => [res.data, ...prev]);
        setBroadcast({ title: "", message: "", targetRole: "all" });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send broadcast.");
      });
  };

  const handleVerify = (id, type) => {
    axios
      .put(
        `/api/admin/verify/${type}/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        alert(res.data.message);

        if (type === "teacher") setPendingTeachers((prev) => prev.filter((t) => t._id !== id));
        if (type === "student") setPendingStudents((prev) => prev.filter((s) => s._id !== id));
        if (type === "institution") setPendingInstitutions((prev) => prev.filter((i) => i._id !== id));
      })
      .catch((err) => {
        console.error(err);
        alert("Verification failed");
      });
  };

  

  const renderPendingTable = (data, type) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">
        Pending {type.charAt(0).toUpperCase() + type.slice(1)} Approvals
      </h3>
      {data.length === 0 ? (
        <p>No pending {type}s</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    onClick={() => handleVerify(item._id, type)}
                    className="bg-green-600 text-white px-2 py-1 rounded"
                  >
                    Verify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  const chartData = [
    { name: "Students", count: data.students },
    { name: "Teachers", count: data.teachers },
    { name: "Institutions", count: data.institutions },
    { name: "Courses", count: data.courses },
  ];

  return (

    <>
    <Navbar />
      <div className="ml-64 mt-20 p-6">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
    
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white shadow p-4 rounded text-center">
            <div className="text-3xl font-bold text-blue-700">{data.students}</div>
            <div className="text-gray-600">Students</div>
          </div>
          <div className="bg-white shadow p-4 rounded text-center">
            <div className="text-3xl font-bold text-green-700">{data.teachers}</div>
            <div className="text-gray-600">Teachers</div>
          </div>
          <div className="bg-white shadow p-4 rounded text-center">
            <div className="text-3xl font-bold text-orange-700">{data.institutions}</div>
            <div className="text-gray-600">Institutions</div>
          </div>
          <div className="bg-white shadow p-4 rounded text-center">
            <div className="text-3xl font-bold text-purple-700">{data.courses}</div>
            <div className="text-gray-600">Courses</div>
          </div>
        </div>

        {/* 📊 Chart */}
        <div className="bg-white shadow p-4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Users & Courses Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Broadcast */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Send Broadcast</h3>
          <form onSubmit={handleBroadcast} className="space-y-2">
            <input
              type="text"
              name="title"
              placeholder="Title"
              required
              value={broadcast.title}
              onChange={(e) => setBroadcast({ ...broadcast, title: e.target.value })}
              className="border p-2 w-full"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              value={broadcast.message}
              onChange={(e) => setBroadcast({ ...broadcast, message: e.target.value })}
              className="border p-2 w-full"
            />
            <select
              name="targetRole"
              value={broadcast.targetRole}
              onChange={(e) => setBroadcast({ ...broadcast, targetRole: e.target.value })}
              className="border p-2"
            >
              <option value="all">All</option>
              <option value="student">Students</option>
              <option value="teacher">Teachers</option>
              <option value="institution">Institutions</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </form>

          {/* Messages */}
          <div className="mt-4">
            <h4 className="font-semibold">Previous Broadcasts</h4>
            {messages.map((m, idx) => (
              <div
                key={idx}
                className="bg-yellow-100 p-2 border-l-4 border-yellow-500 my-2"
              >
                <strong>{m.title}</strong> — {m.targetRole}
                <p>{m.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Approvals */}
        {renderPendingTable(pendingTeachers, "teacher")}
        {renderPendingTable(pendingStudents, "student")}
        {renderPendingTable(pendingInstitutions, "institution")}
      </div>

      <Footer />
    </>
  );
};

export default AdminDashboard;
