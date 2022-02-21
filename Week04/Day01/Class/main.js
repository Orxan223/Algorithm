// let a = 321;
// let cem = 0;

// while(a>0){
//     let sonReqem = a % 10;
//     cem +=sonReqem;
//     a = parseInt(a/10);
// }

// console.log(cem);


// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 99) {
//         a = parseInt(a / 10);
//     }

//     console.log(a%10);
// });


const { Ask } = require('asfk');

Ask([""]).then(([a]) => {
    while (a > 0) {
        a = parseInt(a / 10);
    }
    let b = a % 10;
    console.log(a + b);

});
