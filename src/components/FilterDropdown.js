const FilterDropdown = ({ setRegion }) => (
    <select
      className="p-2 border rounded w-full md:w-60"
      onChange={(e) => setRegion(e.target.value)}
    >
      <option value="">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
  export default FilterDropdown;