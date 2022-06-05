// Count all subsets of the given array 
// with a sum equal to a given sum

function subSetSumCount(nums, sum) {
    const t = Array.from(Array(nums.length + 1), () => []);
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= sum; j++) {
            if (j === 0) {
                t[i][j] = 1;
            }
            if (i === 0 && j !== 0) {
                t[i][j] = 0;
            }
        }
    }
    
    for (let i = 1; i < nums.length + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (nums[i - 1] <= j) {
                t[i][j] = t[i - 1][j] + t[i - 1][j - nums[i - 1]]
            } else {
                t[i][j] = t[i - 1][j]
            }
        }
    }

    return t[nums.length][sum]
}

subSetSumCount([1,2,3,4], 6);


function subSetSumCount2(nums, sum, n, res) {
    if (n === 0 && sum > 0) {
        return 0;
    } 
    if (sum === 0) {
        return 1
    }
    if (nums[n - 1] <= sum) {
        return subSetSumCount2(nums, sum - nums[n - 1], n - 1) + subSetSumCount2(nums, sum, n - 1);
    } else {
        return subSetSumCount2(nums, sum, n - 1)
    }
}

// console.log(subSetSumCount2([2,3,5,6,8,10], 10, 6));

module.exports = subSetSumCount;

