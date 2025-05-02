import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => (
  <Link to={`/country/${country.cca3}`} className="text-decoration-none text-dark">
    <div className="card h-100 shadow-sm border-0 hover-shadow">
      <img 
        src={country.flags.png} 
        alt={country.name.common} 
        className="card-img-top" 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{country.name.common}</h5>
        <p className="card-text mb-1"><strong>Capital:</strong> {country.capital?.[0]}</p>
        <p className="card-text mb-1"><strong>Region:</strong> {country.region}</p>
        <p className="card-text"><strong>Population:</strong> {country.population.toLocaleString()}</p>
      </div>
    </div>
  </Link>
);

export default CountryCard;
