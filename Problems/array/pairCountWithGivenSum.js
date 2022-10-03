const a = [1,5,3,2,4,3,7];
const sum = 6;

function pairCount(arr, sum) {
  let length = arr.length;
  let map = {};
  for (let i = 0; i < length; i++) {
    map[arr[i]] ? map[arr[i]]++ : map[arr[i]] = 1;
  }
  let pairs = 0;
  for (let i = 0; i < length; i++) {
    if (map[sum - arr[i]]) {
      pairs += map[sum - arr[i]];
    }
    if ((sum - arr[i]) === arr[i]) {
      pairs--;
    }
  }
  console.log(map, pairs/2);
}


pairCount(a, sum);
