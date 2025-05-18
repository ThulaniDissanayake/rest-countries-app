const SearchBar = ({ setSearch, setSearchCode, search, searchCode }) => (
  <div className="d-flex flex-column flex-md-row gap-3 mb-3">
    {/* Search by Country Name */}
    <input
      type="text"
      className="form-control"
      placeholder="Search by country name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ maxWidth: '250px' }}
    />

    {/* Search by Country Code */}
    <input
      type="text"
      className="form-control"
      placeholder="Search by country code (eg.US)"
      value={searchCode}
      onChange={(e) => setSearchCode(e.target.value.toUpperCase())}  
      style={{ maxWidth: '250px' }}
    />
  </div>
);

export default SearchBar;
