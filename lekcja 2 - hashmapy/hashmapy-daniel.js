// Hashmap / słownik / obiekt / JSON - JavaScript Object Notation

// { }

// klucz - wartosc
// klucz - string
// wartosc - cokolwiek
// const X = {
//     a: 'test',
//     b: 123,
//     c: true,
//     d: {
//         e: 123,
//         f: [123],
//         g: [{
//             h: 1
//         }]
//     },
//     i: undefined,
//     j: null
// };
// // pobieranie elementow
// X.a
// X.d.e
// X.d.f[0]
// X.d.g[0].h
// // słownik to tablica?
// const Y = { 0: 7, 1: 5, 2: 6, 3: 2 }
// const Z = [7, 5, 6, 2]

// // wyciagnie danych ze slownika

// const firstNumberHashMap = Y[0];
// const firstNumberArray = Z[0];

// console.log({
//     firstNumberHashMap,
//     firstNumberArray
// });

// // praktyczny przyklad

// const Jarek = {
//     imie: "Jarek",
//     wiek: 25,
//     zamiszkanie: "Poznan"
// };

// const Daniel = {
//     imie: "Daniel",
//     wiek: 28,
//     zamieszkanie: "Krakow"
// }

// const obywatele = [Jarek, Daniel];  // mini baza danych

// for (let i = 0; i < obywatele.length; i++) {
//     const item = obywatele[i];
//     console.log('Imie:', item.imie)
// }


const obywatele1 = [
    {
        imie: "Anna",
        wiek: 25,
        adres: {
            miasto: "Krakow"
        }
    },
    {
        imie: "Beata",
        wiek: 43,
        adres: {
            miasto: "Poznan"
        }
    },
    {
        imie: "Cycylia",
        wiek: 89,
        adres: undefined
    },
]
// Zadanie domowe:
// Wypisz tych obywateli ktorzy maja mniej niz 50 lat
// Wypisz tych obywateli, ktorzy miekszaja w krakowie

// https://meet.google.com/euu-wcyb-yzf?gclsrc=ds&gclsrc=ds&age=26&name=Jarek
// console.log(Object.keys, Object.values, Object.entries)
// console.log(Object.values(obywatele1[0]))
const x = {
    a: 1,
    b: 'dupa',
    c: 17,
    d: 'qwe'
}
// ?a=1&b=2&c=17&d=qwe

console.log({ result: convertToQueryParams(x) });

// const obywatel = '';
// if(obywatel) {
//     if(obywatel.adres) {
//         if(obywatel.adres.miasto) {
//             console.log(obywatel.adres.miasto)
//         }
//     }
// }
// console.log(obywatel?.adres?.miasto) // 5