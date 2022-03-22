//n natural ədədinin ən böyük rəqəmini tapın.

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
// Input example 1
// 2354
// Output example 1
// 5
// Input example 2
// 609432232423423
// Output example 2
// 9








// n natural ədədində onun ən böyük rəqəmi neçə dəfə rast gəlir?

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

//Input example 1
// 2354
// Output example 1
// 1






// n natural ədədinin tək rəqəmlərinin sayını tapın.


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

// Input example 1
// 2354
// Output example 1
// 2
// Input example 2
// 606432232464677
// Output example 2
// 4








// Positive integer n is given. Increase by 1 all its even digits and decrease by 1 all its odd digits.


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
// Input example 1
// 30
// Output example 1
// 21











// Natural n ədədinin tək rəqəmlərinin hasilini tapın.



// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
    // let tek = 1;

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
// Input example 1
// 327
// Output example 1
// 21










// Verilmiş natural n ədədinin bütün rəqəmlərini kiçik mərtəbədən başlayaraq çap edin.


// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     while (n > 0) {
//         console.log(n % 10);
//         n = parseInt(n / 10)

//     }
// });
// Input example 1
// 123
// Output example 1
// 3

// 2

// 1



// İntervalda Cüt Ədədlər
// Proqramın girişində aralarında boşluq olmaqla a və b tam ədədləri verilir.
//  [a, b] intervalına daxil olan bütün cüt ədədləri bir sətirdə azalan sıra ilə çıxışa vermək lazımdır.
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
// Input example 1
// 2 7
// Output example 1
// 6 4 2









// n natural ədədi verilmişdir. n sayda'#' simvolunu göstərildiyi kimi çap edin.


// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     for (i = 0; i < a; i++)
//         console.log("#");


// }
// );
// Input example 1
// 7
// Output example 1
// #######






// Print in increasing order all perfect cubes of positive integers, less than n.

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
// Input example 1
// 9
// Output example 1
// 1 8



// Positive integer n is given. Print in increasing order first n squares of positive integers.


// let i = 1;
// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a >= i) {
//         console.log(i**2);
//         i = i + 1;    
//     }
    
// }
// );
// Input example 1
// 3
// Output example 1
// 1 4 9







// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let larg = 0;
//     let second = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > larg) {
//             second = larg;
//             larg = arr[i];
//         } else if (arr[i] > second) {
//             second = arr[i];
//         }
//     }
//     console.log(larg + second);

// })