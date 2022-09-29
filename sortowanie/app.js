const randomArray =[];
for(let i =0; i<=10; i++)
    randomArray.push(Math.floor(Math.random()*1000));

console.log(randomArray);


const bubbleSort = (randomArray) =>{
    const sortedArray = randomArray;
    for(let i =0; i<= sortedArray.length; i++){
        for(let j=0; j<=sortedArray.length;j++){
            if(sortedArray[i]>sortedArray[j]){
                const temporaryElement = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = temporaryElement;
            }
        }
    }
    return sortedArray;
}

const insertionSort = (randomArray) =>{
    const sortedArray = randomArray;
    for(let i =1; i< sortedArray.length;i++){
        const temporaryElement = sortedArray[i];
        let j = i-1;
        while(j>=0 && sortedArray[j]>temporaryElement){
            sortedArray[j+1] = sortedArray[j];
            j--;
        }

        sortedArray[j+1] = temporaryElement;
    }
    return sortedArray;
}

const selectionSort = (randomArray) =>{
    const sortedArray = randomArray;
    for(let i=0; i<sortedArray.length-1;i++){
        let minimumElementIndex = i;

        for(let j = i+1; j<sortedArray.length;j++){
            if(sortedArray[j] < sortedArray[minimumElementIndex]){
                minimumElementIndex = j;
            }
        }
        const temporaryElement = sortedArray[i];
        sortedArray[i] = sortedArray[minimumElementIndex];
        sortedArray[minimumElementIndex] = temporaryElement;
    }
    return sortedArray;
}

const mergeSort = (randomArray) =>{
    const sortedArray = randomArray;

    return sortedArray;
}

console.log(selectionSort(randomArray));
//console.log(insertionSort(randomArray));
//console.log("sortowanie bąbelkowe: "+bubbleSort(randomArray));
