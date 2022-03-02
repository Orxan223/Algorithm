//Task1
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);


//     let cem = 0
//     for (let i = 0; i < arr.length; i++) {
//         cem += arr[i]

//     }
//     console.log(cem);
// });


//Task2
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);


//     let larg = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(larg<arr[i]){
//             larg=arr[i]
//         }

//     }
//     console.log(larg);

// })



//Task3

// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(' ').map(Number);
//     let arr1 = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] >= 0) arr1.push(arr[i] + 2);
//         else arr1.push(arr[i]);
//     };
//     console.log(...arr1);
// });

// --------------- task 4 ------------------

// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);


//     let larg = arr[0]
//     var minvalue = arr[0];
//     for (let i = 0; i < n; i++) {
//         if(larg<arr[i]){
//             larg=arr[i]
//         }else if (arr[i] < minvalue)  {
//             minvalue = arr[i];
//         }

//     }
//     console.log(larg-minvalue);
// })

// -----------------Task 5 -------------------
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let a = [arr[n - 1]];
//     for (let i = 0; i < n - 1; i++) {
//       a.push(arr[i]);
//     }


//   console.log(...a);
// })


// /-----------------Task 6-------------------
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n)
//     arr = arr.split(" ").map(Number)
//     let larg = arr[0]
//     let minvalue = arr[0]
//         for (let i = 0; i < n; i++) {
//             if (arr[i] > larg) {
//                 larg = arr[i]
//             }
//         }
//         for (let i = 0; i < n; i++) {
//             if (arr[i] < minvalue) {
//                 minvalue = arr[i]
//             }
//         }

//     if (n > 1) {
//         console.log(minvalue, larg);
//     }
//     else
//         console.log("Ooops!");
// });




// ------------------TASK 7 ---------------------

// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1 = [];

//     for (let i = 0; i < n; i++) {
//         if (arr[i] % 2 != 0) {
//             arr1.push(arr[i])
//         }

//     }
//     console.log(...arr1);
// })

// ------------------ Task 8 ----------------------


// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let larg = arr[0]
//     let sayi = 0

//     for (let i = 0; i < n; i++) {
//         if (larg < arr[i]) {
//             larg = arr[i]

//         }else if (arr[i]==larg){
//             sayi = sayi + 1

//         }
//     }
//     console.log(sayi);
// })


// ------------Task 9 --------------
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let larg = arr[0]
//     let sayi = 0
//     let cem = 0
//     for (let i = 0; i < n; i++) {
//         if (larg < arr[i]) {
//             larg = arr[i]

//         }else if (arr[i]==larg){
//             sayi = sayi + 1


//         }
//         cem  = cem + arr[i]
//     }
//     sayi = sayi * larg

//     console.log(cem - sayi );
// })



// ---------------Task 10--------------


// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let larg = 0;
//     let second = 0;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] > larg) {
//             second = larg;
//             larg = arr[i];
//         } else if (arr[i] > second) {
//             second = arr[i];
//         }
//     }
//     console.log(larg + second);

// })