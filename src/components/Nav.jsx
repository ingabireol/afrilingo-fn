// src/components/Nav.jsx
import React from 'react';
import { Link } from 'react-scroll';

const Nav = ({ isOpen }) => {
  return (
    <nav>
      <ul className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent text-white`}
      >
        <li className="p-2 md:p-0">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Home</Link>
        </li>
        <li className="p-2 md:p-0">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">About Us</Link>
        </li>
        <li className="p-2 md:p-0">
          <Link to="features" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Features</Link>
        </li>
        <li className="p-2 md:p-0">
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
