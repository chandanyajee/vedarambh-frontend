import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import ForgotPasswordForm from './ForgotPasswordForm';

export default function LoginPage() {
  const [language, setLanguage] = useState('English');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'English' ? 'हिंदी' : 'English');
  };

  const content = {
    English: {
      title: 'Welcome Back',
      subtitle: 'Sign in to continue your spiritual learning journey',
      switchText: "Don't have an account?",
      switchLink: 'Create Account'
    },
    हिंदी: {
      title: 'वापस स्वागत है',
      subtitle: 'अपनी आध्यात्मिक शिक्षा यात्रा जारी रखने के लिए साइन इन करें',
      switchText: 'खाता नहीं है?',
      switchLink: 'खाता बनाएं'
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=peaceful%20indian%20temple%20courtyard%20with%20students%20studying%20ancient%20scriptures%20under%20banyan%20tree%2C%20warm%20golden%20sunlight%20filtering%20through%20leaves%2C%20serene%20spiritual%20learning%20environment%2C%20traditional%20architecture%2C%20saffron%20and%20orange%20tones%2C%20meditation%20and%20knowledge%20seeking%20atmosphere&width=1920&height=1080&seq=login-bg&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-md">
        {/* Language Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={toggleLanguage}
            className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap border border-white/20"
          >
            <i className="ri-translate-2 w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
            {language}
          </button>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="font-['Pacifico'] text-3xl text-orange-500">
              logo
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {content[language].title}
            </h1>
            <p className="text-gray-600 text-sm">
              {content[language].subtitle}
            </p>
          </div>

          {/* Form */}
          {showForgotPassword ? (
            <ForgotPasswordForm
              language={language}
              onBack={() => setShowForgotPassword(false)}
            />
          ) : (
            <LoginForm
              language={language}
              onForgotPassword={() => setShowForgotPassword(true)}
            />
          )}

          {/* Switch to Signup */}
          {!showForgotPassword && (
            <div className="mt-6 text-center">
              <span className="text-gray-600 text-sm">
                {content[language].switchText}{' '}
              </span>
              <Link
                to="/signup"
                className="text-orange-500 hover:text-orange-600 font-medium text-sm"
              >
                {content[language].switchLink}
              </Link>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center text-white/80 text-sm space-x-4">
          <Link to="/about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <span>•</span>
          <Link to="/help" className="hover:text-white transition-colors">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
}
