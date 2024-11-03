// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white p-6 text-center">
      <p>&copy; 2024 Afrilingo. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="mt-4">
        {/* Social media icons can be added here */}
      </div>
    </footer>
  );
};

export default Footer;
