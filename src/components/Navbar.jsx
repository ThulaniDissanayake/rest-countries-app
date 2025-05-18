// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ user, logout }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('bg-dark', !isDarkMode);
    document.body.classList.toggle('text-light', !isDarkMode);
    document.body.classList.toggle('bg-light', isDarkMode);
    document.body.classList.toggle('text-dark', isDarkMode);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: isDarkMode ? '#1c1c1c' : '#f8f9fa',
        borderBottom: '2px solid #ff8c00',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <div className="container-fluid px-4">
        {/* Left: Brand */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: '#ff8c00', fontSize: '1.5rem' }}
        >
          🌍 CountryWise
          <p
            className="mb-0"
            style={{ color: isDarkMode ? '#ccc' : '#666', fontSize: '0.9rem' }}
          >
            Smart insights and exploration of world countries
          </p>
        </Link>

        {/* Right: User Info + Dark Mode */}
        <div className="d-flex align-items-center ms-auto gap-3">
          {user && (
            <>
              <span className="fw-semibold">{`Welcome, ${user}`}</span>
              <button className="btn btn-sm btn-danger" onClick={logout}>
                Logout
              </button>
            </>
          )}

          {/* Dark Mode Toggle - Floated to Right */}
          <button
            className={`btn btn-sm ${isDarkMode ? 'btn-warning' : 'btn-secondary'}`}
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              padding: 0,
              marginLeft: 'auto',
            }}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
