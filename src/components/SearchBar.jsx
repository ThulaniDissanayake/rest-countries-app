const SearchBar = ({ setSearch, value }) => (
  <input
    type="text"
    className="form-control"
    placeholder="Search by name"
    value={value}
    onChange={(e) => setSearch(e.target.value)}
    style={{ maxWidth: '250px' }}
  />
);

export default SearchBar;
