// let arr = [30,15,45]
// console.log(Math.min(...arr));

//Task2
// const { Ask } = require("asfk");
// Ask([""]).then(([s]) => {
//     let arr = s.split('').map(Number);
//     console.log(Math.max(arr[0], arr[arr.length - 1]));
// });


//Task3
// const { Ask } = require('asfk');
// Ask(["",""]).then(([n,arr]) => {
//     n = parseInt(n);
//     let b = 0
//     let w = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 5) {
//             b += 1

//         } else if (arr[i] == 2) {
//             w += 1
//         }
//     }
//     if (b>w) {
//         console.log(5);
//     }else if(b<w){
//         console.log(2);
//     }else{
//         console.log('=');
//     }


// })





//TASK4
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     let re = /[.!?]/;
//     let numOfSentences = n.split(re);
//     console.log(numOfSentences.length );

// })
// -----------











// //TASK5
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     let l = n.split("+-*").map(Number);
//     console.log(...l);
// let count = 0

// if (l == removeChar) {
//     count++
// }
//     console.log(count);
// })-------------



//TASK6
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     let removeChar = n.replace(/[^A-Za-z]\s+/g, " ");
//     let newWord = removeChar.trim().split(" ");
//     console.log(newWord.length);
// })



//TASK7
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     let arr = n.split(" ");
// for (let i = 0; i < arr.length; i++) {
//     arr[0] + 'k'
// }
//     console.log(arr);

// });
//---------










//TASK8
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     let arr = n.split(" ");

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//     }
//     let str2 = arr.join(" ");
//     console.log(str2);
// /// })//










//TASK 10
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     index = 0,
//     res = [];

//     while ((index = n.indexOf(' ', index + 1)) > 0) {

//         res.push(index)
//     }
//     if (res[0],res[-1]) {
//         console.log(res[0],res[-1]);
//     }else{
//         console.log(-1);
//     }
// })
//---------------