/**
 * check if a string is palindrome
 */
function palindrome(str) {
  if (!str) {
    return false;
  }
  const length = str.length;
  let isPalindrome = true;
  for (let i = 0; i < length/2; i++) {
    if (str[i] !== str[length - i - 1]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}

console.log(palindrome('qmkmq'));

function longestPalindromicSubStr(str) {
  const len = str.length;
  let longestSubStr = '';
  for(let i = 0; i < len - 1; i++) {
    for(let j = i + 1; j < len; j++) {
      const subStr = str.substring(i, j + 1);
      if (palindrome(subStr)) {
        longestSubStr = longestSubStr.length >= subStr.length ? longestSubStr : subStr;
      }
    }
  }
  return longestSubStr;
}

console.log(longestPalindromicSubStr('pasaras'));
