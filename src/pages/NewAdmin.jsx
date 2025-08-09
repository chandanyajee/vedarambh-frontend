    // src/App.jsx
    import React from 'react';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminTopbar from '../components/Admin/AdminTopbar';
import AdminDashboard from './AdminDashboard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

    function NewAdmin() {
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

    export default NewAdmin;