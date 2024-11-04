// Code wars Kata8 Solutions

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Turn the String into Array
// Loop through the Array
// Repeat Each Element Once
// Return the Array Into String again


function doubleChar(str) {
    // return str.split('').map(x => x + x).join(' ');
    return str.split('').map(x => x.repeat(2)).join(' ');
}

console.log(doubleChar('test'));