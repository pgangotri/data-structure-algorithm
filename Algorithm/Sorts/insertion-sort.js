/**
 * Worst O(n2) best O(n)
 * Pick one elem starting from index 1 and put it sorted side of arr accordingly
 * @param arr
 * @return {*}
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currElem = arr[i];
    let minIndex = -1;
    for (let j = i - 1; j >= 0 && arr[j] > currElem; j--) {
      minIndex = j;
      arr[j + 1] = arr[j];
    }
    if (minIndex >= 0) {
      arr[minIndex] = currElem;
    }
  }
  return arr;
}

console.log(insertionSort([3,6,1,34,2]));
