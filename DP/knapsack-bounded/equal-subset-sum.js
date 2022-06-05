const subSetSum2 = require('./subset-sum');
// Find if it is possiblr to get divide array of nums
// into 2 sub set with therir sum equal
// eg: nums: [1,3,2,6] output: true {{1,3,2},{6}}
// eg: nums: [5,4,3,6,2,16] output: true {{5,4,3,6},{2,16}}


function equalSubSetSum(nums, n) {
    const totalSum = nums.reduce((sum, num) => (sum = sum + num), 0);
    if (totalSum % 2 !== 0) {
        return false
    }
    return subSetSum2(nums, (totalSum / 2), n)
}


console.log('Is Partition possible ?', equalSubSetSum([5,4,3,6,2,16], 4))