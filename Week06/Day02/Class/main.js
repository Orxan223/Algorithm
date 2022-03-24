// Task 1
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let matrix = [];
//     let cem = 0
//     let count = 0
//     for (let i = 0; i < n; i++) {
//         matrix.push(arr.splice(0, n));
//     };
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if ((matrix[i][j] % 2 == 0) && matrix[i][j] < 0) {
//                 cem += matrix[i][j]
//                 count +=1
//             }
//         }
//     }
//     console.log(cem,count);
// });

// const { Ask } = require('asfk');
// Ask(["", "", "", ""]).then(([n, arr, a, b]) => {
//     n = parseInt(n);
//     a = parseInt(a)
//     b = parseInt(b)
//     arr = arr.split(" ").map(Number);
//     let matrix = []
//     for (let i = 0; i < n; i++) {
//         matrix.push(arr.splice(0, n))
//     }
//     matrix.splice(a)
//     for (let i = 0; i < a; i++) {
//         matrix[i].splice(b)
//     }
//     console.log(matrix);
// });





// const { Ask } = require('asfk');
// Ask(["", "", ""]).then(([n, a, arr]) => {
//     n = parseInt(n);
//     a = parseInt(a)
//     arr = arr.split(" ").map(Number);
//     let matrix = []
//     for (let i = 0; i < n; i++) {
//         matrix.push(arr.splice(0, a))
//     }

//     let min = matrix[0][0]

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < a; j++) {
//             if (matrix[i][j] < min) {
//                 min = matrix[i][j]
//             }
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         if (matrix[i].includes(min)) {
//             console.log(i + 1);
//         }
//     }
// });







// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = parseInt(n);
//     let arr = []
//     let matrix = []
//     let white = 1
//     let black = Math.ceil(n ** 2 / 2) + 1
//     while (white < Math.ceil(n ** 2 / 2) + 1) {
//         arr.push(white, black)
//         white++
//         black++
//     }
//     for (let i = 0; i < n; i++) {
//         matrix.push(arr.splice(0, n))
//     }
////     console.log(matrix);
//// });