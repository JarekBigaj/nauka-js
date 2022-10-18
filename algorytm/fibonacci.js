function fibonacciAlgorithmRec(n) {
    if(n<=1){
        return n;
    }
    return fibonacciAlgorithmRec(n - 2) +fibonacciAlgorithmRec(n - 1);
}



function fibonacciAlgorithmIte(n){
    let first = 0;
    let second =1;
    let result;
    for(let i=0; i<=n;i++){
        if(i>1){
            result = first+second;
            first = second;
            second = result;
        } else {
            result = i;
        }
    }
    return result;
}

console.log(fibonacciAlgorithmRec(20));
console.log(fibonacciAlgorithmIte(80));