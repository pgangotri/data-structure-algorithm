
/**
 * Find count of subarray with equal no of odd and even nums
 * @param {number[]} arr array of positive numbers
 * @returns {number}
 */
function subArrayWithEqualOddEven(arr) {
    new String().length
    const a = arr.map((num) => (num % 2 === 0 ? 1 : -1));
    let ans = 0;
    let sum = 0;
    const map = { 0 : 1 };
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
        if (map[sum]) {
            ans += map[sum];
            map[sum] = map[sum] + 1;
        } else {
            map[sum] = 1;
        }
    }
    return ans;
}

console.log(subArrayWithEqualOddEven([3,2,5,1,6,8]));