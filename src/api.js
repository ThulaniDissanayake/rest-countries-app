export const getAllCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    return res.json();
  };

  export const getCountryByName = async (name) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    return res.json();
  };
  
  export const getCountriesByRegion = async (region) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    return res.json();
  };
  
  export const getCountryByCode = async (code) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    return res.json();
  };