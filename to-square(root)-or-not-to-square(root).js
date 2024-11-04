// Code wars Kata8 Solutions

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

/* Solution */

// Loop through the Array
// Check if the number has an integer Square root or not
// If true Take the root , if False Square the number
// Return the New Array

function toSquareRootOrNotToSquareRoot(array) {

    // Solution 1
    // let newArray = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (Math.sqrt(array[i]) % 1 === 0) {
    //         newArray.push(Math.sqrt(array[i]));
    //     } else {
    //         newArray.push(array[i] * array[i]);
    //     }
    // }
    // return newArray;

    // Solution 2
    // return array.map((n) => Math.sqrt(n) % 1 === 0 ? Math.sqrt(n) : n * n);

    // Solution 3
    return array.map((number) => Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number);
}

console.log(toSquareRootOrNotToSquareRoot([4, 3, 9, 7, 2, 1]));