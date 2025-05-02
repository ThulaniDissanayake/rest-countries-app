import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../api';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  // Fetch countries on load
  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
      setFiltered(data);
    });
  }, []);

  // Handle filtering
  useEffect(() => {
    let result = countries;

    if (search) {
      result = result.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (region) {
      result = result.filter((c) => c.region === region);
    }

    setFiltered(result);
  }, [search, region, countries]);

  // Clear filters
  const clearFilters = () => {
    setSearch('');
    setRegion('');
  };

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <h1 className="text-center fw-bold text-warning mb-5 display-5">
          🌍 REST Countries Explorer
        </h1>

        {/* Filters Section */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-4">
          <SearchBar setSearch={setSearch} value={search} />
          <FilterDropdown setRegion={setRegion} value={region} />
          <button className="btn btn-warning text-white" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>

        {/* Country Cards Grid */}
        <div className="row g-4">
          {filtered.length > 0 ? (
            filtered.map((country) => (
              <div key={country.cca3} className="col-sm-6 col-md-4 col-lg-3">
                <CountryCard country={country} />
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No countries match your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
