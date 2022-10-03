// input : 'loo la laaa loo';
// search: 'loo';
// output: 2

/**
 * O(n*m)
 * @param str
 * @param subStr
 * @return {number}
 */
function naiveStringSearch(str, subStr) {
  let count = 0;
  let strLength = str.length,
    subStrLength = subStr.length;
  if (subStrLength > strLength) return count;
  for (let i = 0; i < strLength; i++) {
    for (let j = 0; j < subStrLength; j++) {
      if (str[i + j] !== subStr[j]) break;
      if (j === subStrLength - 1) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch('loo la laa loo', 'l'));
