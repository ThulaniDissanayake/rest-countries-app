import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-center py-3"
      style={{ backgroundColor: '#1c1c1c', borderTop: '2px solid #ff8c00', color: '#aaa' }}
    >
      © {new Date().getFullYear()} REST Countries App | Built with 🌐 & ❤️
    </footer>
  );
};

export default Footer;
