// Code wars Kata8 Solutions

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    // return s.replace(/!/g, '');
    // return s.replaceAll("!", "");
    // return s.split("!").join("");
    return s.split("").filter(e => e !== "!").join("");
  }

  console.log(removeExclamationMarks("He!ll!o !! W!orld!"));