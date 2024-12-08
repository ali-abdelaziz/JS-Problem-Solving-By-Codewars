// Code wars Kata8 Solutions

// Write a function that checks if a given string (case insensitive) is a palindrome.

// Convert the String to Lower Case
// Convert the String into Array
// Reverse the array
// Convert Into String
// Check The Given String To The One i created

function isPalindrome(x) {
  // Solution 1
  // let lowerCase = x.toLowerCase();
  // let arr = lowerCase.split('');
  // let reverseArr = arr.reverse();
  // let reverseString = reverseArr.join('');
  // return lowerCase === reverseString;

  // Solution 2
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrome("Madam"));
