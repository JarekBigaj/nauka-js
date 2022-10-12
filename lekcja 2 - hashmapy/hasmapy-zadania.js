const persons = [
    {
        name: "Jarek",
        lastName: "Bigaj",
        age: 26,
        adress: {
            city: "Jaworzno",
            zipCode: "43-600",
            streetName: "Wygoda 26"
        },
        car: {
            brand: "VW",
            model: "Bora",
            color: "Srebrny",
            type: "Kombi",
            engine:{
                horsepower: 110,
                capacity: 1.9,
                fuel: "diesel"
            }
        }
    },
    {
        name: "Roman",
        lastName: "Kowalski",
        age: 46,
        adress: {
            city: "Konin",
            zipCode: "62-510",
            streetName: "Zwycięstwa 26"
        },
        car: {
            brand: "Toyota",
            model: "Corolla",
            color: "Biały",
            type: "Hatchback",
            engine:{
                horsepower: 80,
                capacity: 1.6,
                fuel: "benzyna"
            }
        }
    },
    {
        name: "Arek",
        lastName: "Nowakowski",
        age: 33,
        adress: {
            city: "Poznań",
            zipCode: "60-788"
        },
        car: {
            brand: "BMW",
            model: "E36",
            color: "Seledynowy",
            type: "Sedan",
            engine:{
                horsepower: 140
            }
        }
    },
    {
        name: "Paweł",
        lastName: "Kalinowski",
        age: 23,
        adress: {
            city: "Zakopane",
            zipCode: "34-500",
            streetName: "100-lecia 88"
        },
        car: {
        }
    },
    {
        name: "Marlena",
        lastName: "Stefaniak",
        age: 30,
        adress: {
            city: "Warszawa"
        },
        car: {
            brand: "Kia",
            model: "Sorento",
            color: "Czarny",
            type: "SUV",
            engine:{
                horsepower: 230,
                capacity: 4.2,
                fuel: "benzyna"
            }
        }
    },
    {
        name: "Agnieszka",
        lastName: "Markowsa",
        age: 19,
        adress: {
            city: "Katowice",
            zipCode: "40-000",
            streetName: "3-maja 26"
        },
        car: {
            brand: "Lexus",
            model: "IS 200",
            color: "Niebieski",
            type: "Sedan",
            engine:{
                horsepower: 240,
                capacity: 2.0,
                fuel: "benzyna"
            }
        }
    }
]

// console.log(Object.entries(persons));

//  persons.forEach(element => {
//  console.log("imie:",element.name,"adress:", element.adress?.zipCode, "paliwo:",element.car?.engine?.fuel);
//  });

// for(let i = 0; i<persons.length; i++){
//     const person = persons[i];
//     console.log(Object.keys(person));
// }
//  console.log(Object.entries(persons.map((person)=>{return person.name})));

// console.log(Object.entries(persons.map(({name,lastName}) => {return name + " " + lastName })));

// persons.forEach(person => {
    // console.log(Object.entries(person).map(([key,value]) => { return `${key}=${value}`}));
// });

console.log(Object.values(persons)
    .map((person)=>{
        return `${Object.keys(person)[0]}=${person.name}` 
    }).join(`&`));

console.log(Object.values(persons)
    .filter(person => person.age>30)
    .map((person) => {
        return `${Object.keys(person)[0]} : ${person.name}` 
    }));

console.log(Object.entries(persons)
    .map(([key,value])=>{
        return value;
    })
    .filter(person => person?.adress?.city==="Katowice")
    .map((person) => `${person.name} ${person.lastName}`));

console.log(Object.values(persons)
    .filter(person => person.car?.type === "Hatchback")
    .map((person) => `${Object.keys(person)[0]} : ${person.name} ${Object.keys(person)[4]} : ${person.car?.brand} ${person.car?.model}`));

