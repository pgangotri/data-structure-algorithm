function zeroAtEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }
  while (count < arr.length) {
    arr[count] = 0;
    count++
  }
  return arr;
}

console.log(zeroAtEnd([1,0,2,0,0,2,3,4]));
