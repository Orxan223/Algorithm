// function say(string,char) {
//     let count = 0
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == char || string[i] == char.toUpperCase()) {
//             count++;
//         }
//     }
//     return count
// }




//TASK1
// The number in reverse order
// Write a nonnegative integer n in reverse order.
// const { Ask } = require('asfk');
// Ask([""]).then(([num]) => {
// function reverseDigits(num) {
//     let rev_num = 0;
//     while(num > 0){
//         rev_num = rev_num * 10 + num % 10;
//         num = num / 10;
//     }
//     return rev_num;
// }
// console.log(reverseDigits(num))
// })
// Input example 1
// 1234
// Output example 1
// 4321
// Input example 2
// 100
// Output example 2
// 001


//TASK2
// The number of specified digits
// Count the number of digits a in number n.

// const { Ask } = require("asfk");
// Ask(["", ""]).then(([arr, n]) => {
// function Eded(arr,n) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == n) {
//             count++;
//         }
//     }
//     return count
// }
// console.log(Eded(arr,n));
// })
// Input example 1
// 25557
// 5
// Output example 1
// 3
// Input example 2
// 100
// 0
// Output example 2
// 2


//TASK3
// The sum of the first and the last digits in the number
// Find the sum of the first and the last digit of an integer.
// const { Ask } = require("asfk");
// Ask([""]).then(([x]) => {
//     function eded(x) {
//         for (let i = 0; i < x; i++) {
//             let n1 = Number(x[0]);
//             let n2 = Number(x[x.length - 1]);
//             return n1 + n2
//         }
//     }
//     console.log(eded(x));

// })
// Input example 1
// 2345
// Output example 1
// 7




//TASK4
// Delete a fragment
// Given a string of Latin letters and spaces. 
// Delete in it all characters with indices from n to m inclusive. Indexation starts from 0.
// const { Ask } = require("asfk");
// Ask(["","",""]).then(([x,y,z]) => {
// function removeFromString(x,y,z) {
//     let newStr = '';
  
//     for (let i = 0; i < x.length; i++) {
  
//       if (i >= y && i <= z) {
//             continue
//       }else{
//         newStr += x[i];

//       }
//     }
//     return newStr;
//   }
  
//   console.log(removeFromString(x,y,z));
// })
// Input example 1
// abrakadabra
// 3 6
// Output example 1
// abrabra
// Input example 2
// This is my lovely beautiful house
// 7 16
// Output example 2
// This is beautiful house









//TASK5
// Length of words
// Given text - sequence of words. Find the length of each word.
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     function b(n) {
//       let result = [];
//       let a = n.split(' ');
//       for (let i = 0; i < a.length; i++){
//         result.push(a[i].length);
//       }
//       return result;
//     }
    
//     console.log(b(n));
// })
// Input example 1
// Programming Principles 1
// Output example 1
// 11 10 1
// Input example 2
// I like C 
// very
// much
// Output example 2
// 1 4 1 4 4 
