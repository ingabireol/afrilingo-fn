// src/components/Nav.jsx
import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
        <li><a href="/features" className="hover:text-gray-300">Features</a></li>
        <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
