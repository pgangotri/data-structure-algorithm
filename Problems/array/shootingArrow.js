function minArrayCount(newA) {
  const len = newA.length;
  if (!len) return 0;
  let count = 1;
  for(let i = 1; i < len; i++) {
    if ((newA[i-1] - newA[i]) > 1) {
      count++;
    } else if (newA[i-1] === newA[i]) {
      count++;
    }
  }
  return count;
}

console.log('count ::', minArrayCount([5,5,4,3,1]));

console.log(Math.min.apply([1,2,3,4]));

class Deck {
  static
}
