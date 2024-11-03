// src/components/Header.jsx
import React, { useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <Logo />
      <button
        onClick={toggleNav}
        className="md:hidden text-2xl "
      >
        ☰
      </button>
      <Nav isOpen={isNavOpen} />
    </header>
  );
};

export default Header;
