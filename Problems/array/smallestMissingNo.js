/* Find smallest missing number from array of numbers */

// [1,2,5]

function smallestMissingNo(arr) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > arr.length) {
      continue;
    }
    arr[arr[i] - 1] = -arr[arr[i] - 1];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      return i + 1;
    }
  }
  return null;
}

console.log('result::',smallestMissingNo([1,2,5]));
