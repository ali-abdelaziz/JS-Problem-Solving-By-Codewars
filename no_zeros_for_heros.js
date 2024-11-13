// Code wars Kata8 Solutions

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.


// 1- Convert the Number into String
// 2- Check if the LastIndex === 0
// 3- Remove the 0

function noBoringZeros(n) {

    // Solution 1
    // let str = n.toString();
    // while (str.lastIndexOf('0') === str.length - 1) {
    //     str = str.slice(0, str.length - 1);
    // }
    // return Number(str);
    
    // Solution 2
    // let str = n.toString();
    // while (str.endsWith('0')) {
    //     str = str.slice(0, -1);
    // }
    // return Number(str);
    
    // Solution 3
    return Number(n.toString().replace(/0+$/, ''));
}

console.log(noBoringZeros(1450000));