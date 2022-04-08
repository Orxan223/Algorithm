// By the vowel letters in the Latin alphabet are the letters A, E, I, O and U.
//  The remaining letters are consonants. Write a program counting the number of vowels in the text.
//     const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     let c = 0
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] == "A" || a[i] == "E" || a[i] == "I" || a[i] == "O"|| a[i] == "U"   ) {
//             c++
//         }

//     }
//     console.log(c);
// });
// Input example 1
// PROGRAMMING CONTEST
// Output example 1
// 5



// Bərabər bölənlər
// m natural ədədi n ədədinin o zaman bərabər böləni adlanır ki, n-nin m-ə bölünməsindən alınan tam və qalıq bərabər olsun. 
// erilmiş n natural ədədinə görə onun bərabər bölənlərinin sayını tapın.
// const { Ask } = require('asfk');

// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     let count = 0
//     for (let i = 1; i < n; i++) {
//         let a = n % i
//         let b = parseInt(n/i)
//         if(a==b){
//             count++
//         }
//     }
//     console.log(count)

// })
// Input example 1
// 20
// Output example 1
// 2


// Çevrilmə
// Hər hansı bir natural n ədədini götürək. Onu növbəti şəkildə dəyişdirəcəyik: 
// Əgər ədəd cütdürsə, onda onu 2-ə bölək, əgər təkdirsə ona 1 əlavə edək. 
// Bir neçə belə dəyişmədən sonra həmişə 1 alacağıq. Məsələn, 11 ədədindən 12
//  ədədi alınır, sonra 6, 3, 4, 2 və sonda 1. Beləliklə, 11-dən 1 almaq üçün 6 
// dəyişiklik etmək lazımdır.


// const { Ask } = require('asfk');
// Ask([""]).then(([n]) => {
//     n = parseInt(n)
//     let count = 0
//     while(n>1){
//         if(n%2==0){
//             n = n/2
//         }else{
//             n++
//         }
//         count++
//     }
//     console.log(count)

// })
// Input example 1
// 11
// Output example 1
// 6


// Verilmiş natural ədədə görə 1 alınana qədər onun dəyişmələrinin sayını tapın.
// Natural ədədin onluq yazılışında rəqəmləri eyni olan və
//  bu ədədin onluq yazılışının mərkəzinə nəzərən 
//  simmetrik yerləşən cütlüklərin sayını həmin ədədin 
//  simmetriya dərəcəsi adlandıracağıq. Əgər ədəddə hər hansı 
//  rəqəm onluq yazılışda ortada yerləşirsə, onu da özü ilə bir
//   cütlük kimi saymaq lazımdır. n ədədinin simmetriya dərəcəsini tapın.

// const { Ask } = require('asfk');
// Ask([""]).then(([str]) => {
//     str = str.split("")

//     let count = 0
//     let c = str.length -1
//     let i = 0
//     while(i<=c){
//         if(str[i]==str[c]){
//             count++
//         }
//         i++
//         c--
//     }
//     console.log(count)

// })
// Input example 1
// 123322
// Output example 1
// 2


// Final turuna keçənlər
// Olimpiadanın yarımfinal turuna xoş gəlmisiniz! Olimpiadanın təşkilatçıları düşünür ki,
//  bu turu müvəffəqiyyətlə keçmək üçün hər bir şagirdin qiymət ortalaması ən azı 3.5 və eyni 
//  zamanda informatika fənnindən qiyməti A və ya B olmalıdır. Lakin təşkilatçılar yanıla bilər,
//   çünki siz hələ bu məsələni həll etməmisiniz. Məsələni həll edərək,
//  hər bir şagirdin final turuna keçib-keçmədiyini müəyyən edən proqram yazın.

// const { Ask } = require('asfk');
// Ask(["", ""]).then(([n, string]) => {
///     n = parseInt(n)
//     string = string.split(" ")
//     let list = []
//     for (let i = 0; i < n; i++) {
//         if (string[0] >= 3.5 && (string[1] == "A" || string[1] == "B")) {
//             list.push('1')
//         } else {
//             list.push('0')
//         }
//         string.splice(0, 2)
//     }
//     console.log(list.join(" "))
// })


// 2
// 3.7 C
// 4.0 B

// Input example 1
// 2
// 3.7 C
// 4.0 B
// Output example 1
// 0
// 1
// Input example 2
// 3
// 3.5 B
// 3.6 C
// 2.5 A
// Output example 2
// 1
// 0
// 0