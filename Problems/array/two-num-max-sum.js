//e.g [1,4,3,2,8] => 4 + 8 = 12
function twoNumMaxSum(arr) {
    let left = 0;
    let right = arr.length - 1;
    let sum = Number.NEGATIVE_INFINITY;
    while (left < right) {
        sum = Math.max(sum, arr[left] + arr[right]);

        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }
    return sum;
}

console.log(twoNumMaxSum([1,4,3,2,8,9]));


function findTwoLargestNum(arr) {
    let f = arr[0];
    let s = arr[1];
    if (f < s) {
        f = arr[1];
        s = arr[0];
    }
    for (let i = 2; i < arr.length; i++) {
        const num = arr[i];
        if (num < s) {
            continue;
        } else if (num >= s && num <= f) {
            s = num;
        } else {
            s = f;
            f = num;
        }
    }
    return { f, s };
}

console.log(findTwoLargestNum([1,4,3,2,8,9]));
