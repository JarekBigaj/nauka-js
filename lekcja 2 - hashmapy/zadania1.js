import fetch from "node-fetch";

const URL = "https://pastebin.com/raw/MHPFkHMv";
const URL2 = "https://pastebin.com/raw/bSpQfMGt";

// fetch(URL)
//   .then(response => response.json())
//   .then(json => console.log(json));

const firstConnect = fetch(URL).then(response => response.json());
const secondConnect = fetch(URL2).then(response => response.json());


// 1) powie mi ile jest aktywnych transakcji?
// firstConnect.then((transactions) => {
//     console.log(Object.values(transactions)
//     .map((transaction) => {
//       let counter = 0;
//       transaction.forEach(element => {
//         if(element.isActive)
//           counter++;
//       });
//       return counter;
//     }))
// });

// 2) Zsumuje mi koszt wszystkich transakcji?
// firstConnect.then((transactions) => {
//     console.log(Object.values(transactions)
//     .map((transaction) => {
//       let costOfAll = 0;
//       transaction.map((elementOfTransaction) =>{
//         return costOfAll+= elementOfTransaction.balance
//       })
//       return Number(costOfAll.toFixed(2))
//     }))
//   });

// 3) Zsumuje mi koszt tylko aktywnych transakcji?
// firstConnect.hen((transactions) => {
//     console.log(Object.values(transactions)
//     .map((transaction) => {
//       let costOfAll = 0;
//       transaction.filter(elementOfTransaction => elementOfTransaction.isActive)
//       .map((elementOfTransaction) =>{
//         return costOfAll+= elementOfTransaction.balance
//       })
//       return Number(costOfAll.toFixed(2))
//     }))
//   });

// 4) Zwróci mi id transakcji które były przeprowadzone przed 2000 rokiem
// firstConnect.then((transactions) => {
//     console.log(Object.values(transactions)
//     .map((transaction) => {
//       return transaction.filter(elementOfTransaction => elementOfTransaction.date.substring(11,15)<2000)
//       .map((elementOfTransaction) =>{
//         return elementOfTransaction.id;
//       })
//     }))
//   });

// 5) Zwróci mi name dla transakcji które są aktywne oraz balans jest > 2000
// firstConnect.then((transactions) => {
//     console.log(Object.values(transactions)
//     .map((transaction) => {
//       return transaction
//       .filter(elementOfTransaction => elementOfTransaction.isActive && elementOfTransaction.balance>2000)
//       .map((elementOfTransaction) =>{
//         return elementOfTransaction.name;
//       })
//     }))
//   });

// 1) Zlicz mi ile jest unikalnych wystąpień danego wpisu? 
// Np { "Jonasz Rynna": 5, "Adam Mostowiak": 27 } itd

// secondConnect.then((persons) => {
//   const counts = {};
//     persons.forEach(person => {
//       counts[person.name] = (counts[person.name] || 0) + 1;});
//   console.log(counts);
// });

// 2) Zlicz mi ile osób ma unikalne imie np { "Jonasz": 270, "Adam": 25 } itd

secondConnect.then((persons) => {
  const counts = {};
    persons.forEach(person => {
      const partsName = person.name.split(" ");
      counts[partsName[0]] = (counts[partsName[0]] || 0) + 1;});
  console.log(counts);
});