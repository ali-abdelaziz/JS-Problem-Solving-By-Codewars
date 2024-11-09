// Code wars Kata8 Solutions

// Remove an exclamation mark from the end of a string. For a beginner kata,
//  you can assume that the input data is always a string, no need to verify it.

function removeExclamationMarks(s) {
    // removing all exclamation marks from the string
    // return s.replace(/!/g, "");

    // removing the last exclamation mark from the string
    return s.replace(/!$/, "");
}

console.log(removeExclamationMarks("He!llo! and w!orld!"));