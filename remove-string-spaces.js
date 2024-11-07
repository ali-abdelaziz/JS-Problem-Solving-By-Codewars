// Code wars Kata8 Solutions

// Simple, remove the spaces from the string, then return the resultant string.

function removeStringSpaces(string) {
  // return string.replace(/\s/g, '');
  return string.split(" ").join("");
}

console.log(removeStringSpaces("h e l l o"));