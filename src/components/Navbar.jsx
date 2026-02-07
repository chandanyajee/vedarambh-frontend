import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./ui/Button";

const Navbar = () => {
  const [language, setLanguage] = useState("English");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === "English" ? "हिंदी" : "English");
  };

  const navLinks = [
    { path: "/browse-courses", label: language === "English" ? "Courses" : "पाठ्यक्रम" },
    { path: "/ViewContent", label: language === "English" ? "Videos" : "वीडियो" },
    { path: "/CalendarWidget", label: language === "English" ? "Calendar" : "कैलेंडर" },
    { path: "/UploadContent", label: language === "English" ? "Upload" : "अपलोड" },
    { path: "/about", label: language === "English" ? "About" : "परिचय" },
    { path: "/contact", label: language === "English" ? "Contact" : "संपर्क" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow-sm border-b fixed w-full z-50 top-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-['Pacifico'] text-2xl text-orange-500">
                VedArambh
              </span>
              <span className="text-sm text-gray-500 hidden sm:block">
                {language === "English" ? "A Sanatan Initiative" : "एक सनातन पहल"}
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    location.pathname === link.path
                      ? "text-orange-500 font-semibold"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="px-2 py-1 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors cursor-pointer whitespace-nowrap flex items-center space-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6l4 2m6 8H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2z"
                  />
                </svg>
                <span className="hidden sm:inline">{language}</span>
              </button>

              {/* Login - hide on mobile */}
              <Link to="/login" className="hidden sm:block">
                <Button variant="outline" size="sm">
                  {language === "English" ? "Login" : "लॉगिन"}
                </Button>
              </Link>

              {/* Join VedArambh - smaller on mobile */}
              <Link to="/register">
                <Button
                  variant="outline"
                  size="sm"
                  className="px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm"
                >
                  {language === "English" ? "Join" : "जुड़ें"}
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden w-8 h-8 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <div className="absolute top-0 right-0 w-40 h-full bg-white shadow-lg p-6 flex flex-col">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    location.pathname === link.path
                      ? "text-orange-500 font-semibold"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;
