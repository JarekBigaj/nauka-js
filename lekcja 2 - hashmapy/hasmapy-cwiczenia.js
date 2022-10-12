import fetch from "node-fetch";
const API_URL_ALL = "https://restcountries.com/v3.1/all";

fetch(API_URL_ALL)
    .then(res => {
    console.log(res);
})