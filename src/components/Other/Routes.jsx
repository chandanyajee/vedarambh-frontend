// App.js ya Routes.jsx me:
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../HomePage';
import InstitutionRegister from '../Institution/InstitutionRegister';
import InstitutionBatchManager from '../Institution/InstitutionBatchManager';
import InstitutionDashboard from '../Institution/InstitutionDashboard';
import InstitutionLogin from '../Institution/InstitutionLogin';

import StudentRegister from '../Student/StudentRegister';
import  StudentCourses from '../Student/StudentCourses';
import  StudentCourseDetails from '../Student/StudentCourseDetails';
import StudentProfile from '../Student/StudentProfile';
import StudentLogin from '../Student/StudentLogin';
import StudentRegisterForm from '../Student/StudentRegister.js';
//dashboard
import StudentDashboard from '../Student/StudentDashboard/StudentDashboard.jsx';
import ActivityFeed from '../Student/StudentDashboard/ActivityFeed.jsx';
import CalendarWidget from '../Student/StudentDashboard/CalendarWidget.jsx';
import ContinueLearning from '../Student/StudentDashboard/ContinueLearning.jsx';
import NewLessons from '../Student/StudentDashboard/NewLessons.jsx';
import ProgressOverview from '../Student/StudentDashboard/ProgressOverview.jsx';
import QuickStats from '../Student/StudentDashboard/QuickStats.jsx';
import Sidebar from '../Student/StudentDashboard/Sidebar.jsx';
import Topbar from '../Student/StudentDashboard/Topbar.jsx';

// techar desbord 
// import TeacherDasgboard from '../Teacher/TeacherDashboard';
import TeacherDashboard from '../../pages/teacher/TeacherDashboard.jsx';
import TeacherRegister from '../Teacher/TeacherRegister';
import TeacherLogin from '../Teacher/TeacherLogin';

import PaymentSuccess from '../Payment/PaymentSuccess';

import Navbar from "../Navbar";
import Footer from "../Footer";
import HomePage2 from '../HomePage2';

import NewAdmin from '../../pages/NewAdmin.jsx';
import AAdminDashboard from "../Admin/AdminDashboard";
import AdminVerifyUsers from '../Admin/AdminVerifyUsers';
import AdminManageCourses from '../Admin/AdminManageCourses';
import AdminChangePassword from '../Admin/AdminChangePassword';
import AdminExportCSV from '../Admin/AdminExportCSV';
import AdminPanele from '../../pages/AdminPanel.jsx';
import AdminTopbar from '../Admin/AdminTopbar';
import AdminDashboard from '../../pages/AdminDashboard';
import AddCourse from '../course/AddCourse';
import AdminLogin from '../Admin/AdminLogin'
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import AssignedCourses from '../Student/AssignedCourses';
// import downloadCertificate from '../Certificate/Certificate';
import ContactPage from './ContactPage';
import FaqPage from './FaqPage';
import AboutPage from './AboutPage';
// import Login_panal from './Login-Panal';
import LoginPanal from './Login-Panal.jsx'; // or correct path like '../components/Other/Login-Panal'

import ShortsPage from '../Shortsvideo/ShortsPage';
import VideoLibraryPage from '../VideoLibrary/VideoLibraryPage';
import LibraryPage from '../Library/LibraryPage';
import AllLibrary from './All Library';
import Panchang from './Panchang';
import IDCardGenerator from './IDCardGenerator';
import UploadContent from '../UploadForm';
import ViewContent from '../ViewContent';
// import Navbar from '../Navbar';
import Login from '../Login panal/Login';
import Register from '../Login panal/Register';
import Logout from '../Login panal/LogoutButton.jsx';

// import UploadContent from '../UploadForm';


import CourseDetails from '../course/CourseDetails';
import BrowseCourses from '../course/BrowseCourses';
// import downloadCertificate from '../Certificate/Certificate.jsx';

// import LoginForm from '../app/login/LoginForm.jsx';

//Qize Secshan 
import CreateQuiz from '../Quiz/CreateQuiz.jsx';
import Leaderboard from '../Quiz/Leaderboard.jsx';
import Quiz from '../Quiz/Quiz.jsx';
import StudentQuiz from '../Quiz/StudentQuiz.jsx';
import Button from '../ui/Button.jsx';

import ParentDashboard from '../../pages/ParentDashboard.jsx';

// New aading page 
import Clender from "../calendar/Calendar.jsx";
// import about from '../app/about/page.jsx';
// import admin from '../app/admin-panel/page.jsx';
// import Header from '../components/Header.tsx';
// import Button from '../components/ui/Button';
// import LoginForm from '../app/login/LoginForm.jsx';
// import ForgotPasswordForm from '../app/login/ForgotPasswordForm';
// import LoginF from '../app/login/LoginForm.jsx';


import VedArambhHome3 from '../HomePage/Homepage3.jsx';



