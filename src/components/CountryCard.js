const CountryCard = ({ country }) => (
    <div className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-1">{country.name.common}</h2>
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      </div>
    </div>
  );
  export default CountryCard;