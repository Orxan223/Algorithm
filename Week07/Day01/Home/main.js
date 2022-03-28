// let arr = [30,15,45]
// console.log(Math.min(...arr));

//Task2
// Birinci, yoxsa axırıncı?
// Üçrəqəmli ədəd verilmişdir. Onun rəqəmlərindən hansının - birincinin, 
// yoxsa axırıncının böyük olduğunu müəyyənləşdirin.
// const { Ask } = require("asfk");
// Ask([""]).then(([s]) => {
//     let arr = s.split('').map(Number);
//     console.log(Math.max(arr[0], arr[arr.length - 1]));
// });

// Input example 1
// 328
// Output example 1
// 8
// Input example 2
// 832
// Output example 2
// 8




//Task3
// Qiymətlər
// Pənah məktəbdə yalnız iki və beş qiymətlər alır. Hansı qiymətin daha çox olduğunu təyin edin.
// const { Ask } = require('asfk');
// Ask([""]).then(([arr]) => {
//     let b = 0
//     let w = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 5) {
//             b += 1

//         } else if (arr[i] == 2) {
//             w += 1
//         }
//     }
//     if (b>w) {
//         console.log(5);
//     }else if(b<w){
//         console.log(2);
//     }else{
//         console.log('=');
//     }

// Input example 1
// 255222
// Output example 1
// 2
// Input example 2
// 555522
// Output example 2
// 5
// Input example 3
// 525522
// Output example 3
// =
// })
// 



//TASK4
// Cümlələrin sayı
// Verilmiş mətn fraqmentində cümlələrin sayını müəyyənləşdirin.
// const { Ask } = require('asfk');
// Ask([""]).then(([a]) => {
//     a = a.split(" ")
//     let count = 0
//     for (let i = 0; i < a.length; i++) {
//         if (a[i][0] == a[i][0].toUpperCase()) {
//             count++
//         }
//     }
//     console.log(count);
// });
// Input example 1
// Hello world!
// Output example 1
// 1
// Input example 2
// Hi!!!
// Output example 2
// 1





// //TASK5
// Əməllərin sayı
// Verilmiş hesabi ifadədə toplama (+), çıxma (-) və vurma (*) əməllərinin ümumi sayını müəyyənləşdirin.
// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     let c = 0
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] == "-" || a[i] == "+" || a[i] == "*") {
//             c++
//         }

//     }
//     console.log(c);
// });
// Input example 1
// -1+2*3+a
// Output example 1
// 3
// Input example 2
// +5-2+4-m/n*2:4
// Output example 2
// 4



//TASK6
// Sözlərin sayı
// Verilmiş mətn fraqmentində sözlərin sayını müəyyənləşdirin.
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = n.split(" ")
//     let a = []
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] != "") {
//             a.push(n[i])
//         }
//     }
//     console.log(a.length);
// });
// Input example 1
// Hello world!
// Output example 1
// 2
// Input example 2
//  Hello world! Hello,    country!
// Output example 2
// 4





//TASK7
// Sleeping cars
// A train contains sleeping cars, marked with letter k, and sitting cars, marked with letter p. 
// Find the biggest number of sleeping cars that follow each other in the train.


// const { Ask } = require('asfk');
// Ask([""]).then(([a]) => {
//     let b = 0
//     let c = 0
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == 'k') {
//             c++
//         }
//         else {
//             c = 0
//         }
//         if (c > b) {
//             b = c
//         }
//     }
//     console.log(b);
// });

// Input example 1
// kpkkp
// Output example 1
// 2




//TaSk7 another way

// const { Ask } = require('asfk');
// Ask([""]).then(([str]) => {
//     str = str.split("p")
//     let max = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].length > max) {
//             max = str[i].length
//         }
//     }
//     console.log(max);
//. });


// //TASK8
// Baş hərfli sözlər sətri
// Mətnlərin emalına aid sadə məsələlərdən biri sətirdəki hər bir sözün birinci 
// hərfini baş hərfə çevirməkdir. Bir və ya bir neçə boşluqla ayrılmış kiçik hərflərdən ibarət sətir 
// verilmişdir. Eyni sətri, hər sözün birinci hərfini baş hərfə çevirərək çap edin.
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     let arr = n.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);

//     }
//     console.log(...arr);
// })
// Input example 1
// introduction to algorithms
// Output example 1
// Introduction To Algorithms


// //TASK9
// Hərfləri saymalı
// s sətri və c hərfi verilmişdir. Bu hərfə sətirdə neçə dəfə rast gəlinir?
// const { Ask } = require("asfk");
// Ask(["", ""]).then(([arr, n]) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].toUpperCase() == n.toUpperCase()) {
//             count++;
//         }
//     }
//     console.log(count);
// })
// Input example 1
// Programming Principles 1
// p
// Output example 1
// 3
// Input example 2
// This is a cat sitting on a table
// t
// Output example 2
// 5



//TASK 10,11
// Boşluqların indeksləri
// Verilmiş sətirdə birinci və sonuncu boşluq işarəsinin
//  indekslərini çap edin. Nəzərə alın ki, sətrin ilk simvolunun indeksi 0-dan başlayır.
// const { Ask } = require("asfk");
// Ask([""]).then(([n]) => {
//     index = 0,
//         res = [];
//     let arr = n.split("");
//     while ((index = n.indexOf(' ', index + 1)) > 0) {
//         res.push(index)

//     }

//     console.log(res[0], res[res.length - 1]);
// })
// Input example 1
// I am programming on Python.
// Output example 1
// 1 19
// Input example 2
// abrakadabra
// Output example 2
// -1




//TASK 10 ,11
// const { Ask } = require('asfk');
// Ask([""]).then(([str]) => {
//     const a = str.indexOf(" ")
//     let b = -1//doesnt matter
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == " ") {
//             b = i
//         }
//     }
//     if (a == -1) {
//         console.log(-1);
//     }
//     else {
//         console.log(a, b);
//     }
// });