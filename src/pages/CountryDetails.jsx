import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryByCode } from '../api';

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    getCountryByCode(code).then((data) => setCountry(data[0]));
  }, [code]);

  if (!country) return <p className="text-center text-muted p-4">Loading country details...</p>;

  return (
    <div className="container mt-5">
      <div className="row">
      
        <div className="position-absolute top-0 start-0 p-3">
          <Link to="/" className="text-decoration-none">
            <i className="bi bi-house-door-fill text-primary" style={{ fontSize: '2rem' }}></i>
          </Link>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="img-fluid rounded-top"
            />
            <div className="card-body">
              <h5 className="card-title text-center text-primary">{country.name.official}</h5>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card shadow-sm p-4">
             {/* Displaying various country details */}
            <h2 className="text-center text-primary mb-4">Country Details</h2>
            <p><strong className="text-secondary">Common Name:</strong> {country.name.common}</p>
            <p><strong className="text-secondary">Country Code (CCA3):</strong> {country.cca3}</p>
            <p><strong className="text-secondary">Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
            <p><strong className="text-secondary">Region:</strong> {country.region}</p>
            <p><strong className="text-secondary">Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong className="text-secondary">Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
            <p><strong className="text-secondary">Timezones:</strong> {country.timezones.join(', ')}</p>

             {/* Google Maps button to view the country's location */}
            <div className="text-center mt-4">
              <a
                href={`https://www.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-info"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
