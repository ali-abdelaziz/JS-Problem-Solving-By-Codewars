// Code wars Kata8 Solutions

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Change the number to String
// Split the String to an array
// Change the Strings in the array to Numbers
// Reverse the Array


function digitize(n) {
    // Solution 1
    // return n.toString().split('').map(Number).reverse();

    // Solution 2
    return String(n).split('').map(Number).reverse();
  }

  console.log(digitize(1234566789));;