import React, { useEffect, useState } from 'react';
import { getAllCountries } from './api';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import CountryCard from './components/CountryCard';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
      setFiltered(data);
    });
  }, []);

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

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        🌍 REST Countries Explorer
      </h1>

      {/* Search and Filter with vertical gap */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-6 mb-8">
        <SearchBar setSearch={setSearch} />
        <FilterDropdown setRegion={setRegion} />
      </div>

      {/* Horizontal Scrollable Country Cards with margin top */}
      <div className="mt-10 overflow-x-auto whitespace-nowrap px-2">
        {filtered.map((country) => (
          <div
            key={country.cca3}
            className="inline-block align-top w-64 mr-4"
          >
            <CountryCard country={country} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
