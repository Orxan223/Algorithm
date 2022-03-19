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
// Ask([""]).then(([arr]) => {
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

// const { Ask } = require('asfk');
// Ask([""]).then(([a]) => {
//     let b = a.split(".")
//    console.log(b.length); 
// });






// //TASK5
// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     let c = 0
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] == "-" || a[i] == "+" || a[i] == "*") {
//             c++
//         }

//     }
//     console.log(c);
// });




//TASK6
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = n.split(" ")
//     let a = []
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] != "") {
//             a.push(n[i])
//         }
//     }
//     console.log(a.length);
// });


//TASK7
// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     let b = 0
//     let c = 0
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == 'k') {
//             c++

//         }
//         else {
//             c = 0
//         }
//         if (c > b) {
//             b = c

//         }
//     }
//     console.log(b);
// });


//TaSk7 another way
// const { Ask } = require('asfk');
// Ask([""]).then(([str]) => {
//     str = str.split("p")
//     let max = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].length > max) {
//             max = str[i].length
//         }
//     }
//     console.log(max);
// });


// //TASK8
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     let arr = n.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);

//     }
//     console.log(...arr);
// })



// //TASK9
// const { Ask } = require("asfk");
// Ask(["", ""]).then(([arr, n]) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].toUpperCase() == n.toUpperCase()) {
//             count++;
//         }
//     }
//     console.log(count);
// })




//TASK 10,11
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     index = 0,
//         res = [];
//     let arr = n.split("");
//     while ((index = n.indexOf(' ', index + 1)) > 0) {
//         res.push(index)

//     }

//     console.log(res[0], res[res.length - 1]);
// })





//TASK 10 ,11
// const { Ask } = require('asfk');
// Ask([""]).then(([str]) => {
//     const a = str.indexOf(" ")
//     let b = -1
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == " ") {
//             b = i
//         }
//     }
//     if (a == -1) {
//         console.log(-1);
//     }
//     else {
//         console.log(a, b);
//     }
// });