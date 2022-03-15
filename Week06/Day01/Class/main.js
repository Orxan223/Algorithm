
//Elave
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


//TASK 1
// const { Ask } = require('asfk');
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


//TASK 2
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







//TASK3
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr2 = []
//     while (arr.length > 0) {
//         let x = arr[0]
//         arr.shift()
//         while (true) {
    //         if (arr.includes(x)) {
    //             let deleted = arr.indexOf(x)
    //             arr.splice(deleted, 1)
    //         }
    //         else
    //             arr2.push(x)
    //         break
    //     }
    // }
//     console.log(...arr2);
// });






// Task 4
// const { Ask } = require('asfk');
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




// //task5
// const { Ask } = require('asfk');
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
//         j+=1
//         k-=1
//     }
//     console.log(main,second);
// });




//task6
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
//         x+=1
//         y-=1
//     }
//     for (let i = 0; i < lengths; i++) {
//         console.log(matrix[i].join(""));
//     }
// });





//task7
// const { Ask } = require('asfk');
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