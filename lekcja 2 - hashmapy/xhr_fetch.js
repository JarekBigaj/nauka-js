// XHR (XML HTTP Request) - raczej go nie uzywaj

// const xhr = new XMLHttpRequest();
// xhr.addEventListener('loadend', () => console.log('LOAD END'));
// xhr.onreadystatechange = () => {
//     if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         console.log({ x: xhr.responseText });
//     }
// };
// xhr.open("GET", "https://www.google.com", true);
// xhr.send();

// Fetch
const myResponse = await fetch('https://www.google.com', {
    mode: 'cors',
})
const parsedResponse = await myResponse.text()
console.log({ myResponse, parsedResponse });