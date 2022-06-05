/**
 * Search a sorted array by repeatedly dividing the search interval
 * in half. Begin with an interval covering the whole array. If the value of the
 * search key is less than the item in the middle of the interval, narrow the interval
 * to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the
 * value is found or the interval is empty.
 * Worst/avg O(logn) best O(1)
 * @param {number[]} arr 
 * @param {number} elem 
 * @returns 
 */
const binarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  // Get the middle index of array
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== elem && start <= end) {
    // Check if specified value is in upper half
    if (arr[mid] < elem) {
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2)
  }
  return arr[mid] === elem ? mid : -1;
};

console.log(binarySearch([1,2,3,4], 4));
