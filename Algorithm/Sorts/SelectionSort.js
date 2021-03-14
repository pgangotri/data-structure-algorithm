/**
 * finding the minimum element (considering ascending order)
 * from unsorted part and putting it at the beginning
 * Time complexity : O(n2)
 * @param arr
 * @return {*}
 */
function selectionSort(arr) {
  const passCount = arr.length;
  for (let i = 0; i < passCount; i++) {
    let minIndex = i;
    for (let j = i + 1; j < passCount; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;  // find index of min value in each pass
      }
    }
    if (i !== minIndex) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([9,2,6,1,5]));
