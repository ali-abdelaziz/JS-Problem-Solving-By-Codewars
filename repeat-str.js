// Code wars Kata8 Solutions

// Create Empty String
// Take the Number Argument And Loop through it
// Add the String to the Empty one

function repeatStr(number, str) {

    // Solution 1
    // let newString = "";
    // for (let i = 0; i < number; i++) {
    //     newString += str;
    // }
    // return newString;

    // Solution 2
    return str.repeat(number);
}

console.log(repeatStr(3, " Hello "));