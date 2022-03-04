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



//task4
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([arr1, arr2]) => {
//     arr1 = arr1.split(" ").map(Number)
//     arr2 = arr2.split(" ").map(Number)
//     let sum = 0
//     let say = arr1.length + arr2.length
//     for (let i = 0; i < arr1.length; i++) {
//         sum += arr1[i]
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         sum += arr2[i]
//     }
//     console.log(sum / say);
// });

//task5
// const { Ask } = require('asfk');
// Ask([""]).then(([arr]) => {
//     arr = arr.split(" ").map(Number)
//     let start = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(start)) {
//             start++
//             continue
//         }
//         else
//             break
//     }
//     console.log(start);
// });



const { Ask } = require('asfk');

Ask(["", ""]).then(([n, arr]) => {
    n = parseInt(n);
    arr = arr.split(" ").map(Number);
    let missing = 1
    let a = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0) {
            
        }
        
        if (arr[i]==missing&&arr[i]!=a) {
            a=arr[i]
            missing++;
        }

        
    }
console.log(missing);
});