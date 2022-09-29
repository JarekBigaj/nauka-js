const mathExpression = "a+b+c";

const rpnMathExpression = (mathExpression) =>{
    const result =[];
    const mathOperators = ["*","/","-","+"];
    const stackOfExpression = [];
    let item;
    for (const value of mathExpression) {
        if(isNaN(value) && mathOperators.indexOf(value)=== -1){
            result.push(value);
        } else if(value === "("){
            stackOfExpression.push(value);
        } else if (mathOperators.includes(value)) {
            if(stackOfExpression !== 0 && mathOperators.includes(item = stackOfExpression.pop())){
                if(mathOperators.indexOf(value)>=mathOperators.indexOf(item)){
                    result.push(item);
                    stackOfExpression.push(value);
                } else {

                    stackOfExpression.push(value);

                }
            }
            else {
                stackOfExpression.push(value);
                console.log(stackOfExpression);

            }
        } else if(value === ")") {
            while(item = stackOfExpression.pop() !== ")")
            {
                result.push(item);
            }
            stackOfExpression.pop();
        }
    }
    
    while(stackOfExpression.length !== 0)
    {
        result.push(stackOfExpression.pop());
    }
    return result;
}

console.log(mathExpression);
console.log(rpnMathExpression(mathExpression));