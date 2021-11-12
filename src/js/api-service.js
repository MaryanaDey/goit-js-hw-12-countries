export default { fethCountry };

const BASE_URL = 'https://restcountries.com/v2';

//function fethCountry(countryName) {
 // const url = `${BASE_URL}/name/${countryName}`;
 // return fetch(url).then(response => response.json());
//}
function fethCountry(countryName){
  return fetch(`${BASE_URL}/name/${countryName}`)
  .then(r=>r.json())
}