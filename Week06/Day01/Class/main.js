
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








//         Task 3
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1 = [];
//     for (let i = 0; i < n; i++) {

//         for (j = 0; j < n; j++) {
//             if (arr[i] == arr[j])
//                 break
//         }
//         if (i == j) {
//             arr1.push(arr[i])

//         }

//     }
//     console.log(...arr1);
// })
//----------------------









// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {

//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let cem = 0
//     let tekrar = 0
//     let matrix = [];
//     for (let i = 0; i < n; i++) {
//         console.log(arr);
//         matrix.push(arr.splice(0,n));
//         if (arr[i] > 0) {
//             cem += arr[i]
//         } else if (arr[i] == arr[i]) {
//             tekrar++
//         }
//     };

// console.log(matrix);
//     console.log(cem+tekrar);
// });











// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = parseInt(n)
//     let arr = []
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if ((i == j) || (i + j == n)) {
//                 arr.push('*')
//             } else {
//                 arr.push(' '); 
//             }

//         }

//         console.log(...arr);

//     }
// })










//        TASK 5

// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let main = 0;
//     let matrix = [];
//     // let secondary = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             matrix.push(arr.splice(0,n));
//             if (i == j) {
//                 main += arr[i][j];
//             }        
//         }
//     } 
//        console.log(matrix);

// })

const { Ask } = require('asfk');
Ask(["", ""]).then(([n, arr]) => {
    n = parseInt(n);
    arr = arr.split(" ").map(Number);
    let principal = 0
    let matrix = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix.push(arr.splice(0,n));
            if (i == j) {
                principal += arr[i][j];
            }
        };
    }
    console.log(principal);
});