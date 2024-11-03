// Code wars Kata8 Solutions

// You get an array of numbers, return the sum of all of the positives ones.

// InitValue = 0
// Array Loop
// Check if the number is positive or not
// Add the number to the initValue if Positive

function positiveSum(arr) {
    // example for using filter()
    // return arr.filter((x) => x > 0);

    // example for using reduce()
    // return arr.reduce((acc, curr) => {
    //     if (curr > 0) {
    //         acc += curr;
    //     }
    //     return acc;
    // }, 0);

// *********************************************************************
    // Solution 1
    return arr.filter((x) => x > 0)
    .reduce((acc, curr) => acc + curr, 0);

    // Solution 2
    // let InitValue = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         InitValue += arr[i];
    //     }
    // }
    // return InitValue;
}

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1, -2, -3, -4, -5]));