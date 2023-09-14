// Try to sort the array from smallest to largest

const numArray = [8, 3, 1, 7, 9];

// Fist find the smallest
const smallestElement = arr => {
    let element = arr[0];
    let elementIndex = 0

    for(let count = 0; count <= arr.length - 1; count++) {
        if(arr[count] < element) {
            element = arr[count];
            elementIndex = count;
        }
    }

    return elementIndex;
}

// console.log(smallestElement(numArray)); // return -> 2 (it is the index)

// Second sort and create a new array
const sortSelection = arr => {
    const sortedArray = [];
    
    while(arr.length > 0) {
        const smallestIndex = smallestElement(arr);
        sortedArray.push(arr[smallestIndex]);
        arr.splice(smallestIndex, 1);
    }

    return sortedArray;
}

console.log(sortSelection(numArray)) // return -> [ 1, 3, 7, 8, 9 ]