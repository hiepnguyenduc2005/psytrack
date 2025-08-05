import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      

      {/* Navigation Links */}
      <nav className="space-x-4">
        <a href="#home" className="hover:text-indigo-600">Home</a>
        <a href="#tasks" className="hover:text-indigo-600">Tasks</a>
        <a href="#research" className="hover:text-indigo-600">Research</a>
        <a
          href="#signin"
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700"
        >
          Sign In
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
