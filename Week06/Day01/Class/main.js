
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
const { Ask } = require('asfk');
Ask(["", ""]).then(([n, arr]) => {
    n = parseInt(n);
    arr = arr.split(" ").map(Number);
    let arr1 = [];
    for (let i = 0; i < n; i++) {

        for (j = 0; j < i; j++) {
            if (arr[i] == arr[j])
                break;
        }
        if (i == j) {
            arr1.push(arr[i])

        }

    }
    console.log(...arr1);
})