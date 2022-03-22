// -----------1-----------
//İntervalın daxilində
// x-in [a; b] intervalına daxil olduğunu təyin edin. x ədədi o zaman [a; b] intervalına 
// daxildir ki, a ≤ x ≤ b olsun.

// const { Ask } = require("asfk");

// Ask(["", "", ""]).then(([a, x, c]) => {
//   if (a <= x && x <= c) {
//     console.log("yes");
//   } else {
//     console.log("NO");
//   }
// });
// Input example 1
// 4 2 6
// Output example 1
// YES
// Input example 2
// 5 10 15
// Output example 2
// NO



// ------------2-----------------
// Tam n ədədi verilmişdir. n ədədindən əvvəlki tək ədədi çap edin.


// const { Ask } = require("asfk");

// Ask([""]).then(([a]) => {
//   if ((a % 2 == 0)) {
//     console.log(a-1);
//   } else if(((a % 2 == 1 )) ){
//     console.log(a-2);
//   }
// });
// Input example 1
// 7
// Output example 1
// 5
// Input example 2
// 6
// Output example 2
// 5




// ------------3---------------
//a və b natural ədədləri verilmişdir. a-nın b-yə bölünməsini yoxlayın.


// const { Ask } = require("asfk");

// Ask(["", ""]).then(([a, b]) => {
//   a = parseInt(a);
//   b = parseInt(b);
//   c = parseInt(c= (a / b));
//   d = parseInt(d= (a % b));

//   if (c && d) {
//     console.log(c,d);
//   } else {
//     console.log("Divisible");
//   }
// });
// Input example 1
// 12 5
// Output example 1
// 2 2
// Input example 2
// 15 3
// Output example 2
// Divisible







// ---------4---------------

//Əvvəlki cüt ədəd
// Tam n ədədi verilmişdir. n ədədindən əvvəlki cüt ədədi çap edin.
// const { Ask } = require("asfk");

// Ask([""]).then(([a]) => {
//   if ((a % 2 == 0)) {
//     console.log(a-2);
//   } else if(((a % 2 == 1 )) ){
//     console.log(a-1);
//   }
// });
// Input example 1
// 7
// Output example 1
// 6
// Input example 2
// 6
// Output example 2
// 4


// --------------5--------------
// İlin fəsilləri
// Mürəkkəb şərtdən istifadə edərək verilmiş ayın nömrəsinə görə ilin fəslini müəyyənləşdirin.
// const { Ask } = require("asfk");

// Ask([""]).then(([a]) => {
//   a = parseInt(a);
//   if (a >= 3 && a <= 5) {
//     console.log("Spring");
//   } else if (a > 5 && a <= 8) {
//     console.log("Summer");
//   } else if (a > 8 && a <= 11) {
//     console.log("Autumn ");
//   } else if (a > 11 || a > 0) {
//     console.log("Winter");
//   }
// });
// Input example 1
// 5
// Output example 1
// Spring



// --------------6-----------
//Su və buz
// Vedrəni su ilə doldurub küçəyə qoydular. Küçədə havanın temperaturu t dərəcədir. 
// Əgər t müsbətdirsə - "Water", əks halda - "Ice" çap edin.


// const { Ask } = require("asfk");

// Ask([""]).then(([a]) => {
//   if (a > 0) {
//     console.log("Water");
//   } else {
//     console.log("Ice");
//   }
// });
// Input example 1
// 3
// Output example 1
// Water
// Input example 2
// -6
// Output example 2
// Ice


// ------------------7---------------
//Dördrəqəmli polindrom
// Dördrəqəmli natural ədəd verilmişdir. Onun palindrom olmasını təyin edin.
//  Natural ədəd soldan sağa və sağdan sola eyni oxunarsa,
//  palundromdur. Məsələn, 2332 ədədi palindromdur.
// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     a=parseInt(a)
//     let r = parseInt(a/1000)
//     let b = parseInt(a/100%10)
//     let c = parseInt(a/10%10)
//     let d= parseInt(a%10)
//     if(r=d && b==c){
//         console.log("yes");

//     }
//     else{
//         console.log("no");
//     }
    
// });
// Input example 1
// 2332
// Output example 1
// YES
// Input example 2
// 5446
// Output example 2
// NO


