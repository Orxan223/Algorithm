// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     let count = 0
//     let n1 = n
//     while (n1 > 0) {
//         x = n1 % 10
//         n1 = parseInt(n1 / 10)
//         while (n > 0) {
//             y = n % 10
//             n = parseInt(n / 10)
//             if (x == y) {
//                 count++
//             }
//         }
//     }
//     if (count < 2) {
//         console.log("NO");
//     }
//     else
//         console.log("YES");
// });








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
// const { Ask } = require('asfk');
// Ask([""]).then(([a]) => {
//   let n1=0;
//   let n2=1;
//   let total='0,1,';
  
//   for(let i=2; i<a; i++){
//     x=n1+n2;
 
//     total = total + x + ','
//     n1 = n2
//     n2 = x
//     }
//     console.log(total);
// });
