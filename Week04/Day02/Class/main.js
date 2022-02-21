// let largest = 0;
// let tekrar = 1;
// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 0) {
//         let eded = a % 10;
//         if (largest < eded) {
//             largest = eded;

//         } else if (eded == largest) {
//             tekrar = tekrar + 1;
//         }

//         a = parseInt(a / 10);
//     }
//     if (tekrar < 2) {
//         console.log('No');
//     }else{
//         console.log('Yes');
//     }
// }
// );

// let i = 0 
// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     var total=1;
//     for(var i=a; i>0; i--){
//         total*=i;
//     }
//     console.log(total);
// }
// );


// let newN = 0;
// let mertebe = 4;
// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => {
//     while (n > 0) {
//         let sonReqem = n % 10;
//         sonReqem *= Math.pow(10, mertebe)
//         newN += sonReqem;
//         mertebe--;
//         n = parseInt(n / 10);
//     }
//     console.log(newN);
// });





// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => {
//     let sum = 0;
//     for (let x = 1; x <= n; x++)
//         sum = x * x * x;
//     console.log(sum);
// });


// const { Ask } = require('asfk');
// Ask([""]).then(([a]) => {
//     let netice = 0
//     x = 1/10
//     y = 0
//     let sayi=1
//     for (let index = 1; index <= a; index++) {
//         nextNumber = (x * 10**sayi) + y 
//         netice += 2 * nextNumber 
//         y = nextNumber 
//         sayi++
//     }
//     console.log(netice);
// });


// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     let a = 0
//     let b = 1
//     let c = 0
//     let netice = "0,1,"
//     while (c < n - 2) {
//         c++
//         x = a + b
//         netice = netice + x + ","
//         a = b
//         b = x
//     }
//     console.log(netice);
// });

