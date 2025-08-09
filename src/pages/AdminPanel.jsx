// // src/pages/AdminPanel.jsx
// import AdminSidebar from '../components/Admin/AdminSidebar';
// import AdminTopbar from '../components/Admin/AdminTopbar';
// import AdminDashboard from '../components/Admin/AdminDashboard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const AdminPanel = () => {
//   return (
//     <>
//     <Navbar />
//       <div className="min-h-screen bg-gray-50">
//         <AdminSidebar />
//         <AdminTopbar />
//         <AdminDashboard />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AdminPanel;

    // src/App.jsx
    import React from 'react';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminTopbar from '../components/Admin/AdminTopbar';
import AdminDashboard from './AdminDashboard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

    function AdminPanel() {
      return (
        <div>
          <h1>Hello World!</h1>

          {/* <Navbar /> */}
      <div className="min-h-screen bg-gray-50">
        <AdminSidebar />
        <AdminTopbar />
        <AdminDashboard />
      </div>
      {/* <Footer /> */}
        </div>
      );
    }

    export default AdminPanel;