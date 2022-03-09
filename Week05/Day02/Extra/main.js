const { Ask } = require('asfk');
Ask(["", ""]).then(([n, arr]) => {
    n = parseInt(n);
    arr = arr.split(" ").map(Number);
    let count = 1;

    for (let i = 1; i < n; i++) {

        for (j = 0; j < i; j++){
            if (arr[i] == arr[j])
                break;
        }
        if (i == j) {
            count++;
        }       
    }
    console.log(count);
})



// arr[i] - 3 5 -7 7 5 -9 -4
// i - 1,2,3,4,5,6




































//------------Task 2-----------------
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let larg = arr[0]
//     let index = arr.indexOf(larg)
//     for (let i = 0; i < n; i++) {
//         if (larg < arr[i]) {
//             larg = arr[i]

//         }
//     }
//     console.log(larg, arr.indexOf(larg) + 1);
// })
















// --------------TASK 3---------------
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1 = [];
//     for (let i = 0; i < n; i++) {
//         if ((arr.indexOf(arr[i]) % 2 == 0) && (arr1.push(arr[i]))) {
//         }
//     }
//     console.log(...arr1);
// })



















// -----------------TASK 4-------------------
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1 = [];
//     for (var i = 1; i < n - 1; i++) {
//         if (arr[i]  > arr[i -1])
//         arr1.push(arr[i])
//     }
//     console.log(...arr1)
// })



















// --------------------TASK 5 ----------------------
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     for (let i = 0; i + 1 < arr.length; i += 2) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

//     }
//     console.log(...arr);
    
// })
































// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n)
//     arr = arr.split(" ").map(Number)
//     deleted_index = 0
//     let min = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] == min) {
//             deleted_index = index
//             break
//         }
//     }
//     let x = arr[deleted_index]
//     arr[deleted_index] = arr[0]
//     arr[0]  = x
//     console.log(...arr);
// });

