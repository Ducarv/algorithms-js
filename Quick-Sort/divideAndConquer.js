/** First solution **/
const sum = (arr, index = 0) => {
    return index === arr.length ? 0 : arr[index] + sum(arr, index + 1);
}

const nums = [1, 2, 3, 4, 5];
const empty = [];

// console.log(sum(nums)); // 15
// console.log(sum(empty)); // 0

/** Second solution **/
const sumDivideAndConquer = (arr) => {
    if(arr.length === 1) return arr[0];

    const arrHalf = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, arrHalf);
    const secondHalf = arr.slice(arrHalf);
    const firstSum = sumDivideAndConquer(firstHalf);
    const secondSum = sumDivideAndConquer(secondHalf);
    
    return firstSum + secondSum;
}

// console.log(sumDivideAndConquer(nums)); // 15