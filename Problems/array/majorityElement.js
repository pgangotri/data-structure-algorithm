function majorityElement(arr) {
  const len = arr.length;
  let majIndex = 0, count = 1;
  for (let i = 1; i < len; i++) {
    if (arr[majIndex] === arr[i]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      majIndex = i;
      count = 1;
    }
  }
  return isMajority(arr, arr[majIndex]);
}

function isMajority(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count > (arr.length / 2) ? num : 'No majority element';
}

console.log(majorityElement([3,3,3,3,4,4,2]));
