// src/components/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password,
      });

      setSuccess(res.data.msg || 'Registration successful!');
      setError('');
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
      setSuccess('');
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
            Create your account to explore the world
          </p>

          {error && (
            <div className="alert alert-danger text-center py-2">
              {error}
            </div>
          )}
          {success ? (
            <>
              <div className="alert alert-success text-center py-2">
                {success}
              </div>
              <div className="text-center mt-2">
                <Link
                  to="/login"
                  className="btn btn-warning fw-bold"
                  style={{ color: '#000' }}
                >
                  Go to Login
                </Link>
              </div>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Name"
                className="form-control mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  backgroundColor: '#333',
                  border: '1px solid #ff8c00',
                  color: '#fff',
                }}
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: '#333',
                  border: '1px solid #ff8c00',
                  color: '#fff',
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  backgroundColor: '#333',
                  border: '1px solid #ff8c00',
                  color: '#fff',
                }}
              />
              <button
                onClick={handleRegister}
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: '#ff8c00',
                  color: '#000',
                  border: 'none',
                }}
              >
                Register
              </button>
              <div className="mt-3 text-center">
                <Link to="/login" style={{ color: '#ff8c00', textDecoration: 'none' }}>
                  Already have an account? Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
