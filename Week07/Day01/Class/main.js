// let arr = [30,15,45]
// console.log(Math.min(...arr));

//Task2
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = parseInt(n);
// var l = n.toString().split('');

//     console.log(Math.max(...l));
// })
//Task3
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = parseInt(n);
//     let arr = n.split(" ");

//     let b = 0
//     let w = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (n == 5) {
//             b += 1

//         } else if (n == 2) {
//             w += 1
//         }
//     }
//     console.log(b);
//     console.log(w);

// })





//TASK4
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     let re = /[.!?]/;
//     let numOfSentences = n.split(re);
//     console.log(numOfSentences.length );

// })












//TASK5
const { Ask } = require("asfk");
Ask([""]).then(([n]) => {
    let l = n.split("").map(Number);
    console.log(l);
    let count = 0

    // if (l == removeChar) {
    //     count++
    // }
    // console.log(count);
})



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

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//     }
//     let str2 = arr.join(" ");
//     console.log(str2);
///// })//