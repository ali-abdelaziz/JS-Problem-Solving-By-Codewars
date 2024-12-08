// Code wars Kata8 Solutions

// Complete the solution so that it reverses the string passed into it.

// Declare empty String
// Loop through the string Given as Parameter
// Add The Last Characters to the Empty String
// Return the String

function reverseString(str) {
  // Solution 1
  // let reversedString = '';
  // for(let i = str.length - 1; i >= 0; i--){
  //     reversedString += str[i];
  // }
  // return reversedString;

  // Solution 2
  return str.split("").reverse().join("");
}

console.log(reverseString("hello world"));
