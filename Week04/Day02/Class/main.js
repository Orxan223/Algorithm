// Beşrəqəmli natural ədəd verilmişdir. 
// Onun tərkibində heç olmazsa iki eyni rəqəmin olmasını təyin edin.


//     const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     let count = 0
//     let n1 = n
//     while (n1 > 0) {
//         x = n1 % 10
//         n1 = parseInt(n1 / 10)
//         while (n > 0) {
//             y = n % 10
//             n = parseInt(n / 10)
//             if (x == y) {
//                 count++
//             }
//         }
//     }
//     if (count < 2) {
//         console.log("NO");
//     }
//     else
//         console.log("YES");


// });
// Input example 1
// 12345
// Output example 1
// NO
// Input example 2
// 63456
// Output example 2
// YES






// The factorial means to multiply all whole numbers from the chosen number down to 1.


// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     var total = 1;
//     for (var i = a; i > 0; i--) {
//         total *= i;
//     }
//     console.log(total);
// }
// );

// 1 * 1=1
// 1 * 2=2
// 2 * 3=6
// 6 * 4=24
// 24 * 5=120


// Input example 1
// 5
// Output example 1
// 120





// Reverse a given integer number

// let newN = 0;
// let mertebe = 4;
// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => {
//     while (n > 0) {
//         let sonReqem = n % 10;
//         sonReqem *= Math.pow(10, mertebe)
//         newN += sonReqem;
//         mertebe--;
//         n = parseInt(n / 10);
//     }
//     console.log(newN);
// });

// Input example 1
// 76542
// Output example 1
// 24567



// Write a program to rint the cube of all numbers from 1 to a given number


// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => {
//     let sum = 0;
//     for (let x = 1; x <= n; x++)
//         sum = x * x * x;
//     console.log(sum);
// });
// Input example 1
// 6
// Output example 1
// Current Number is : 1  and the cube is 1
// Current Number is : 2  and the cube is 8
// Current Number is : 3  and the cube is 27
// Current Number is : 4  and the cube is 64
// Current Number is : 5  and the cube is 125
// Current Number is : 6  and the cube is 216







// Write a program to calculate the sum of series up to n term.


// const { Ask } = require('asfk');
// Ask([""]).then(([a]) => {
//     let netice = 0
//     x = 1 / 10
//     y = 0
//     let sayi = 1
//     for (let index = 1; index <= a; index++) {
//         nextNumber = (x * 10 ** sayi) + y
//         netice += 2 * nextNumber
//         y = nextNumber
//         sayi++
//     }
//     console.log(netice);
// });
// Input example 1
// 5
// Output example 1
// 24690








// The Fibonacci Sequence is a series of numbers. 
/// The next number is found by adding up the two numbers before it. The first two numbers are 0 and 1.

// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     let a = 0
//     let b = 1
//     let c = 0
//     let netice = "0,1,"
//     while (c < n - 2) {
//         c++
//         x = a + b
//         netice = netice + x + ","
//         a = b
//         b = x
//     }
//     console.log(netice);
// });
// Input example 1
// 10
// Output example 1
// 0  1  1  2  3  5  8  13  21  34


// const { Ask } = require('asfk');
// Ask([""]).then(([a]) => {
//     let n1 = 0;
//     let n2 = 1;
//     let total = '0,1,';

//     for (let i = 2; i < a; i++) {
//         x = n1 + n2;

//         total = total + x + ','
//         n1 = n2
//         n2 = x
//     }
//     console.log(total);
// });
