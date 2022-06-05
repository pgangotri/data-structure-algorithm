/**
 * Get array of elements except index element
 * eg [2, 1, 3] => [3, 6, 2] 
 * @param {*} arr 
 * @param {*} n 
 */

function arrayProduct(arr, n) {
    const prod = Array.from(new Array(n), () => 1);

    let left = 1;

    for (let i = 0; i < n; i++) {
        prod[i] = left;
        left = left * arr[i];
    }

    console.log(arr, prod)
    let right = 1;

    for (let i = n - 1; i >= 0; i--) {
        prod[i] = right * prod[i];
        right *= arr[i]
    }
}


console.log(prod)




