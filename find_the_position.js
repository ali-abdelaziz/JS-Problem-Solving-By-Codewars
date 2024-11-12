// Code wars Kata8 Solutions

// When provided with a letter, return its position in the alphabet.

// 1- Create a String with the Alphapet
// 2- Loop through this String
// 3- Check if the Loopring CHaracter equal the Provided Letter
// 4- Return the Position

function position(letter){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   Solution 1
//   for(let i = 0; i < alphabet.length; i++){
//     if(alphabet[i] === letter){
//       return `Position of alphabet: ${i + 1}`;
//     }
//   }

//   Solution 2
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}

console.log(position("c"));