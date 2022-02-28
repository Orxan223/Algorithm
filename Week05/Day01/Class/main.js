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



// const { Ask } = require('asfk');

// Ask(["", ""]).then(([n, arr]) => {
//     n = parseInt(n);
//     arr = arr.split(" ").map(Number);


//     let larg = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(larg<arr[i]){
//             larg=arr[i]
//         }  

//     }
//     console.log(larg);

// })




const { Ask } = require('asfk');

Ask(["", ""]).then(([n, arr]) => {
    n = parseInt(n);
    arr = arr.split(' ').map(Number);
    let arr1 = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 0) arr1.push(arr[i] + 2);
        else arr1.push(arr[i]);
    };
    console.log(...arr1);
});

//.task 4
// boyuk - kicik = netice


