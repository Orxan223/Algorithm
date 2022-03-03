// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);

//     let larg = arr[0];
//     let min = arr[0];
//     let cem = 0;
//     let say = 0;
//     let say1 = 0;
//     for (let i = 0; i < n; i++) {
//         if (arr[i]>larg) {
//             larg = arr[i];
//             say = 1;
//         }else if (arr[i]==larg) {
//             say++
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         if (arr[i]<min) {
//             min = arr[i];
//             say1= 1;
//         }else if (arr[i]==min) {
//             say1++
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         cem += arr[i];
//     }

//     console.log(cem-((say*larg)+(say1*min)));
// });

//task2
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let index = 0;
//     let larg = arr[0];
//     for (let i = n-1; i > 0;i--) {
//         if (arr[i]>larg) {
//             larg = arr[i];
//             index = i;
//             arr[index] = arr[n-1];
//             arr[n-1] = larg
//         }
//     }
//     console.log(...arr);
// });


//     let temp = arr[index];
//     arr[index] = arr[-1];
//     arr[-1] = temp;

//     console.log(larg);
// // 3sonundcu
// })


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

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let cem = 0
//     let cem1 = 0
//     let a = arr.lenght
//     let b = arr.lenght
//     for (let i = 0; i < n; i++) {
//         cem1= cem1 + arr[i]
//     }
//     for (let i = 0; i < n; i++) {
//         cem = cem + arr[i]
//     }

//.     console.log((cem1+cem)/a+b);
    

// })