export const router = <BrowserRouter>
  <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path='/Footer' element={<Footer />} />
      <Route path='/Navbar' element={<Navbar />} />
      <Route path="/homepage2" element={<HomePage2 />} />
      <Route path="/Login_panal" element={< LoginPanal/>} />

      <Route path="/Button" element={<Button />} />

      <Route path="/browse-courses" element={<BrowseCourses />} />
      <Route path="/CourseDetails" element={<CourseDetails />} />
      <Route path="/teacher/add-course" element={<AddCourse />} />

      <Route path="/Login" element={< Login/>} /> 
      <Route path="/Register" element={< Register/>} /> 
      <Route path="/Logout" element={< Logout/>} />

      <Route path="/UploadContent" element={< UploadContent/>} /> 
      <Route path="/ViewContent" element={< ViewContent/>} />  

      <Route path="/Panchang" element={< Panchang/>} />


        {/* Institute Secshan   */}

      <Route path="/InstitutionRegister" element={<InstitutionRegister />} />
      <Route path="/institution/dashboard" element={<InstitutionDashboard />} />
      <Route path="/institution/batches" element={<InstitutionBatchManager />} />
      <Route path="/Institution/login" element={<InstitutionLogin />} />

      {/* Admin secshan  */}

      <Route path="/NewAdmin" element={<NewAdmin />} />
      <Route path="/AdminDashboard" element={< AdminDashboard/>} />
      <Route path="/AdminPanele" element={< AdminPanele/>} />
      <Route path="/AdminTopbar" element={< AdminTopbar/>} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AAdminDashboard />} />
      <Route path="/admin/verify-users" element={<AdminVerifyUsers />} />
      <Route path="/admin/manage-courses" element={<AdminManageCourses />} />
      <Route path="/admin/change-password" element={<AdminChangePassword />} />
      <Route path="/admin/export-csv" element={<AdminExportCSV />} />
      

      {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route path="/download-Certificate" element={<downloadCertificate />} />
      {/* Clender Secsan Start  */}
      <Route path="/Clender" element={<Clender />} />

      {/* Clender End  */}
      {/* <Route path='/login_panal' alemant={<login_panal />} /> */}

        <Route path="/AllLibrary" element={<AllLibrary />} />
        <Route path="/LibraryPage" element={<LibraryPage />} />
        <Route path="/VideoLibraryPage" element={<VideoLibraryPage />} />
        <Route path="/ShortsPage" element={<ShortsPage />} />
        <Route path="/downloadCertificate" element={<downloadCertificate />} />

      {/* Quiz secshan  */}

      <Route path="/CreateQuiz" element={<CreateQuiz />} />
      <Route path="/Leaderboard" element={<Leaderboard />} />
      <Route path="/Quiz" element={<Quiz />} />
      <Route path="/StudentQuiz" element={<StudentQuiz />} />

      {/* Techar Secashan  */}
      <Route path="/teacher/register" element={<TeacherRegister />} />
      <Route path='/Teacher/Dashboard' element={<TeacherDashboard />} />
      <Route path='/teacher/login'  element={< TeacherLogin/>}/>

      <Route path='/ParentDashboard'  element={< ParentDashboard/>}/>

      {/* Student Secshan  */}

      <Route path="/StudentIDCard" element={< IDCardGenerator/>} />
      <Route path="/StudentRegisterForm" element={< StudentRegisterForm/>} />
      <Route path='/student' element={<StudentRegister/>}/>
      <Route path='/StudentCourses' element={<StudentCourses />} />
      <Route path='/Student/CourseDetails' element={<StudentCourseDetails />} />
      <Route path="/student/assigned-courses" element={<AssignedCourses />} />
      <Route path='/Student/Profile' element={<StudentProfile />} />
      <Route path='/Student/Dashboard' element={<StudentDashboard />} />
      <Route path='/StudentLogin' element={<StudentLogin />} />
      <Route path="/ActivityFeed" element={<ActivityFeed />} />
      <Route path="/CalendarWidget" element={<CalendarWidget />} />
      <Route path="/ContinueLearning" element={<ContinueLearning />} />
      <Route path="/NewLessons" element={<NewLessons />} />
      <Route path="/ProgressOverview" element={<ProgressOverview />} />
      <Route path="/QuickStats" element={<QuickStats />} />
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/Topbar" element={<Topbar />} />


      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faq" element={<FaqPage />} />



      
      {/* New Ading page  */}
        {/* <Route path="/LoginForm" element={<LoginForm />} /> */}
        {/* <Route path="/ForgotPasswordForm" element={<ForgotPasswordForm />} /> */}
       
       
       
        <Route path="/VedArambhHome3" element={<VedArambhHome3 />} />
      

    {/* Other routes */}
    <Route path="/payment-success" element={<PaymentSuccess />} />
    
  </Routes>
</BrowserRouter>
