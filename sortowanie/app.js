const randomArray = [];
for (let i = 0; i <= 33; i++)
    randomArray.push(Math.floor(Math.random() * 1000));

console.log({ randomArray });
console.log("----------------------------------------------------");

const bubbleSort = (randomArray) => {
    const sortedArray = randomArray;
    for (let i = 0; i <= sortedArray.length; i++) {
        for (let j = 0; j <= sortedArray.length; j++) {
            if (sortedArray[i] > sortedArray[j]) {
                const temporaryElement = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = temporaryElement;
            }
        }
    }
    return sortedArray;
}

const insertionSort = (randomArray) => {
    const sortedArray = randomArray;
    for (let i = 1; i < sortedArray.length; i++) {
        const temporaryElement = sortedArray[i];
        let j = i - 1;
        while (j >= 0 && sortedArray[j] > temporaryElement) {
            sortedArray[j + 1] = sortedArray[j];
            j--;
        }

        sortedArray[j + 1] = temporaryElement;
    }
    return sortedArray;
}

const selectionSort = (randomArray) => {
    const sortedArray = randomArray;
    for (let i = 0; i < sortedArray.length - 1; i++) {
        let minimumElementIndex = i;

        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j] < sortedArray[minimumElementIndex]) {
                minimumElementIndex = j;
            }
        }
        const temporaryElement = sortedArray[i];
        sortedArray[i] = sortedArray[minimumElementIndex];
        sortedArray[minimumElementIndex] = temporaryElement;
    }
    return sortedArray;
}

const merge = (left, right) => {
    const temporaryArray = [];
    while (left.length && right.length) {

        if (left[0] < right[0]) {
            temporaryArray.push(left.shift());
        } else {
            temporaryArray.push(right.shift());
        }
    }
    return [...temporaryArray, ...left, ...right];
}

const splitArray = (array) => {
    const half = array.length / 2;

    if (array.length <= 1) {
        return array;
    }

    const left = array.splice(0, half);
    const right = array;

    return merge(splitArray(left), splitArray(right));
}

const mergeSort = (arr) => {
    return splitArray(arr);
}

console.log({
    merge: mergeSort(randomArray)
});
//console.log(selectionSort(randomArray));
//console.log(insertionSort(randomArray));
//console.log("sortowanie bąbelkowe: "+bubbleSort(randomArray));
