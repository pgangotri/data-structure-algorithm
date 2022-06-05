// For given array find if any subset possible 
// with sum equal to privided sum
// eg: nums: [1,3,2,6] sum: 6 output: true
// eg: nums: [1,3,2,6] sum: 13 output: false


// Method 1 (using recursion)
function subSetSum1(nums, sum, n) {
    if (sum === 0) {
        return true;
    }
    if (n === 0 && sum > 0) {
        return false;
    }
    if (nums[n - 1] <= sum) {
        return subSetSum1(nums, sum - nums[n - 1], n - 1) || subSetSum1(nums, sum, n - 1);
    } else {
        return subSetSum1(nums, sum, n - 1);
    }
}


// Method 2 (Using top-down approach)
function subSetSum2(nums, sum) {
    const t = Array.from(new Array(nums.length + 1), () => [])

    for (let i = 0; i < nums.length + 1; i++) {
        for (let j = 0; j < sum + 1; j++) {
            if (j === 0) {
                t[i][j] = true;
            } else if (i === 0 && j !== 0) {
                t[i][j] = false;
            }
            else if (nums[i - 1] <= j) {
                t[i][j] = t[i - 1][j - nums[i - 1]] || t[i - 1][j]
            } else {
                t[i][j] = t[i -1][j]
            }
        }
    }
    return t[nums.length][sum];
}

console.log(subSetSum1([1,2,3,1], 6, 4));  // true
console.log(subSetSum2([1,2,3,1], 8, 4));  // false

module.exports = subSetSum2;