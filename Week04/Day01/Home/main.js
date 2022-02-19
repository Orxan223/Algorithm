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


// let largest = 0;
// let kicik = 0;
// let orta = 0;

// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 0) {
//         let eded = a % 10;
//         if (largest < eded) {
//             largest = eded;

//         } else if (orta < eded) {
//             orta = eded;
//         } else if (kicik < eded) {
//             kicik = eded;
//         }
//         a = parseInt(a / 10);

//     }

//     console.log(largest);
//     console.log(orta)
//     console.log(kicik)

// }
// );






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
//     for (i = 0; i < a; a--)
//         console.log("#");


// }
// );



// let i = 0;
// let q = 1;
// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 0) {
//         if (a == i * i * i + q * q * q) {
            

//         }else{
//             i = i + 1;
//             q = q + 1;
//             console.log(i*i*i,q*q*q);
//         }

//     }

// }
// );



// let i = 1;
// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 0) {
//         if (a>=i) {
//             console.log(i**2);
//             i = i + 1;
            

//         }
        
//     }
// }
// );