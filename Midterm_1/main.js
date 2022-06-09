// let sum = 0
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     while (n > 0) {
//         if(n<=99){
//         let eded = n % 10;
//         sum = sum + eded;
//         n = parseInt(n / 10)
//         }else{
//             break
//         }

//     }
//     console.log(sum);
// });



// let largest = 0
// let b = 0
// let c = 0
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     while (n > 0) {
//         if (n < 999) {
//             let eded = n % 10;
//             if (largest < eded) {
//                 largest = eded;
//             }else if (eded < largest){
//                 b = eded ;
//             }else if (b>eded){
//                 c = eded;

//             }
//         n = parseInt(n / 10)
//         }

//     }
    
    



// });






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



// Task4
// let i = 0
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     while(n>i){
//         if(n % i==0 && i%2==1){
//             console.log(i);
//         }
//         i++;
//     }
// });


// let sum = 0

// const { Ask } = require('asfk');

// Ask(["", ""]).then(([a, b]) => {

//     while (a <= b) {
//         if ((a % 2 == 1) || (-a % 2 == 1)) {
//             (sum = sum - -(a));


//         }
//         a++

//     }
//     console.log(sum);

// }
// );











// Task 1:
// const { Ask } = require('asfk');
// Ask([""]).then(([eded]) => {
//     eded = parseInt(eded)
//     let teklik = eded % 10;
//     let onluq = parseInt(eded / 10);
//     let cem = teklik + onluq;
//     console.log(cem);
// });






// Task 2:
// const { Ask } = require('asfk');
// Ask([""]).then(([eded]) => {
//     eded = parseInt(eded);
//     let a = parseInt(eded / 100);
//     let b = parseInt(eded / 10) % 10;
//     let c = eded % 10;
//     let abc = eded;
//     let acb = a * 100 + c * 10 + b;
//     let bac = b * 100 + a * 10 + c;
//     let bca = b * 100 + c * 10 + a;
//     let cab = c * 100 + a * 10 + b;
//     let cba = c * 100 + b * 10 + a;
//     if (abc > acb && abc > bac && abc > bca && abc > cab && abc > cba) console.log(abc**2);
//     else if (acb > bac && acb > bca && acb > cab && acb > cba) console.log(acb**2);
//     else if (bac > bca && bac > cab && bac > cba) console.log(bac**2);
//     else if (bca > cab && bca > cba) console.log(bca**2);
//     else if (cab > cba) console.log(cab**2);
//     else console.log(cba**2);
// });








// Task 3:
// Yalnız 5 rəqəmli ədəd üçün həll:

// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     a = parseInt(n / 10000);
//     b = parseInt(n / 1000) % 10;
//     c = parseInt(n / 100) % 10;
//     d = parseInt(n / 10) % 10;
//     e = n % 10;
//     if (a == b || a == c || a == d || a == e || b == c || b == d || b == e || c == d || c == e || d == e) console.log("YES");
//     else console.log("NO");
// });
// n rəqəmli ədəd üçün həll:

// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = parseInt(n);
//     let result = false;
//     while (n > 0) {
//         let temp = parseInt(n / 10);
//         let sonReqem = n % 10;
//         while (temp > 0) {
//             if (sonReqem == temp % 10) {
//                 result = true;
//                 break;
//             };
//             temp = parseInt(temp / 10);
//         };
//         if (result) break;
//         n = parseInt(n / 10);
//     };
//     if (result) console.log('YES');
//     else console.log('NO');
// });







// Task 4:
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     for (let i = 1; i <= n; i++) {
//         if (n % i == 0 && i % 2 == 1) {
//             console.log(i);
//         }
//     }
// });








// Task 5:
// const { Ask } = require('asfk');
// Ask(["", ""]).then(([a, b]) => {
//     a = parseInt(a);
//     b = parseInt(b);
//     let cem = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % 2 != 0) {
//             cem += i;
//         };
//     };
//     console.log(cem);
// });