function reducedString(str) {
  const tempArr = [];
  const length = str.length;
  for(let i = 0; i < length; i++) {
    if(tempArr[tempArr.length - 1] === str[i]) {
      tempArr.pop();
    } else {
      tempArr.push(str[i]);
    }
  }
  return tempArr.join('');
}

console.log(reducedString('abcac'));
