// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n)
//     arr = arr.split(" ").map(Number)
//     let max = arr[0]
//     let min = arr[0]
//     let sum=0
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
//         if (arr[index]!=max && arr[index]!=min ) {
//             sum+=arr[index]           
//         }        
//     }
//     console.log(sum);
// });
// --------------------TASK 2 --------------
// const { Ask } = require('asfk');
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



// --------------------TASK 3 ---------------------
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1 = [];

//     let larg = arr[0]
//     for (let i = arr.length -1 ; i>=0 ;  i--) {
//         arr1.push(arr[i])


//     }
//     console.log(...arr1);

// })






// const { Ask } = require('asfk');
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



// const { Ask } = require('asfk');
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