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
//     for (let i = 0; i < arr.length; i++) {
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
//     let a = [arr[arr.length - 1]];
//     for (let i = 0; i < arr.length - 1; i++) {
//       a.push(arr[i]);
//     }


//   console.log(...a);
// })


///-----------------Task 6-------------------
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n)
//     arr = arr.split(" ").map(Number)
//     let larg = arr[0]
//     let minvalue = arr[0]
//     if (arr.length > 1) {
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] > larg) {
//                 larg = arr[i]
//             }
//         }
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] < minvalue) {
//                 minvalue = arr[i]
//             }
//         }
//     console.log(minvalue, larg);
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

//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i] % 2 != 0) && (arr1.push(arr[i]))) {

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

//     for (let i = 0; i < arr.length; i++) {
//         if (larg < arr[i]) {
//             larg = arr[i]

//         }else if (arr[i]==larg){
//             sayi = sayi + 1

//         }
//     }
//     console.log(sayi);
// })


// --------Task 9 ---------
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let larg = arr[0]
//     let cem = 0
//     for (let i = 0; i < arr.length; i++) {
//         if ((larg < arr[i]) || (arr[i] == larg)) {
//             larg = arr[i]
//             if (arr[i] == larg) {
//                 arr[i].splice(i, 1)
                
//             }
//         }
//     }
//     cem = cem + arr[i]
//     console.log(cem);
// })