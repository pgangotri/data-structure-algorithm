
function longestSubStrLength(str) {
  let hashMap = {};
  let currentWindow = 0;
  let maxLength = 0;
  const subStr = [];
  for(let i = 0; i < str.length; i++) {
    if (hashMap[str[i]]) {
      currentWindow = Math.max(hashMap[str[i]], currentWindow);
    }
    hashMap[str[i]] = i + 1;
    if ((i - currentWindow + 1) > maxLength) {
      subStr.push(str.substring(currentWindow, i+1 ))
    }
    maxLength = Math.max(maxLength, i - currentWindow + 1);
  }
  return { maxLength, subStr: subStr[subStr.length - 1] };
}

console.log(longestSubStrLength('prashantkumargangotri'));


// c = 0; { a: 2 } i = 6 l = 5  "prash"
// c = 2  { a: 5 }  i = 12  l = 7 "shantkum"
// c = 
