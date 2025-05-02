import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      const { token } = res.data;

      // Save token in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userEmail', email);
      setUser(email);

      // Optionally redirect or show success message
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="border p-4 rounded bg-white shadow" style={{ width: '300px' }}>
        <h3 className="mb-3 text-center">Login</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="btn btn-primary w-100">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
