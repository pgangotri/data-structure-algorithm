/**
 * Picks an element as pivot and partitions the given array around the picked pivot
 * Time-complexity : avg: O(nlogn), worst: O(n^2)
 * Space complexity O(logn)
 * @param {Array} arr
 * @param {number} low
 * @param {number} high
 * @return {*}
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

/**
 * Selecting last elem as pivot
 * @param arr
 * @param low
 * @param high
 * @return {number}
 */
function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = pivot;
  arr[high] = temp;
  return i + 1;
}

/**
 * Selecting first elem as pivot
 * @param arr
 * @param low
 * @param high
 * @return {number}
 */
function firstElemAsPivot(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  for (let j = low + 1; j <= high; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
  return i;
}

console.log(quickSort([3,3,3,-9,-4,3,1]));
