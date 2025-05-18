// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Login = () => {
  const { setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      const { token } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userEmail', email);
      setUser(email);
      navigate('/');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: '85vh',
          background: 'linear-gradient(to right, #000, #1c1c1c)',
        }}
      >
        <div
          className="p-4 rounded shadow-lg"
          style={{
            backgroundColor: '#1c1c1c',
            width: '350px',
            color: '#fff',
            border: '1px solid #ff8c00',
          }}
        >
          <h3 className="mb-2 text-center" style={{ color: '#ff8c00' }}>
            🌍 CountryWise
          </h3>
          <p className="mb-4 text-center" style={{ color: '#ccc', fontSize: '0.9rem' }}>
            Smart insights and exploration of world countries
          </p>

          {error && (
            <div className="alert alert-danger text-center py-2">
              {error}
            </div>
          )}

          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                backgroundColor: '#333',
                border: '1px solid #ff8c00',
                color: '#fff',
              }}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                backgroundColor: '#333',
                border: '1px solid #ff8c00',
                color: '#fff',
              }}
            />
          </div>

          <button
            onClick={handleLogin}
            className="btn w-100 fw-bold"
            style={{
              backgroundColor: '#ff8c00',
              color: '#000',
              border: 'none',
            }}
          >
            Login
          </button>

          <div className="mt-3 text-center">
            <Link to="/register" style={{ color: '#ff8c00', textDecoration: 'none' }}>
              Don't have an account? Register
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
