// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function LoginF({ language, onForgotPassword }) {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isGoogleLoading, setIsGoogleLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   const content = {
//     English: {
//       email: 'Email or Username',
//       emailPlaceholder: 'Enter your email or username',
//       password: 'Password',
//       passwordPlaceholder: 'Enter your password',
//       forgotPassword: 'Forgot Password?',
//       loginButton: 'Sign In',
//       googleLogin: 'Continue with Google',
//       orDivider: 'or'
//     },
//     हिंदी: {
//       email: 'ईमेल या उपयोगकर्ता नाम',
//       emailPlaceholder: 'अपना ईमेल या उपयोगकर्ता नाम दर्ज करें',
//       password: 'पासवर्ड',
//       passwordPlaceholder: 'अपना पासवर्ड दर्ज करें',
//       forgotPassword: 'पासवर्ड भूल गए?',
//       loginButton: 'साइन इन करें',
//       googleLogin: 'Google के साथ जारी रखें',
//       orDivider: 'या'
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrors({});

//     const newErrors = {};
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     if (!formData.password.trim()) newErrors.password = 'Password is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       setIsLoading(false);
//       return;
//     }

//     setTimeout(() => {
//       setIsLoading(false);
//       const mockRoles = ['student', 'teacher', 'admin', 'institution'];
//       const randomRole = mockRoles[Math.floor(Math.random() * mockRoles.length)];

//       switch (randomRole) {
//         case 'student':
//           navigate('/student-dashboard');
//           break;
//         case 'teacher':
//           navigate('/teacher-dashboard');
//           break;
//         case 'admin':
//           navigate('/admin-panel');
//           break;
//         case 'institution':
//           navigate('/institution-dashboard');
//           break;
//         default:
//           navigate('/');
//       }
//     }, 2000);
//   };

//   const handleGoogleLogin = async () => {
//     setIsGoogleLoading(true);

//     try {
//       await new Promise(resolve => setTimeout(resolve, 2000));

//       const mockGoogleUser = {
//         email: 'user@gmail.com',
//         name: 'Google User',
//         picture: 'https://via.placeholder.com/100'
//       };

//       const userRoles = ['student', 'teacher', 'admin'];
//       const assignedRole = userRoles[Math.floor(Math.random() * userRoles.length)];

//       localStorage.setItem('user', JSON.stringify({
//         ...mockGoogleUser,
//         role: assignedRole,
//         loginMethod: 'google'
//       }));

//       switch (assignedRole) {
//         case 'student':
//           navigate('/student-dashboard');
//           break;
//         case 'teacher':
//           navigate('/teacher-dashboard');
//           break;
//         case 'admin':
//           navigate('/admin-panel');
//           break;
//         default:
//           navigate('/');
//       }

//     } catch (error) {
//       console.error('Google login error:', error);
//       setErrors({ google: 'Failed to sign in with Google. Please try again.' });
//     } finally {
//       setIsGoogleLoading(false);
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors(prev => ({ ...prev, [field]: '' }));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {/* Email/Username Field */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           {content[language].email}
//         </label>
//         <input
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={(e) => handleInputChange('email', e.target.value)}
//           className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
//             errors.email ? 'border-red-500' : 'border-gray-300'
//           }`}
//           placeholder={content[language].emailPlaceholder}
//         />
//         {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//       </div>

//       {/* Password Field */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           {content[language].password}
//         </label>
//         <div className="relative">
//           <input
//             type={showPassword ? 'text' : 'password'}
//             name="password"
//             value={formData.password}
//             onChange={(e) => handleInputChange('password', e.target.value)}
//             className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-10 ${
//               errors.password ? 'border-red-500' : 'border-gray-300'
//             }`}
//             placeholder={content[language].passwordPlaceholder}
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
//           >
//             <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} w-5 h-5 flex items-center justify-center`}></i>
//           </button>
//         </div>
//         {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//       </div>

//       {/* Forgot Password */}
//       <div className="flex justify-end">
//         <button
//           type="button"
//           onClick={onForgotPassword}
//           className="text-sm text-orange-500 hover:text-orange-600 cursor-pointer"
//         >
//           {content[language].forgotPassword}
//         </button>
//       </div>

//       {/* Sign In Button */}
//       <button
//         type="submit"
//         disabled={isLoading}
//         className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white py-2 px-4 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
//       >
//         {isLoading ? (
//           <div className="flex items-center justify-center space-x-2">
//             <i className="ri-loader-4-line animate-spin w-4 h-4 flex items-center justify-center"></i>
//             <span>Signing in...</span>
//           </div>
//         ) : (
//           content[language].loginButton
//         )}
//       </button>

//       {/* Divider */}
//       <div className="relative my-6">
//         <div className="absolute inset-0 flex items-center">
//           <div className="w-full border-t border-gray-300"></div>
//         </div>
//         <div className="relative flex justify-center text-sm">
//           <span className="px-2 bg-white text-gray-500">{content[language].orDivider}</span>
//         </div>
//       </div>

//       {/* Google Login */}
//       <button
//         type="button"
//         onClick={handleGoogleLogin}
//         disabled={isGoogleLoading}
//         className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center space-x-2"
//       >
//         {isGoogleLoading ? (
//           <>
//             <i className="ri-loader-4-line animate-spin text-gray-500 w-5 h-5 flex items-center justify-center"></i>
//             <span>Connecting...</span>
//           </>
//         ) : (
//           <>
//             <i className="ri-google-fill text-red-500 w-5 h-5 flex items-center justify-center"></i>
//             <span>{content[language].googleLogin}</span>
//           </>
//         )}
//       </button>

//       {/* Google Error Display */}
//       {errors.google && (
//         <p className="text-red-500 text-sm text-center mt-2">{errors.google}</p>
//       )}
//     </form>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

export default function LoginF({ language = "English", onForgotPassword }) {
  // Texts for multiple languages
  const content = {
    English: {
      email: "Email",
      password: "Password",
      login: "Login",
      forgot: "Forgot Password?"
    },
    Hindi: {
      email: "ईमेल",
      password: "पासवर्ड",
      login: "लॉगिन",
      forgot: "पासवर्ड भूल गए?"
    }
  };

  // State for login form
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/teacher/login", formData);

      if (res.data.success) {
        setMessage("✅ Login successful!");
        localStorage.setItem("teacherToken", res.data.token);
        // Redirect to teacher dashboard
        window.location.href = "/teacher-dashboard";
      } else {
        setMessage("❌ " + res.data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("❌ Server error, please try again later.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>{content[language]?.login || "Login"}</h2>

      {message && (
        <div style={{ color: message.startsWith("✅") ? "green" : "red" }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>{content[language]?.email || "Email"}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>

        <div>
          <label>{content[language]?.password || "Password"}</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          {content[language]?.login || "Login"}
        </button>

        {onForgotPassword && (
          <p
            style={{
              marginTop: "10px",
              textAlign: "center",
              cursor: "pointer",
              color: "#007BFF"
            }}
            onClick={onForgotPassword}
          >
            {content[language]?.forgot || "Forgot Password?"}
          </p>
        )}
      </form>
    </div>
  );
}
