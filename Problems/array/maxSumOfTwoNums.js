function maxSumOfTwoNums(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    let num = arr[i];
    if (num >= max) {
      min = max;
      max = num;
    } else if (num > min && num < max) {
      min = num;
    }
  }
  return min + max;
}

console.log(maxSumOfTwoNums([19,19,2,10,4,2,7,20]));
