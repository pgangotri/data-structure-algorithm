/**
 * Bubble sort: works by repeatedly swapping the adjacent elements
 * if they are in wrong order
 * Time complexity: Worst O(n2) best O(n)
 * @param arr
 * @return {*}
 */
function bubbleSort(arr) {
  let passCount = arr.length;
  let noSwap = true;
  for (let i = 0; i < passCount; i++) {
    for (let j = 0; j < passCount - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        noSwap = false;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (noSwap) break;  // Exit the loop if all the element
  }
  return arr;
}

console.log(bubbleSort([1,2,4,5]));
