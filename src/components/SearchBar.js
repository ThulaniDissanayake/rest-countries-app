const SearchBar = ({ setSearch }) => (
    <input
      type="text"
      placeholder="Search by name"
      className="p-2 border rounded w-full md:w-60"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
  export default SearchBar;