// const { Ask } = require('asfk');

// Ask(["",""]).then(([a,b]) => {
//     let cem = b + a 
//         console.log(cem);


// });

// const { Ask } = require('asfk');

// Ask(["","","",""]).then(([a,b,c,d]) => {
//     if ((a % 2 ==0) && (b % 2 ==0) && (c % 2 ==0) && (d % 2 ==0)){
//         console.log('Yes');
//     }else{
//         console.log('no');
//     }

// });


// const { Ask } = require('asfk');

// Ask(["","","",""]).then(([a,b,c,d]) => {

//     if ((a==3 && b==7) || (b==3 && c == 7) || (c==3 && d ==7)){
//         console.log('Yes');
//     }else{
//         console.log('no');
//     }

// });


// const { Ask } = require('asfk');

// Ask(["","","",""]).then(([a,b,c,d]) => {

//     if ((a%2==1) || (b%2==1)||(c%2==1)||(d%2==1)){
//         console.log('Yes');
//     }else{
//         console.log('no');
//     }

// });



// const { Ask } = require('asfk');

// Ask([""]).then(([e]) => {
//     let a = parseInt(e/1000)
//     let b = parseInt(e/100%10)
//     let c = parseInt(e/10%10)
//     let d= parseInt(e/10)
//     if ((a==c)||(b==d)||(b==c)||(a==b)){
//         console.log('Yes');
//     }else{
//         console.log('no');
//     }

// });


const { Ask } = require('asfk');

Ask(["","",""]).then(([r,w,l]) => {

    if (((2*r)**2)  >= (w**2 + l**2)){
        console.log('Yes');
    }else{
        console.log('no');
    }

});