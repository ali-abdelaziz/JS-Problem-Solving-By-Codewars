// Code wars Kata8 Solutions

// Each number should be formatted that it is rounded to two decimal places.
// You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

function twoDecimalPlaces(n) {
    return Number(n.toFixed(2));
    // return +n.toFixed(2);
    // return Math.round(n * 100) / 100;
}

console.log(twoDecimalPlaces(4.659725356));