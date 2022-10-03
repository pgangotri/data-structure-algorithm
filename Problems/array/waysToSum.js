
const combinationSum = function(candidates, target) {

  if (target<=0) return [];

  let ans = [];
  for (let i =0; i < candidates.length; i++) {
    if (candidates[i] == target){
      ans.push([candidates[i]]);
      continue;
    }
    combinationSum(candidates.splice(i),target-candidates[i]).forEach(v=>{
      ans.push([candidates[i]].concat(v));
    })
  }
  return ans;
};

function waysToSum(num, k) {
  const candidates = [];
  for (let i = 1; i <= k; i++) {
    candidates.push(i);
  }
  return combinationSum(candidates,num).length;
}

console.log('Ways to sum ::', waysToSum(3, 2));

