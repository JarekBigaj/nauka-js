// Hashmap / słownik / obiekt / JSON - JavaScript Object Notation

// { }

// klucz - wartosc
// klucz - string
// wartosc - cokolwiek
const X = {
    a: 'test',
    b: 123,
    c: true,
    d: {
        e: 123,
        f: [123],
        g: [{
            h: 1
        }]
    },
    i: undefined,
    j: null
};
// pobieranie elementow
X.a
X.d.e
X.d.f[0]
X.d.g[0].h
// słownik to tablica?
const Y = { 0: 7, 1: 5, 2: 6, 3: 2 }
const Z = [7, 5, 6, 2]

// wyciagnie danych ze slownika

const firstNumberHashMap = Y[0];
const firstNumberArray = Z[0];

console.log({
    firstNumberHashMap,
    firstNumberArray
});

// praktyczny przyklad

const Jarek = {
    imie: "Jarek",
    wiek: 25,
    zamiszkanie: "Poznan"
};

const Daniel = {
    imie: "Daniel",
    wiek: 28,
    zamieszkanie: "Krakow"
}

const obywatele = [Jarek, Daniel];  // mini baza danych

for (let i = 0; i < obywatele.length; i++) {
    const item = obywatele[i];
    console.log('Imie:', item.imie)
}


const obywatele1 = [
    {
        Imie: "A",
        adres: {
            miasto: "Krakow"
        }
    },
    {
        Imie: "B",
        adres: {
            miasto: "Poznan"
        }
    },
    {
        Imie: "C",
        adres: undefined
    },
]
// const obywatel = '';
// if(obywatel) {
//     if(obywatel.adres) {
//         if(obywatel.adres.miasto) {
//             console.log(obywatel.adres.miasto)
//         }
//     }
// }
// console.log(obywatel?.adres?.miasto) // 5

const animals = [
    {
        name: "Zosia",
        type: "Kot"
    },
    {
        name: "Piniek",
        type: "Świnka morska"
    },
    {
        name: "Bonifacy",
        type: "pies"
    }
]

//for(let i = 0; i<animals.length; i++){
//    const animal = animals[i];
//    console.log(animal.type);
// }

console.log(animals[0].type,animals[1].type,animals[2].type);