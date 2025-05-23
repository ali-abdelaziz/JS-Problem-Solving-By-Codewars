// Code wars Kata8 Solutions

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives,
//  and the negatives become positives.

/* Solution */

// Create Empty new Array
// Loop through the Array
// Inverse the Number
// Return the New Array


function invert(array) {

    // Solution 1
    // let newArray = [];
    // for (let i =0; i < array.length; i++) {
    //     newArray.push(array[i] * -1);
    // }
    // return newArray;

    // Solution 2
    return array.map(x => -x);
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));