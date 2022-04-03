//Müxtəlif elementlərin sayı
// N sayda tam ədədlərdən ibarət massivdəki müxtəlif elementlərin sayını tapmaq lazımdır.

// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let count = 1;

//     for (let i = 1; i < n; i++) {

//         for (j = 0; j < i; j++){
//             if (arr[i] == arr[j])
//                 break;
//         }
//         if (i == j) {
//             count++;
//         }       
//     }
//     console.log(count);
// })


// arr[i] - 3 5 -7 7 5 -9 -4
// i - 1,2,3,4,5,6
// Input example
// 7

// 3 5 -7 7 5 -9 -4
// Output example
// 6





// Maximum element
// Array of n integers is given. Find the value of the maximum element and its index in array.
//  The indexation starts from 1. If there are many maximum elements, 
//  print the index of the first one.

//------------Task 2-----------------
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let larg = arr[0]
//     let index = 0
//     for (let i = 0; i < n; i++) {
//         if (larg < arr[i]) {
//             larg = arr[i]
//             index = i

//         }
//     }
//     console.log(larg, index+1);
// })
// Input example
// 7

// 3 5 -7 7 5 -9 -4
// Output example
// 7 4




// Cüt İndekslər
// n sayda tam ədəddən ibarət massiv verilir.
//  Cüt indekslərdəki elementləri tapın. İndeksləmə 0 -dan başlayır.
// --------------TASK 3---------------
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1 = [];
//     for (let i = 0; i < n; i++) {
//         if (i % 2 == 0) {
//             arr1.push(arr[i])
//         }
//     }
//     console.log(...arr1);
// })
// Input example
// 77

// 14 16 3 7 17 19 9
// Output example
// 14 3 17 9








// -----------------TASK 4-------------------
// Əvvəlkindən Böyük
// Tam ədədlərdən ibarət massiv verilir.
//  Bu massivin özündən bir əvvəlki elementdən böyük olan elementlərini tapın.
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1 = [];
//     for (let i = 0; i < n; i++) {
//         if (arr[i]  > arr[i -1])
//         arr1.push(arr[i])
//     }
//     console.log(...arr1)
// })
// Input example
// 7

// 14 16 3 7 17 19 9
// Output example
// 16 7 17 19







// --------------------TASK 5 ----------------------
// Qonşuları dəyişdirin
// n sayda elementdən ibarət massiv verilir. Qonşu elementlərin yerini dəyişin
//  (a[0] və a[1],a[2] və a[3] və bu şəkildə davam edin).
//  Əgər massivdə tək sayda element olarsa, onda sonuncu elementi olduğu kimi saxlayın.

// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     for (let i = 0; i + 1 < arr.length; i += 2) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

//     }
//     console.log(...arr);
    
// })
// Input example
// 7

// 3 5 -7 7 5 -9 -4
// Output example
// 5 3 7 -7 -9 5 -4




// İlk ən kiçiyi
// n sayda tam ədədlərdən ibarət massiv verilir. Bu massivdə ilk ən kiçik elementi 
// tapıb birinci elementlə yerlərini dəyişin. Digər elementləri olduğu kimi saxlayın.




// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n)
//     arr = arr.split(" ").map(Number)
//     deleted_index = 0
//     let min = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
///     }
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] == min) {
//             deleted_index = index
//             break
//         }
//     }
//     let x = arr[deleted_index]
//     arr[deleted_index] = arr[0]
//     arr[0]  = x
//     console.log(...arr);
// });

// 7

// 6 -3 5 -5 -4 7 -5
// Output example
// -5 -3 5 6 -4 7 -5