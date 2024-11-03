// src/components/Header.jsx
import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
