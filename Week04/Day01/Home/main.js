// let largest = 0;

// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 0) {
//         let eded = a % 10;
//         if (largest < eded){
//             largest = eded;

//         }

//         a = parseInt(a / 10);

//     }
//     console.log(largest);

// }
// );


// let largest = 0;
// let tekrar = 1

// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 0) {
//         let eded = a % 10;
//         if (largest < eded) { 
//             largest = eded; 

//         } else if(eded==largest){
//             tekrar=tekrar+1;

//         }
//         a = parseInt(a / 10); 

//     }
//     console.log(largest);
//     console.log(tekrar);

// }
// );



// let tek = 0;

// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 0) {
//         let eded = a % 10;
//         if (eded % 2 == 1) {
//             tek = tek + 1;

//         }
//         a = parseInt(a / 10)
//     }
//     console.log(tek);

// }
// );


// let tek = 0;
// let cut = 0;

// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 0) {
//         let eded = a % 10;
//         if (eded % 2 == 0) {
//             cut = eded + 1;

//         }else{
//             tek = eded - 1;
//         }
//         a = parseInt(a / 10)
//     }
//     console.log(cut,tek);

// }
// );



// let tek = 1;

// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 0) {
//         let eded = a % 10;
//         if (eded % 2 == 1) {
//             tek = tek * eded;

//         }

//         a = parseInt(a / 10)
//     }
//     console.log(tek);

// }
// );


// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     while (n > 0) {
//         console.log(n % 10);
//         n = parseInt(n / 10)

//     }
// });





// const { Ask } = require('asfk');

// Ask(["",""]).then(([a,b]) => {
//     while (a <= b ) {     
//         if(b%2==0){
//             console.log(b);
//         }
//         b--;
//     }   
// }
// );



// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     for (i = 0; i < a; i++)
//         console.log("#");


// }
// );



// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => {
//     n = parseInt(n);

//     for(let i = 1; i<n;i++){
//         let quvvet = Math.pow(i, 3);
//         if (quvvet < n) {
//             console.log(quvvet);
//         }else{
//             break;
//         }
//     }
// });





// let i = 1;
// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a >= i) {
//         console.log(i**2);
//         i = i + 1;    
//     }
    
// }
// );