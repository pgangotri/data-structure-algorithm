/**
 * Merge sort exploit the fact, array with 0 or 1 element is already sorted
 * Time-complexity O(n*log(n))
 * Space-complexity O(n)
 * @param arr
 * @return {[]|*}
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let i = 0, j = 0;
  const mergedArr = [];
  while (i < arr1.length && j < arr2.length) {
    let a1 = arr1[i];
    let a2 = arr2[j];
    if (a1 < a2) {
      mergedArr.push(a1);
      i++;
    } else {
      mergedArr.push(a2);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
}

console.log(mergeSort([1,2,3,4,5,6,7,8]));
