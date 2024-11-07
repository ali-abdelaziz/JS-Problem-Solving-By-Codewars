// Code wars Kata8 Solutions

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

/* Solution */

// Create Variable = 0
// Loop through the array
// Divide the Varible to the Array length

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    } 
    else {
    //     let total = 0;
    //     for (let i = 0; i < array.length; i++) {
    //         total += array[i];
    //     }
    //     return total / array.length;
    return array.reduce((acc, current) => acc + current, 0) / array.length
    }
}

console.log(findAverage([1, 2, 3, 4, 5]));