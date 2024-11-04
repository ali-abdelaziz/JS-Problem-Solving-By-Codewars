// Code wars Kata8 Solutions

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// Loop Through the Array
// Check if the element === needle
// Return The Message

function findNeedle(haystack) {
    // Solution 1
    // for (let i = 0; i < haystack.length; i++) {
    //     if (haystack[i] === "needle") {
    //         return `found the needle at position ${i}`;
    //     }
    // }

    // Solution 2
    return `found the needle at position ${haystack.indexOf("needle")}`;
}

console.log(findNeedle([1, 'hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false, 'end']));