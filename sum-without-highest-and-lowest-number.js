// Code wars Kata8 Solutions

// Check if Empty Value return 0
// Find the highest Number
// Find the Lowest Number
// Filter the Array and remove the highest and lowest number
// Sum all numbers in the array

// Solution 1
function sumArray(array) {
    if (array == null) return 0;
    let maxValue = Math.max(...array);
    let minValue = Math.min(...array);
    // console.log(maxValue, minValue);
    let filteredArray = array.filter((x) => x !== maxValue && x !== minValue);
    console.log(filteredArray);
    let sum = filteredArray.reduce((acc, curr) => acc + curr, 0);  
    // reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
    // acc = accumulator
    // curr = current value
    // 0 = initial value
    console.log(sum); // 16 returns the sum of the array without the highest and lowest number
    // return sum;

    // Or we can use the below code
    console.log(array.filter((x) => x !== Math.max(...array) && x !== Math.min(...array)).reduce((acc, curr) => acc + curr, 0));
    // return array.filter((x) => x !== Math.max(...array) && x !== Math.min(...array)).reduce((acc, curr) => acc + curr, 0);
    
    // and for the correct answer use the below code
    // return array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr, 0);
    console.log(array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr, 0));
}
    sumArray([1, 1, 3, 4, 9, 10, 10]);

// Solution 2
// function sumArray(array) {
//   if (array == null) {
//     return 0;
//   } else if (array.length < 2) {
//     return 0;
//   } else {
//     array = array.sort(function (a, b) {
//       return a - b;
//     });
//     var total = 0;
//     for (var i = 1; i < array.length - 1; i++) {
//       total += array[i];
//     }
//     return total;
//   }
// }

// console.log(sumArray([1, 2, 3, 4, 5]));