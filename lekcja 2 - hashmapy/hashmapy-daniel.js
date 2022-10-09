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

