// Code wars Kata8 Solutions

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

function evenOdd(value) {
  return value % 2 == 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(7));
console.log(evenOdd(8));
