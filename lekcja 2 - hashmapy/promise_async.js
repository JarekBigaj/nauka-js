
// Promise
// let a = 5;

// new Promise((resolve, reject) => {
//     // .... 1s 
//     // .... 5s
//     setTimeout(() => {
//         // resolve(5); // sukces
//         reject('error') // blad
//     }, 3000)
// })
//     .then((data) => {
//         console.log('s1', { data });
//     })
//     .catch((error) => {
//         console.error('Kurwa cos sie wyjebalo elo', { error });
//     })

// console.log({ a });


// Async-Await

// const X = async () => {
//     try {
//         let a = 5;
//         const [s1, s2] = await Promise.all([
//             new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve(5)
//                     // reject(5)
//                 }, 3000)
//             }),
//             new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve(5)
//                     // reject(5)
//                 }, 3000)
//             })
//         ])

//         console.log({ a, s1, s2 });
//         return 17;
//     } catch (error) {
//         console.error({ error });
//     }
// }

// console.log({ X: await X() });


