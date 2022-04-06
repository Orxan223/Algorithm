// in index
// of ededleri


// // Task 1

// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     let eded = [];
//     for (i = 1; i < n; i++) {
//         if (i ** 2 < n) {
//             eded.push(i ** 2)
//                 /        }
//     }
//     console.log(...eded);
// });

// //TASK 2

// const { Ask } = require('asfk');
// Ask([""]).then(([arr]) => {
//     arr = arr.split(" ").map(Number);
//     for (i = 1; i < arr.length; i++) {
//         if (Math.max(arr[i])) {
//             n = arr[i]
//         }
//     }
//     console.log(n);
// });


// //TASK 3
// Given a non - empty array of integers nums,
//     every element appears twice except for one.Find that single one.
// You must implement a solution with a linear runtime 
// complexity and use only constant extra space.

//     const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = n.split(" ").map(Number);
//     let user = {}
//     for (let en of n) {
//         if (user[en]) {
//             user[en]++
//         } else {
//             user[en] = 1
//         }
//     }
//     for (let key in user) {
//         if (user[key] === 1) {
//             a = key
//         }
//     }
//     console.log(a);
// });

// Input example 1
// [2, 2, 1]
// Output example 1
// 1
// Input example 2
// [4, 1, 2, 1, 2]
// Output example 2
// 4



// //Task 4
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

//     const { Ask } = require('asfk');
// Ask([""]).then(([arr]) => {
//     arr = arr.split(" ").map(Number);
//     let user = {}
//     for (let ele of arr) {
//         if (user[ele]) {
//             user[ele]++
//         } else {
//             user[ele] = 1
//         }
//     }
//     for (let key in user) {
//         if (user[key] > ((arr.length) / 2)) {
//             a = key
//         }
//     }
//     console.log(a);
// });

// Input example 1
// [3, 2, 3]
// Output example 1
// 3
// Input example 2
// [2, 2, 1, 1, 1, 2, 2]
// Output example 2
// 2


// Task 5
// First Unique Character in a String
// Given a string s, find the first non - repeating character in
//     it and return its index.If it does not exist, return -1.

// const { Ask } = require('asfk');
// Ask([""]).then(([arr]) => {
//     arr = arr.split("");
//     let user = {}
//     for (let ele of arr) {
//         if (user[ele]) {
//             user[ele]++
//         } else {
//             user[ele] = 1
//         }
//     }
//     for (let key in user) {
//         if (user[key] === 1) {
//             a = key
//             break;
//         } else if (user[key] >= 2) {
//             a = false
//         }
//     }
///     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == a) {
//             index = i
//         } else if (a == false) {
//             index = -1
//         }
//     }
//     console.log(index);
// });

// Input example 1
// "leetcode"
// Output example 1
// 0
// Input example 2
// "loveleetcode"
// Output example 2
// 2
// Input example 3
// "aabb"
// Output example 3
//     - 1