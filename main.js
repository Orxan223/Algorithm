    const { Ask } = require('asfk');

Ask(["", ""]).then(([n, arr]) => {
    n = parseInt(n);
    arr = arr.split(" ").map(Number);
    let arr1 = [];

    let larg = arr[0]
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i])


    }
    console.log(...arr1);

})