// Swap the digits in two - digit integer
// Given two - digit positive integer.Print the number after swapping its digits.
//     const { Ask } = require('asfk');

// Ask(["", ""]).then(([a, b]) => {
//     let cem = b + a
//     console.log(cem);


// });
// Input example 1:
// 83
// Output example 1:
// 38





// All digits are even
// Four - digit number is given.Check whether all its digits are even.
//     const { Ask } = require('asfk');

// Ask(["", "", "", ""]).then(([a, b, c, d]) => {
//     if ((a % 2 == 0) && (b % 2 == 0) && (c % 2 == 0) && (d % 2 == 0)) {
//         console.log('Yes');
//     } else {
//         console.log('no');
//     }

// });
// Input example 1:
// 3456
// Output example 1:
// NO
// Input example 2:
// 6082
// Output example 2:
// YES






// Two digits in a row
// Four - digit number is given.Determine is there two consecutive digits 3 and 7.
// const { Ask } = require('asfk');

// Ask(["", "", "", ""]).then(([a, b, c, d]) => {

//     if ((a == 3 && b == 7) || (b == 3 && c == 7) || (c == 3 && d == 7)) {
//         console.log('Yes');
//     } else {
//         console.log('no');
//     }

// });
// Input example 1:
// 1378
// Output example 1:
// YES
// Input example 2:
// 3478
// Output example 2:
// NO




// At least one odd
// Four - digit number is given.Check whether it contains at least one odd digit.
//     const { Ask } = require('asfk');

// Ask(["", "", "", ""]).then(([a, b, c, d]) => {

//     if ((a % 2 == 1) || (b % 2 == 1) || (c % 2 == 1) || (d % 2 == 1)) {
//         console.log('Yes');
//     } else {
//         console.log('no');
//     }

// });
// Input example 1:
// 2345
// Output example 1:
// YES
// Input example 2:
// 8824
// Output example 2:
// NO





// Two identical digits
// Four - digit number is given.Determine whether it contains exactly two different digits, each 
// of these digits must occur twice.
//  For example, the numbers 2727 and 6677 satisfy this condition.
//     const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     let r = parseInt(a / 1000)
//     let b = parseInt(a / 100 % 10)
//     let c = parseInt(a / 10 % 10)
//     let d = parseInt(a % 10)
//     if ((r == c && b == d) || (r == b && c == d)) {
//         console.log("yes");
//     } else {
//         console.log("no");
//     }

// });
// Input example 1:
// 2323
// Output example 1:
// YES
// Input example 2:
// 2224
// Output example 2:
// NO





// Cake
// After the second round of programming contests Olympiad participants decided to celebrate
// this event.For this purpose a large rectangular cake was ordered.
//   The participants gathered at the round table.Naturally, they have a question: 
//   is it possible to put a rectangular cake on the round table so that no piece of 
//   cake will extend beyond the table.You need to answer this
//  question knowing the size of the cake and the radius of the table.
//     const { Ask } = require('asfk');

// Ask(["", "", ""]).then(([r, w, l]) => {

//     if (((2 * r) ** 2) >= (w ** 2 + l ** 2)) {
//         console.log('Yes');
//     } else {
//         console.log('no');
//     }

// });
// Input example 1:
// 38 40 60
// Output example 1:
// YES
// Input example 2:
// 35 20 70
// Output example 2:
// NO
// Input example 3:
// 50 60 80
// Output example 3:
// YES