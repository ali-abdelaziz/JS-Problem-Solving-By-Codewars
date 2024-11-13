// Code wars Kata8 Solutions

// It's the academic year's end, fateful moment of your school report.
//  The averages must be calculated. All the students come to you and entreat you to calculate their average for them.
//   Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


// 1- Declare Sum Variable to Sum all the Numbers
// 2- Declare Empty Variable for the average
// 3- Looping through the Array of number
// 4- Add each number to the sum variable
// 5- Divide The Sum / THe array length
// 6- Round the Number to the Nearest Integer
// 7- Return the Average

function getAverage(marks){

    // Solution 1
    // let sum = 0;
    // let average;
    // for(let i = 0; i < marks.length; i++){
    //   sum += marks[i];
    // }
    // average = Math.floor(sum / marks.length);
    // return average;

    // Solution 2
    return Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);
}

console.log(getAverage([2.3, 4.20, 6.89, 8.99, 10.7]));