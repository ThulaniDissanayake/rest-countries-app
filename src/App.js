import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import Login from './components/Login';
import Register from './components/Register';

const AppContent = () => {
  const { user, logout } = useAuth();

  return (
    <Router>
      {user ? (
        <>
          {/* Navbar shown when user is logged in, with user and logout props */}
          <Navbar user={user} logout={logout} />

          {/* Protected routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<CountryDetails />} />
          </Routes>
        </>
      ) : (
        <>
          {/* Public routes */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

const App = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
