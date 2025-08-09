import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🗑️ Remove token
    localStorage.removeItem("token");
    localStorage.removeItem('name');

    // ✅ Optional: clear any user state
    // setUser(null);

    // 🔁 Redirect to login page
    navigate("/login");


    
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
