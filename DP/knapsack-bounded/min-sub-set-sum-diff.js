// Find two sub set of given arr of num
// So that diff of their sum is minimum


function getSubSetSumTable(nums, sum) {
    const t = Array.from(new Array(nums.length + 1), () => [])
    for( let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= sum; j++) {
            if (j === 0) {
                t[i][j] = true;
            }
            if (i === 0 && j !== 0) {
                t[i][j] = false;
            }
        }
    }

    for (let i = 1; i < nums.length + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (nums[i - 1] <= j) {
                t[i][j] = t[i - 1][j - nums[i - 1]] || t[i - 1][j]
            } else {
                t[i][j] = t[i -1][j]
            }
        }
    }
    return t;
}

function minSubSetSumDiff(nums) {
    const maxSum = nums.reduce((sum, num) => (sum+num), 0);
    const midSum = Math.floor(maxSum / 2);
    const t = getSubSetSumTable(nums, midSum);

    console.table(t)

    let res = Number.POSITIVE_INFINITY;
    for (let i = 0; i <= midSum; i++) {
        if (t[nums.length][i]) {
            res = Math.min(res, (maxSum - (2 * i)))
        }
    }
    return res;
}

console.log(minSubSetSumDiff([1,2,7]))