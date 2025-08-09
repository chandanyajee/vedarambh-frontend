// src/components/admin/UserTable.jsx
const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white border rounded">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2 px-4">{u.name}</td>
              <td className="py-2 px-4">{u.role}</td>
              <td className="py-2 px-4">{u.status}</td>
              <td className="py-2 px-4">
                <button className="text-sm text-blue-500">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
    