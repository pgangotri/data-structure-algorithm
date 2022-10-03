/**
 * Verify if two strings are anagram
 */
function anagram(str1, str2) {
  const len1 = str1.length, len2 = str2.length;
  if (len1 !== len2) {
    return false;
  }
  let isAnagram = true;
  const lookupMap = {};
  for (let i = 0; i < len1; i++) {
    lookupMap[str1[i]] ? lookupMap[str1[i]] += 1 : lookupMap[str1[i]] = 1;
  }
  for (let j = 0; j < len2; j++) {
    if (!lookupMap[str2[j]]) {
      isAnagram = false;
      break;
    }
    lookupMap[str2[j]]--;
  }
  return isAnagram;
}

console.log(anagram('saras', 'arass'));
