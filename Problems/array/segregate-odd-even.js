/**
 * Segregate odd and even nos in array
 * i.e move all even nos in array to beginning and odd nos to end of arr
 * [1,6,3,2,7,4] => [2, 4, 1, 3, 7]
 */
function segregateOddEven(arr) {
    let currP = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (currP === null) {
                const temp = arr[i];
                arr[i] = arr[0];
                arr[0] = temp;
                currP = 0;
            } else {
                const temp = arr[i];
                arr[i] = arr[currP + 1];
                arr[currP + 1] = temp;
                currP++;
            }
        }
    }
    return arr;
}

console.log(segregateOddEven([1,6,8,3,2,7,4]));