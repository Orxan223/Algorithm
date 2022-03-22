
// Şagirdin dərs nailiyyətlərinin səviyyəsini (ilkin, orta, kafi, yüksək) verilmiş
//  qiymətlərə (1-dən 12-dək) uyğun olaraq müəyyənləşdirin.


// const { Ask } = require("asfk");

// Ask([""]).then(([a]) => {
//   a = parseInt(a);
//   // 1,2,3ii
//   if (a >= 1 && a <= 3) {
      
//     console.log("Initial");
//   } else if (a >= 4 && a <= 6) {
//     console.log("Average");
//   } else if (a >= 7 && a <= 9) {
//     console.log("Sufficient");
//   } else {
//     console.log("High");
//   }
// });
// Input example
// 12
// Output example
// High





////Verilmiş üçrəqəmli ədədi rəqəmlərinə ayırın.

// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     a = parseInt(a);
//     if (a < 0) {
//         a = -a
//     };

//     let ilk = parseInt(a / 100);
//     console.log(ilk);
//     let iki = parseInt(a / 10 % 10);
//     console.log(iki);
//     let son = a % 10;
//     console.log(son);
// });
// Input example
// 198
// Output example
// 1
// 9
// 8



//İki natural ədədin minimumunu və maksimumunu tapın.


// const { Ask } = require('asfk');

// Ask(["",""]).then(([a,b]) => {
//     if (a>b){
//         console.log(b,a);
//     }else
//     console.log(a,b)

// });

// Input example 1
// 4 2
// Output example 1
// 2 4
// Input example 2
// 10 100
// Output example 2
// 100 10




//n və m nömrəli binaların küçənin eyni tərəfində yerləşdiklərini təyin edin.

// const { Ask } = require('asfk');
// Ask(["", ""]).then(([a, b]) => {
//     a = parseInt(a);
//     b = parseInt(b);

//     if ((a % 2 == 0 && b % 2 == 0) || (a % 2 == 1 && b % 2 == 1)) {
//         console.log(1);
//     } else {
//         console.log(0);
//     }
// });
// Input example
// 1 2
// Output example
// 0



//n tam ədədi verilir. Onun müsbət, mənfi və ya 0-a bərabər olmasını müəyyənləşdirin.


// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     if (a>0){
//         console.log('pozitiv');
//     }else if(a<0){
//         console.log('negativ');
//     }
//     else if(a==0)
//     console.log('zero');
// });

// Input example 1
// 45
// Output example 1
// Positive
// Input example 2
// 0
// Output example 2
// Zero
// Input example 3
// -12
// Output example 4
// Negative


//n natural ədədi verilmişdir. Onun cüt və ya tək olmasını yoxlayın.


// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     if (a%2==0){
//         console.log('cut');
//     }else if(a%2==1){
//         console.log('tek');
//     }

// });
// Input example 1
// 3
// Output example 1
// ODD
// Input example 2
// 100
// Output example 2
// EVEN


//n natural ədədi verilmişdir. O həm a-ya, həm də b-yə bölünürmü?


// const { Ask } = require('asfk');

// Ask(["","",""]).then(([n,a,b]) => {
//     if ((n%a==0) && (n%b==0)){
//         console.log('yes');
//     }
//     else if ((n%a==0) && (n%b==0)){
//         console.log('yes');
//     } 
//     else{
//         console.log('no');
//     }

// });
// Input example 1
// 12 4 6
// Output example 1
// Yes
// Input example 2
// 10 5 6
// Output example 2
// No