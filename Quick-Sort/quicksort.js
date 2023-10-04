function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];

    const right = [];
    const left = [];

    for(let i = 0; i <= arr.length - 1; i++) {
        if (i === pivotIndex) {
            continue;
        }

        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]); 
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const unsortedArray = [6, 8, 3, 10, 15, 2, 9, 1];

console.log(quickSort(unsortedArray));