// in index
// of ededleri


// // Task 1

// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//    let eded = [];
//    for (i=1 ; i < n ; i++){
//        if (i**2 < n) {
//            eded.push(i**2)
//        }
//     }
//    console.log(...eded);
// });

// //TASK 2

// const { Ask } = require('asfk');
// Ask([""]).then(([arr]) => {
//    arr = arr.split(" ").map(Number);
//    for (i=1 ; i < arr.length ; i++){
//        if (Math.max(arr[i])) {
//            n=arr[i]
//        }
//     }
//    console.log(n);
// });


// //TASK 3

// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = n.split(" ").map(Number);
//     let user = {}
//     for (let en of n) {
//         if (user[en]) {
//             user[en]++
//         } else {
//             user[en] = 1
//         }
//     }
//     for (let key in user) {
//         if (user[key] === 1) {
//             a = key
//         }
//     }
//     console.log(a);
// });

// //Task 4


// const { Ask } = require('asfk');
// Ask([""]).then(([arr]) => {
//    arr = arr.split(" ").map(Number);
//    let user = {}
//    for (let ele of arr){
//        if (user[ele]) {
//            user[ele]++
//        }else{
//            user[ele]= 1
//        }
//    }
//    for (let key in user){
//        if (user[key]> ((arr.length)/2)) {
//         a=key
//        }
//    }
//    console.log(a);
// });

// Task 5

const { Ask } = require('asfk');
Ask([""]).then(([arr]) => {
    arr = arr.split("");
    let user = {}
    for (let ele of arr) {
        if (user[ele]) {
            user[ele]++
        } else {
            user[ele] = 1
        }
    }
    for (let key in user) {
        if (user[key] === 1) {
            a = key
            break;
        } else if (user[key] >= 2) {
            a = false
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == a) {
            index = i
        } else if (a == false) {
            index = -1
        }
    }
    console.log(index);
});