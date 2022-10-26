const X = [
    { name: 'd', age: 35 },
    { name: 'a', age: 25 },
    { name: 'b', age: 30 },
    { name: 'c', age: 35 },
];
if (!X.length) return;
X.sort()
const [{ name }] = X;

