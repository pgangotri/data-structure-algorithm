/**
 * Linear search or sequential search is a method for finding a target
 * value within a list. It sequentially checks each element of the list
 * for the target value until a match is found or until all the elements
 * have been searched.
 * Time-complexity : worst/avg O(n) & best O(1)
 * @param {number[]|string[]} arr
 * @param {number|string} elem
 * @return {number}
 */
function linearSearch(arr, elem) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) return i;
  }
  return -1;
}

console.log(linearSearch([1,2,4,3,0], 0));
