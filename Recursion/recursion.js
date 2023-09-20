const factorial = (num) => {
    if(num <= 1) {
        return 1;
    }

    return num * factorial(num - 1); // Call itself until the condition be true
}

console.log(factorial((5))); // return: 120