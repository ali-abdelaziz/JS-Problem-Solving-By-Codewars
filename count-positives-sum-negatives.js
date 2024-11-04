// Code wars Kata8 Solutions

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

/* Solution */

// Create Empty Array for the Positive Numbers
// Create a Variable for the Sum of Negatives
// Loop through the Given Array
// Check if the number is positive add it to the Array , if negative add to the Sum Variable

function countPositivesSumNegatives(input) {

    // Solution 1
    // if (input == null || input.length === 0) return [];
    // let positiveNumbers = 0;
    // let sumOfNegatives = 0;
    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] > 0) positiveNumbers += 1;
    //     if (input[i] < 0) sumOfNegatives += input[i];
    // }
    // return [positiveNumbers, sumOfNegatives];

    // Solution 2
    let positiveNumbers = input.filter((x) => x > 0).length;
    let sumOfNegatives = input.filter((x) => x < 0).reduce((acc, current) => acc + current, 0);
    return [positiveNumbers, sumOfNegatives];

    // Solution 3
    // let positiveNumbers = [];
    // let sumOfNegatives = 0;
    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] > 0) {
    //         positiveNumbers.push(input[i]);
    //     } else {
    //         sumOfNegatives += input[i];
    //     }
    // }
    // return [positiveNumbers.length, sumOfNegatives];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));