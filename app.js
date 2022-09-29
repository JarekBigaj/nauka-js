

const calculator = (a,b,mathOperation) => {
    const result = mathOperation(a,b);
    console.log(result);
}

const add = (a,b) => a+b;
const sub = (a,b) => a-b;

calculator(20,10,add);
calculator(10,5,sub);
debugger
//sortowanie
let arr1 = [];
for(let i = 0 ; i<100; i++){
    arr1.push(Math.floor(Math.random()*1000));
}

for(let i =0; i<=arr1.length;i++){
    for(let j = 0; j<arr1.length;j++){
        if(arr1[i]<arr1[j]){
            const change = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = change;
        }
    }
}

arr1.forEach(element => {
    console.log(element);
});

