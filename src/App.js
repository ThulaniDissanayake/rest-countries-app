import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import Login from './components/Login';

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <div className="p-4 text-right">Welcome, {user}</div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<CountryDetails />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
