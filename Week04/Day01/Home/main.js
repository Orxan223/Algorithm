let largest = 0;

const { Ask } = require('asfk');

Ask([""]).then(([a]) => {
    while (a > 9) {
        a = parseInt(a / 10);
        if (a > largest) {
            console.log(a)
        }
    }
}
);



// let tek = 0;

// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 9) {
//         a = parseInt(a / 10) ;
//         if (a % 2 == 1) {
//             tek++;
//             console.log(tek);
//         }
//     }
// }
// );


// let tek = 0;
// let cut = 0;

// const { Ask } = require('asfk');

// Ask([""]).then(([a]) => {
//     while (a > 9) {
//         a = parseInt(a / 10);
//         if (a % 2 == 0) {
//             cut++;
//             console.log(cut);
//         } else if (a % 2 == 1)
//             tek--;
//             console.log(tek);

//     }
// }
// );