//Ədədin rəqəmlərinin cəmi
// Tam ədədin rəqəmlərinin cəmini tapın.
// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => { 
//     sum = 0

//     while (n>=1) {

//         let x=n%10
//         n=parseInt(n/10)
//         sum+=x
//     }
//     console.log(sum);
// });
// Input example
// 321
// Output example
//. 6




// Ədədin ikinci rəqəmi
// Tam ədədin ikinci rəqəmini tapmalı. Sayma yüksək mərtəbədən başlayır.
// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => { 

//     while (n>=10) {

//         var x = n%10
//         n=parseInt(n/10)
//     }
//     console.log(x);

// });
// Input example
// 43568
// Output example
// 3









// Ədədin birinci və sonuncu rəqəmlərinin cəmi
// Tam ədədin birinci və sonuncu rəqəmlərinin cəmini tapın.
// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => { 
//     y =n%10
//     while (n>=1) {

//         var x = n%10
//         n=parseInt(n/10)
//     }
//     console.log(x+y);

// });
// Input example
// 2345
// Output example
// 7






// Rəqəmlər
// Mənfi olmayan tam n ədədinin rəqəmlərinin sayını hesablayın.
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => { 
//     i = 0

//     while (n>=1) {

//         let x=n%10
//         n=parseInt(n/10)
//         i++
//     }
//     console.log(i);

// });
// Input example 1
// 12343
// Output example 1
// 5
// Input example 2
// 985454
// Output example 2
// 6





// Neçə dəfə olar?
// n natural ədədi verilmişdir. Həmin ədəddən öz rəqəmlərinin cəmini çıxaq.
//  Alınan ədəddən də yenə öz rəqəmlərinin cəmini çıxaq və s. Bu prosesi nə qədər ki, 
// alınan ədəd müsbətdir davam etdirəcəyik. Verilmiş əməliyyatı neçə dəfə icra edəcəyik?
// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => { //21
//     i = 0
//     while (n > 0) {
//         n1 = n;
//         sum = 0
//         while (n1 > 0) {
//             x = n1 % 10
//             sum += x
//             n1 = parseInt(n1 / 10)
//         }
//         n -= sum
//         i++
//     }
//     console.log(i);
// });
// Input example
// 21
// Output example
// 3






// Ardıcıl sayın
// Yay kompüter məktəblərinin birində nümayişdə n sayda məktəbli iştirak edir.
//  Məktəblilərdən birinin əmri ilə hamısı cərgəyə düzülürlər, sonra isə saymağa başlayırlar. 
//  Birinci məktəbli "birinci", 
// ikincisi "ikinci" deyir və s. Sizdən ssenarinin bu hissəsini yazmaq tələb olunur.
// const { Ask } = require('asfk');

// Ask([""]).then(([n]) => {
//     i = 1
//     while (n > 0) {
//         n--
//         console.log(i);
//         i++

//     }
// });
// Input example 1
// 1
// Output example 1
// 1
// Input example 2
// 4
// Output example 2
// 1 2 3 4





// 11-ə bölünmə əlaməti
// 11-ə bölünmə əlaməti çox zaman növbəti şəkildə formalaşdırılır: 
// ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. 
// Əgər cəmlərin hasili 11-ə bölünürsə, deməli bu ədəd 11-ə bölünür. Bu cəmlərin hasilini tapın.

// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => { 
//     x = 0 //part1
//     y = 0 //part2
//     while (n > 0) {
//         x1 = n % 10
//         y1 = parseInt(n / 10) % 10
//         x += x1
//         y += y1
//         n = parseInt(n / 100)

//     }
//     console.log(x * y);
// });


// Input example 1
// 27
// Output example 1
// 14
// Input example 2
// 2821
// Output example 2
// 36
// Input example 3
// 10001
// Output example 3
// 0






// Bütün təklər
// Natural n ədədi verilmişdir. n-dən kiçik olan bütün natural tək ədədləri artma ardıcıllığında 
// çap edin.
// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     i = 1
//     while (i < n) {
//         if (i % 2 != 0) {
//             console.log(i);
//             i++
//         }
//         else
//             i++
//         continue

//     }
// });

// Input example 1
// 8
// Output example 1
// 1 3 5 7






