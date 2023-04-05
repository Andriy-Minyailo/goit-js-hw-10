import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const url = 'https://restcountries.com/v3.1/name/';
const filter ='fields=name,capital,population,flags,languages'

function fetchCountries(name) {
    return fetch(`${url}${name}?${filter}`).then(response => response.json()).then(users => {
        console.log("users inside then callback: ", users)
    });
}
    
fetchCountries('ukr');