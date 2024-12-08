// Code wars Kata8 Solutions

// Grasshopper - Summation

// Write a program that finds the summation of every number from 1 to num.
//  The number will always be a positive integer greater than 0.

// Decalre the Result Variable;
// Loop through the Given Number
// Add the Number
// Return the Result

function summation(num) {
  // Solution 1
  //   let result = 0;
  //   for (let i = 1; i <= num; i++) {
  //     result += i;
  //   }
  //   return result;

  // Solution 2
  //   return (num * (num + 1)) / 2;

  // Solution 3
  //   return num ? num + summation(num - 1) : num;

  // Solution 4
  //   return Array.from({ length: num }, (_, i) => i + 1).reduce((a, b) => a + b);
  // Solution 5
  return Array(num)
    .fill(true)
    .reduce((acc, current, i) => acc + i + 1, 0);
}

console.log(summation(8));
