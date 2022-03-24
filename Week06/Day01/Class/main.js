// Elave
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = parseInt(n)
//     for (let i = 1; i <= n; i++) {
//         let arr1 = []
//         for (let j = 1; j <= i; j++) {
//             arr1.push(j);
//         }
//         console.log(...arr1);
//     }
// })

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5



// TASK 1
// Massivin elementlərinin özündən başqa hasili
// n tam ədəd ehtiva edən in massivi verilir.Elə out
//  massivi qurun ki, outiin massivinin ini - dən başqa 
//  bütün elementlərinin hasilinə bərabər olsun.Məsələni
// O(n) və yaddaşa görə sabit mürəkəblikdə həll edin.


//     const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//         let hasil = 1;
//         for (let j = 0; j < arr.length; j++) {
//             if (i != j) {
//                 hasil *= arr[j];
//             }
//         }
//         arr1.push(hasil)
//     }
//     console.log(...arr1);
// })

// Input example 1
// 4

// 1 2 3 4
// Output example 1
// 24 12 8 6
// Input example 2
// 4

// 2 0 1 4
// Output example 2
// 0 8 0 0
// Input example 3
// 10

//     - 3 2 1 - 1 1 - 2 1 - 1 1 - 1
// Output example 3
// 4 - 6 - 12 12 - 12 6 - 12 12 - 12 12







// TASK 2
// İki massiv
// İki massiv verilib.Birinci massivin o elementlərini çap edin ki, qiymətləri ikinci massivdə
// olmasın(elementlərin ardıcıllığı birinci massivdəki kimi çap edilməlidir).

// const { Ask } = require('asfk');
// Ask(["", "", "", ""]).then(([n, arr1, m, arr2]) => {
//     n = parseInt(n);
//     m = parseInt(m);
//     arr1 = arr1.split(" ").map(Number);
//     arr2 = arr2.split(" ").map(Number);
//     let arr3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         let tekrar = false;
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 tekrar = true;
//                 break;
//             };
//         };
//         if (tekrar == false) {
//             arr3.push(arr1[i]);
//         };
//     };
//     console.log(arr3.length);
//     console.log(...arr3);
// });
// Input example 1
// 7
// 3 1 3 4 2 4 12

// 6
// 4 15 43 1 15 1

// Output example 1
// 4
// 3 3 2 12






// TASK3
// Unique elements
// Array of n integers is given.Print those elements that appears
//     in array only once.Print the elements in the same order as they appear in the list.

//         const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr2 = []
//     while (arr.length > 0) {
//         let x = arr[0]
//         arr.shift()
//         while (true) {
//             if (arr.includes(x)) {
//                 let deleted = arr.indexOf(x)
//                 arr.splice(deleted, 1)
//             }
//             else
//                 arr2.push(x)
//             break
//         }
//     }
//     console.log(...arr2);
// });


// Input example 1
// 7

// 3 5 - 7 7 5 - 9 - 4
// Output example 1
// 3 - 7 7 - 9 - 4 





// Task 4
// Matrisdə müsbətlərin cəmi
// n * n ölçülü matris verilmişdir.Onun müsbət elementlərinin cəmini tapın.
//     const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let matrix = [];
//     let cem = 0
//     for (let i = 0; i < n; i++) {
//         matrix.push(arr.splice(0, n));
//     };
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] >= 0) {
//                 cem += matrix[i][j]
//             }
//         }
//     }
//     console.log(cem);
// });
// Input example 1
// 3

// 4 - 2 5
// 1 - 4 - 12
// 0 1 - 3
// Output example 1
// 11



// //task5
// Diaqonallar
// n × n ölçülü kvadrat cədvəldə əsas və tərs diaqonallarda yerləşən ədədlərin cəmini hesablayın.
//     const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let matrix = [];
//     let main = 0
//     let second = 0
//     for (let i = 0; i < n; i++) {
//         matrix.push(arr.splice(0, n));
//     };
//     let j = 0
//     let k = n - 1
//     for (let i = 0; i < n; i++) {
//         main += matrix[i][j]
//         second += matrix[i][k]
//         j += 1
//         k -= 1
//     }
//     console.log(main, second);
// });
// Input example 1
// 4

// 134 475 30 424
// 303 151 419 235
// 248 166 90 42
// 318 237 184 36

// Output example 1
// 411 1327



// task6
// Cross
// Nümunəyə baxın...
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = parseInt(n);
//     let matrix = []
//     let lengths = 2 * n - 1
//     for (let i = 0; i < lengths; i++) {
//         matrix.push(new Array(lengths).fill(" "))

//     }
//     let x = 0
//     let y = lengths - 1
//     for (let i = 0; i < lengths; i++) {
//         matrix[i][x] = "*"
//         matrix[i][y] = "*"
//         x += 1
//         y -= 1
//     }
//     for (let i = 0; i < lengths; i++) {
//         console.log(matrix[i].join(""));
//     }
// });
// Input example 1
// 3
// Output example 1
//     *   *
//  * *
//   *
//  * *
// *   *
//     Input example 2
// 5
// Output example 2
//     *       *
//  *     *
//   *   *
//    * *
//     *
//    * *
//   *   *
//  *     *
// *       *





//     task7
// Teatrın mədaxili
// Teatrda hər birində M yer olan N sıra var.İki matris verilir – birincidə
//  biletlərin sayı.İkinci isə hansı biletlərin satıldığını, hansıların 
//  satılmadığını bildirir(1 – uyğun biletin satıldığını, 0 isə satılmadığını).

// Tamaşadan əldə olunan ümumi mədaxili təyin edin.
//     const { Ask } = require('asfk');
// Ask(["", "", "", ""]).then(([m, n, arr1, arr2]) => {
//     n = parseInt(n);
//     m = parseInt(m)
//     arr1 = arr1.split(" ").map(Number);
//     arr2 = arr2.split(" ").map(Number);
//     let matrix1 = []
//     let matrix2 = []
//     let cem = 0
//     for (let i = 0; i < n; i++) {
//         matrix1.push(arr1.splice(0, m));
//         matrix2.push(arr2.splice(0, m));
//     };
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (matrix2[i][j] == 1) {
//                 cem += matrix1[i][j]
//             }
//         }
//     }
//     console.log(cem);
// });
// Input example 1
// 3 3

// 1 2 3
// 4 5 6
// 7 8 9

// 1 0 1
// 0 1 0
// 1 0 1
// Output example 1
// 25