const { Ask } = require('asfk');
Ask(["", ""]).then(([n, arr]) => {
    n = parseInt(n);
    let arr2= []
    arr = arr.split(" ").map(Number);
    for (let i = 0; i < n; i++) {
        hasil = 1
        for (let j = 0; j < n; j++) {
            if (i != j ) {
                hasil *= arr[i][j]
            }
           
        };
        arr2.push(hasil)

    };
    console.log(matrix);
});
