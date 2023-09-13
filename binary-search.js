const binarySearch = (list, item) => {
    let start = 0;
    let end = list.length - 1;

    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        const element = list[mid];

        if(element === item) {
            return mid;
        } else if(element > item) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return null;
}

const arr = [10, 20, 30, 40, 50];

console.log(binarySearch(arr, 10));