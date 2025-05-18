// src/components/CountryCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CountryCard = ({ country }) => {
  const { user, favorites, toggleFavorite } = useAuth();
  const isFavorite = favorites.includes(country.cca3); // Use cca3 for unique id

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // prevent Link navigation
    toggleFavorite(country.cca3);
  };

  return (
    <Link to={`/country/${country.cca3}`} className="text-decoration-none text-dark">
      <div className="card h-100 shadow-sm border-0 hover-shadow">
        <img 
          src={country.flags.png} 
          alt={country.name.common} 
          className="card-img-top" 
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between align-items-center">
            {country.name.common}
            {user && (
              <button
                className={`btn btn-sm ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={handleFavoriteClick}
                title={isFavorite ? 'Unfavorite' : 'Add to Favorites'}
              >
                ♥
              </button>
            )}
          </h5>
          <p className="card-text mb-1"><strong>Capital:</strong> {country.capital?.[0]}</p>
          <p className="card-text mb-1"><strong>Region:</strong> {country.region}</p>
          <p className="card-text"><strong>Population:</strong> {country.population.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
