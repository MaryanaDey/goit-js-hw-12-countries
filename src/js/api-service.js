const BASE_URL = 'https://restcountries.com/v2';

function fethCountry(countryName) {
  const url = `${BASE_URL}/name/${countryName}`;
  return fetch(url).then(response => response.json());
}

export default { fethCountry };
