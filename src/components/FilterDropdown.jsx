//FilterDropdown

const FilterDropdown = ({ setRegion, value }) => (
  <select
    
    className="form-select"
    value={value}
    onChange={(e) => setRegion(e.target.value)}
    style={{ maxWidth: '300px' }}
  >
  
    <option value="">All Regions</option>

    {/* Region-specific options */}
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
);

export default FilterDropdown;
