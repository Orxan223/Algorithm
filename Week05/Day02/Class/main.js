// Ən böyük və ən kiçiklərindən başqa
// N sayda tam ədədlərdən ibarət massiv verilir.
//  Bu massivin ən kiçik və ən böyük elementlərindən başqa bütün elementlərinin cəmini tapın.


// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n)
//     arr = arr.split(" ").map(Number)
//     let max = arr[0]
//     let min = arr[0]
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] != max && arr[index] != min) {
//             sum += arr[index]
//         }
//     }
//     console.log(sum);
// });

// Input example
// 7

// 6 2 7 1 7 1 2
// Output example
// 10





// --------------------TASK 2 --------------
//     Task 2 🎯
// Sonuncu ən böyük
// n sayda tam ədədlərdən ibarət massiv verilir. 
// Bu massivdə sonuncu rast gəlinən ən böyük elementi tapıb sonuncu elementlə yerlərini dəyişin.
//  Digər elementləri olduğu kimi saxlayın.

//     const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n)
//     arr = arr.split(" ").map(Number)
//     deleted_index = 0
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] == max) {
//             deleted_index = index
//         }
//     }
//     let x = arr[deleted_index]
//     arr[deleted_index] = arr[arr.length - 1]
//     arr[arr.length - 1] = x
//     console.log(...arr);
// });
// Input example
// 7

// 6 - 3 7 - 4 7 4 - 5
// Output example
// 6 - 3 7 - 4 - 5 4 7


// --------------------TASK 3 ---------------------
//     İlkin ardıcıllıq
// n tam ədəddən ibarət massiv proqramın girişinə tərs ardıcıllıqla
// verilmişdir - yəni sonuncudan birinci elementə qədər. 
// Bu massivin ilkin vəziyyətini bərpa edin.
//     const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1 = [];

//     let larg = arr[0]
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr1.push(arr[i])


//     }
//     console.log(...arr1);

// })
// Input example
// 7

// 6 0 - 7 2 - 3 5 7
// Output example
// 7 5 - 3 2 - 7 0 6




// Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, 
// return the median of the two sorted arrays.
//     const { Ask } = require('asfk');
// Ask(["", ""]).then(([arr1, arr2]) => {
//     arr1 = arr1.split(" ").map(Number)
//     arr2 = arr2.split(" ").map(Number)
//     let cem = 0
//     let sayi = arr1.length + arr2.length
//     for (let index = 0; index < arr1.length; index++) {
//         cem = cem + arr1[index];


//     }
//     for (let index = 0; index < arr2.length; index++) {
//         cem = cem + arr2[index];

//     }
//     console.log(cem / sayi);
// });
// Input example 1
// [1, 3][2]
// Output example 1
// 2
// Input example 2
// [1, 2][3, 4]
// Output example 2
// 2.5




// First Missing Positive
// Given an unsorted integer array nums, return the smallest missing positive integer.
//     const { Ask } = require('asfk');
// Ask([""]).then(([arr]) => {
//     arr = arr.split(" ").map(Number)
//     let baslangic = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(baslangic)) {
//             baslangic++
//             continue
//         }
//         else
//             break
//     }
//     console.log(baslangic);
// });
// Input example 1
// [1, 2, 0]
// Output example 1
// 3
// Input example 2
// [3, 4, -1, 1]
// Output example 2
// 2
// Input example 3
// [7, 8, 9, 11, 12]
// Output example 3
// 1   