import fetch from "node-fetch";
const API_URL_ALL = "https://restcountries.com/v3.1/all";

// fetch(API_URL_ALL)
//     .then((res) => res.json())
//     .then((countries)=>{
//         console.log(Object.values(countries)
//         .filter(country => country?.name?.official[0] === 'N')
//         .map((country) => {
//             return country?.name?.official
//         }));
//     });

fetch(API_URL_ALL)
    .then((res) => res.json())
    .then((countries)=>{
        console.log(Object.values(countries)
        .filter(country => country?.capital !== undefined &&  country?.name?.common[0] === 'P')
        .map((country) => {
            return `${country?.name?.common} capital is ${country?.capital}`
        }));
    });
