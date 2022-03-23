// Task1
// Elementlərin cəmi
// n sayda həqiqi ədədlər ardıcıllığı verilir.Bütün elementlərin cəmini tapın.

// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);


//     let cem = 0
//     for (let i = 0; i < arr.length; i++) {
//         cem += arr[i]

//     }
//     console.log(cem);
// });

// Input example
// 5

// 1.2 1.3 5.7 1.8 12.4
// Output example
// 22.4








// Task2
//Massivin ən boyük elementi
// n sayda tam ədəddən ibarət massiv verilir. Bu massivdəki ən böyük elementi tapın.
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let larg = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (larg < arr[i]) {
//             larg = arr[i]
//         }
//     }
//     console.log(larg);

// })
// Input example
// 5

// 5 9 3 4 6
// Output example
// 9







// Task3
// 2 vahid artırma
// Tam ədədlər ardıcıllığı verilir. Ardıcıllığın hər bir mənfi olmayan elementini 2 vahid artırmalı.
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(' ').map(Number);
//     let arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0) arr1.push(arr[i] + 2);
//         else arr1.push(arr[i]);
//     };
//     console.log(...arr1);
// });
// Input example
// 4

// 1 2 3 -4
// Output example
// 3 4 5 -4












// --------------- task 4 ------------------
// Küləkli hava
// Pyataçok çəmənlikdə uzanaraq xışıldayan otları seyr edirdi. O başa düşdü ki, otlar 
// ona görə xışıldayırlar ki, çünkü külək əsir və o otlara görə küləyin gücünü necə ölçmək 
// lazım gəldiyini düşündü. Küləyin gücü,
//  Pyataçoka görə hazırda ən yüksək və ən alcaq otların hündürlüklərinin fərqi kimi başa düşülür.

// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);


//     let larg = arr[0]
//     var minvalue = arr[0];
//     for (let i = 0; i < n; i++) {
//         if (larg < arr[i]) {
//             larg = arr[i]
//         } else if (arr[i] < minvalue) {
//             minvalue = arr[i];
//         }

//     }
//     console.log(larg - minvalue);
// })

// Input example
// 14

// 3 6 5 3 5 5 4 5 4 3 2 3 6 4
// Output example
// 4

// ----------------- Task 5 -------------------
// Elementləri sürüşdür
// Tam ədədlərdən ibarət n
//  uzunluqlu massiv verilmişdir. Massivin elementlərini 1 addım dövrü olaraq sağa sürüşdürün.


// const { Ask } = require('asfk');[]
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let a = [arr[n - 1]];
//     for (let i = 0; i < n - 1; i++) {
//         a.push(arr[i]);
//     }
//     console.log(...a);
// })


// Input example
// 4

// 1 2 3 4
// Output example
// 4 1 2 3

//     / ----------------- Task 6-------------------
// Qarpızlar
// İvan Vasilyeviç bazara gedib iki qarpız almaq istədi: birini özünə, birini də
//  qaynanası üçün. Aydın məsələdir ki, özünə daha ağır, qaynanası üçün isə yüngül qarpız
//   seçməliydi. Lakin məsələ bundadır ki, qarpızlar
// çoxdur və onlardan ən yüngülü ilə ən ağırını o necə seçsin? Ona kömək edin!

// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n)
//     arr = arr.split(" ").map(Number)
//     let larg = arr[0]
//     let minvalue = arr[0]
//     for (let i = 0; i < n; i++) {
//         if (arr[i] > larg) {
//             larg = arr[i]
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         if (arr[i] < minvalue) {
//             minvalue = arr[i]
//         }
//     }

//     if (n > 1) {
//         console.log(minvalue, larg);
//     }
//     else
//         console.log("Ooops!");
// });

// Input example
// 5
// 5 1 6 5 9
// Output example
// 1 9

// Input example 2
// 1
// 5
// Output example 2
// Ooops!


// ------------------TASK 7 ---------------------
// Tək elementlər
// n sayda tam ədədlər ardıcıllığı verilir. Onun bütün tək elementlərini verməli.
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let arr1 = [];

//     for (let i = 0; i < n; i++) {
//         if (arr[i] % 2 != 0) {
//             arr1.push(arr[i])
//         }

//     }
//     console.log(...arr1);
// })
// Input example
// 7

// 14 17 16 3 7 19 9
// Output example
// 17 3 7 19 9
// ------------------Task 8 ----------------------
// Ən böyük elementlərin sayı
// n sayda tam ədəddən ibarət massiv verilmişdir. Massivin ən böyük elementlərinin sayını tapın.

// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let larg = arr[0]
//     let sayi = 0

//     for (let i = 0; i < n; i++) {
//         if (larg < arr[i]) {
//             larg = arr[i]

//         } else if (arr[i] == larg) {
//             sayi = sayi + 1

//         }
//     }
//     console.log(sayi);
// })
// Input example
// 5

// 1 6 2 6 2
// Output example
// 2

// ------------Task 9 --------------
// Ən böyük olmadan cəm
// n sayda tam ədəddən ibarət massiv verilmişdir. Massivin ən böyük qiymətinə
// bərabər olmayan bütün elementlərinin cəmini hesablayın.
// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let larg = arr[0]
//     let sayi = 0
//     let cem = 0
//     for (let i = 0; i < n; i++) {
//         if (larg < arr[i]) {
//             larg = arr[i]

//         } else if (arr[i] == larg) {
//             sayi = sayi + 1


//         }
//         cem = cem + arr[i]
//     }
//     sayi = sayi * larg

//     console.log(cem - sayi);
// })
// Input example
// 6

//  5 9 3 4 6 9
// Output example
// 18


// --------------- Task 10--------------
// İki ən böyük
// n sayda tam ədədlərdən ibarət massiv verilir.
//  Massivin iki ən böyük elementinin cəmini tapın.

// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);
//     let larg = 0;
//     let second = 0;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] > larg) {
//             second = larg;
//             larg = arr[i];
//         } else if (arr[i] > second) {
//             second = arr[i];
//         }
//     }
//     console.log(larg + second);

// })
// Input example
// 5

// 1 5 2 6 3
// Output example
// 11
