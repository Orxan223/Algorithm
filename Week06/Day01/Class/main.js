
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






//             TASK 3
const { Ask } = require('asfk');
Ask(["", ""]).then(([n, arr]) => {
    n = parseInt(n);
    arr = arr.split(" ").map(Number);
    let arr2 = []
    while (arr.length > 0) {
        let x = arr[0]
        arr.shift()
        while (true) {
            if (arr.includes(x)) {
                let deletedIndex = arr.indexOf(x)
                arr.splice(deletedIndex, 1)
            }
            else
                arr2.push(x)
            break
        }
    }
    console.log(...arr2);
});




// Task 4
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let matrix = [];
//     let sum = 0
//     for (let i = 0; i < n; i++) {
//         matrix.push(arr.splice(0, n));
//     };
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] >= 0) {
//                 sum += matrix[i][j]
//             }
//         }
//     }
//     console.log(sum);
// });





//task5
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let matrix = [];
//     let mainDiagonal = 0
//     let reverseDiagonal = 0
//     for (let i = 0; i < n; i++) {
//         matrix.push(arr.splice(0, n));
//     };
//     let j = 0
//     let k = n - 1
//     for (let i = 0; i < n; i++) {
//         mainDiagonal += matrix[i][j] //0 0
//         reverseDiagonal += matrix[i][k] //0 3
//         j++
//         k--
//     }
//     console.log(mainDiagonal);
//     console.log(reverseDiagonal);
// });




//task6
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = parseInt(n);
//     let matrix = []
//     let size = 2 * n - 1
//     for (let i = 0; i < size; i++) {
//         matrix.push(new Array(size).fill(" "))

//     }
//     let x = 0
//     let y = size - 1
//     for (let i = 0; i < size; i++) {
//         matrix[i][x] = "*"
//         matrix[i][y] = "*"
//         x++
//         y--
//     }
//     for (let i = 0; i < size; i++) {
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
//     let total = 0
//     for (let i = 0; i < n; i++) {
//         matrix1.push(arr1.splice(0, m));
//         matrix2.push(arr2.splice(0, m));
//     };
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (matrix2[i][j] == 1) {
//                 total += matrix1[i][j]
//             }
//         }
//     }
//     console.log(total);
// });