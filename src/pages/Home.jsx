// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../api';
import FilterDropdown from '../components/FilterDropdown';
import CountryCard from '../components/CountryCard';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [language, setLanguage] = useState('');
  const [languageOptions, setLanguageOptions] = useState([]);

  // Fetch countries on load
  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
      setFiltered(data);

      // Extract unique languages from all countries for the language filter dropdown
      const langsSet = new Set();
      data.forEach((country) => {
        if (country.languages) {
          Object.values(country.languages).forEach((lang) => langsSet.add(lang));
        }
      });
      setLanguageOptions([...langsSet].sort());
    });
  }, []);

  // Handle filtering based on search, region, and language
  useEffect(() => {
    let result = countries;

    if (search) {
      const lowerSearch = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.common.toLowerCase().includes(lowerSearch) ||
          c.cca3.toLowerCase().includes(lowerSearch)
      );
    }

    if (region) {
      result = result.filter((c) => c.region === region);
    }

    if (language) {
      result = result.filter(
        (c) =>
          c.languages && Object.values(c.languages).includes(language)
      );
    }

    setFiltered(result);
  }, [search, region, language, countries]);

  // Clear filters handler
  const clearFilters = () => {
    setSearch('');
    setRegion('');
    setLanguage('');
  };

  return (
    <div className="min-vh-100 py-5 container">
      {/* Filters Section */}
      <div className="row justify-content-center align-items-center mb-4 g-3">
        {/* Search input */}
        <div className="col-lg-3 col-md-4 col-sm-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by country name or code"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Region filter dropdown */}
        <div className="col-lg-3 col-md-4 col-sm-6">
          <FilterDropdown setRegion={setRegion} value={region} />
        </div>

        {/* Language filter dropdown */}
        <div className="col-lg-3 col-md-4 col-sm-6">
          <select
            className="form-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Filter by language</option>
            {languageOptions.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Clear filters button */}
        <div className="col-lg-2 col-md-3 col-sm-6 d-flex align-items-center">
          <button
            className="btn btn-warning text-white w-100"
            onClick={clearFilters}
            style={{ height: '38px' }}
          >
            Clear Filters
          </button>
        </div>
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
  );
};

export default Home;
