import fetch from "node-fetch";

const URL = "https://pastebin.com/raw/MHPFkHMv";
const URL2 = "https://pastebin.com/raw/bSpQfMGt";

const firstConnect = fetch(URL).then(response => response.json());
const secondConnect = fetch(URL2).then(response => response.json());


// 1) powie mi ile jest aktywnych transakcji?
const numberOfActiveTransaction = (entryData) =>{
  const numberActiveTransaction = entryData.transactions.filter(transaction => transaction.isActive).length;
  return {numberActiveTransaction};
};

// 2) Zsumuje mi koszt wszystkich transakcji?
const sumAllTransactionsBalance = (entryData) => {
  const sumTransactionsBalance = entryData.transactions.reduce((acc, current) => acc + current.balance,0);
  return Number(sumTransactionsBalance.toFixed(2));
}

// 3) Zsumuje mi koszt tylko aktywnych transakcji?
const sumAllActiveTransactionsBalance = (entryData) => {
  const activeTransactions = entryData.transactions.filter(transaction => transaction.isActive);
  const sumActiveTransactionsBalance = activeTransactions.reduce((acc,current) => acc + current.balance,0);
  return sumActiveTransactionsBalance;
}

// 4) Zwróci mi id transakcji które były przeprowadzone przed 2000 rokiem
const idOfTransactionsCarriedOutBefore2000 = (entryData) =>{
  const transactions = entryData.transactions;
  const dateTranasctions = transactions.filter(transaction => new Date(transaction.date).getFullYear()<2000);
  const idTransactions = dateTranasctions.map(transaction => transaction.id);
  return idTransactions;
}

// 5) Zwróci mi name dla transakcji które są aktywne oraz balans jest > 2000
const nameActiveTransactionsWithBalanceOver2000 = (entryData) =>{
  const transactions = entryData.transactions;
  const activeTransactionsWithBalanceOver2000 = transactions.filter(transaction => transaction.isActive && transaction.balance >2000);
  const nameTransactions = activeTransactionsWithBalanceOver2000.map(transaction => transaction.name);
  return nameTransactions;
}
firstConnect.then((entryData) =>{
  // console.log(numberOfActiveTransaction(entryData));
  // console.log(sumAllTransactionsBalance(entryData));
  // console.log(sumAllActiveTransactionsBalance(entryData));
  // console.log(idOfTransactionsCarriedOutBefore2000(entryData));
  // console.log(nameActiveTransactionsWithBalanceOver2000(entryData));
});

// 1) Zlicz mi ile jest unikalnych wystąpień danego wpisu? 
// Np { "Jonasz Rynna": 5, "Adam Mostowiak": 27 } itd
const numberOfAllUniqueEntry = (persons) => {
  const countsUnique = {};
  persons.forEach(person => {
    const {name} = person;
    countsUnique[name] = (countsUnique[name] || 0) + 1;
  });
  return countsUnique;
}

// 2) Zlicz mi ile osób ma unikalne imie np { "Jonasz": 270, "Adam": 25 } itd
const numberOfAllUniquePersonsFirstName = (persons) => {
  const countsUnique = {};
  persons.forEach(person => {
    const {name} = person;
    const [firstName] = name.split(" ");
    countsUnique[firstName] = (countsUnique[firstName] || 0)+1;
  });
  return countsUnique;
}
secondConnect.then((persons) => {
  // console.log(numberOfAllUniqueEntry(persons));
  console.log(numberOfAllUniquePersonsFirstName(persons));
});


