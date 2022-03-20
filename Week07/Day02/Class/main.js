// const { Ask } = require("asfk");
// Ask(["", ""]).then(([arr, n]) => {
//     let count = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].toUpperCase() == n.toUpperCase()) {
    //         count++;
    //     }
    // }
//     console.log(count);
// })


function say(string,char) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char || string[i] == char.toUpperCase()) {
            count++;
        }
    }
    return count
}

console.log(say('Hello world', 'l')+1); 

