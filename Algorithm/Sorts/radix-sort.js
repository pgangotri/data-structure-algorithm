/**
 * Radix sort works for numbers
 * sort starting from least significant digit to most significant digit
 * Time-complexity best: O(nk), avg: O(nk), worst: O(nk) [n = num in arr, k = max digit count]
 * Space-complexity O(n+k)
 * @param {number[]} arr
 * @return {*}
 */
function radixSort(arr) {
  const maxDigitCount = maxDigit(arr);
  for (let i = 0; i < maxDigitCount; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      bucket[digit].push(arr[j]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / 10**place) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigit(nums) {
  return nums.reduce((maxDigit, num) => Math.max(maxDigit, digitCount(num)), 0)
}

console.log(radixSort([9,23,45]));
