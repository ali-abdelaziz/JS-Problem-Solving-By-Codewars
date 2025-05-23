// Code wars Kata8 Solutions

// After a hard quarter in the office you decide to get some rest on a vacation.
//  So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation.
//  The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days,
//  you get $50 off your total. Alternatively, if you rent the car for 3 or more days,
//   you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

/* Solution */

// Define the Price
// Check if the Days less than 3 Return the Price
// Check if the days are more than 7 return the Price - 50
// Else Price - 20

function rentalCarCost(d) {
  const price = 40;
//   if (d < 3) {
//     return price * d;
//   } 
//   else if (d >= 7) {
//     return price * d - 50;
//   } else {
//     return price * d - 20;
//   }

return d >= 7 ? price * d - 50 : d >= 3 ? price * d - 20 : price * d;
}

console.log(rentalCarCost(7));