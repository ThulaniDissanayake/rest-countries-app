// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('userEmail') || null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      fetchFavorites();
    }
  }, [user]);

  const fetchFavorites = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/users/favorites', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFavorites(res.data.favorites);
    } catch (err) {
      console.error('Failed to fetch favorites', err);
    }
  };

  const toggleFavorite = async (countryCode) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:5000/api/users/toggle-favorite',
        { countryCode },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setFavorites(res.data.favorites);
    } catch (err) {
      console.error('Failed to toggle favorite', err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setUser(null);
    setFavorites([]);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, favorites, toggleFavorite, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
