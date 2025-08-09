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
    { path: "/courses", label: "Courses" },
    { path: "/ViewContent", label: "Videos" },
    { path: "/calendar", label: "Calendar" },
    { path: "/upload", label: "Upload" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <header className="bg-white shadow-sm border-b fixed w-full z-50 top-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-['Pacifico'] text-2xl text-orange-500">
                VedArambh
              </span>
              <span className="text-sm text-gray-500 hidden sm:block">
                A Sanatan Initiative
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
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors cursor-pointer whitespace-nowrap flex items-center space-x-1"
              >
                <i className="ri-translate-2 w-4 h-4 flex items-center justify-center"></i>
                <span>{language}</span>
              </button>

              {/* Login / Signup */}
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>

              <Link to="/signup">
                <Button size="sm">Join VedArambh</Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className=" text-blue-600 bg-red md:hidden w-6 h-6 flex items-center justify-center"
              >
                <i className="ri-menu-line  text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Side Menu */}
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end mb-6"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>

            {/* Menu Links */}
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

      {/* Page content below navbar */}
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;
