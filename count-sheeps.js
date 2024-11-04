// Code wars Kata8 Solutions

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Initial value of zero
// Loop through the array
// Check if the sheep === True , increase the Intial Value + 1

function countSheeps(arrayOfSheep) {

    // Solution 1
    // let count = 0;
    // for (let i = 0; i < arrayOfSheep.length; i++) {
    //     if (arrayOfSheep[i] === true) {
    //         count++;
    //     }
    // }
    // return count;

    // Solution 2
    let count = 0;
    arrayOfSheep.map((m) => {
        if (m === true) {
            count++;
        }
    });
    return count;
}

console.log(countSheeps([true, true, true, false, true, true, false, false, true]));