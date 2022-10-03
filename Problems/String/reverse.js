function reverseString(str) {
  let revStr = '';
  for(let i = str.length; i > 0; i--) {
    revStr+= str[i-1];
  }
  return revStr;
}


console.log(rev('prashant'));
