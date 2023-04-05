// const options = new URLSearchParams({
//     name.official },
//     capital,
//     population,
//     flags.svg },
//     languages
// });
const url = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name) {
    return fetch(`${url}${name}?fields={name.official},{capital},{population},{flags.svg},{languages}`).then(response => response.json()).then(users => {
        console.log("users inside then callback: ", users)
    });
}
    
fetchCountries(ukr);