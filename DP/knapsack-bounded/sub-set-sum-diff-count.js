// Find count of subsets with diff of 
// their sum equals to given no


// t1: s1 + s2 = tSum
// t2: s1 - s2 = diff

// t1 + t2 : 2s1 = tSum + diff => s1 = (tSum + num)/2

const subSetSumCount = require('./sub-set-sum-count');

const findSubSetDiffCount = (nums, diff) => {
    const totalSum = nums.reduce((sum, num) => (sum + num), 0)
    if ((totalSum - diff) % 2 !== 0) {
        return 0;
    }
    return subSetSumCount(nums, (totalSum + diff) / 2)
}

module.exports = findSubSetDiffCount

console.log(findSubSetDiffCount([1,2,3], 2))
console.log(findSubSetDiffCount([1,2,3], 1))
console.log(findSubSetDiffCount([1, 2, 3, 4], 2))
console.log(findSubSetDiffCount([1, 1, 2, 3], 1))