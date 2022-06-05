// Count all possible combinations such that by adding prefix +/- to each element
// result sum of the arr equals to target sum

const findSubSetDiffCount = require('./sub-set-sum-diff-count');

const possibleCombinationCounts = (nums, sum) => {
    return findSubSetDiffCount(nums, sum);
}

console.log(findSubSetDiffCount([1,1,2,3], 1));