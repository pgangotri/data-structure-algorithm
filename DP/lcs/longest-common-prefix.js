function findLongestCommonPrefix(strings) {
    const count = strings.length;
    if (count === 0) {
        return '';
    }
    if (count === 1) {
        return strings[0]
    }
    let maxIdx = 0;
    while(true) {
        for (let i = 1; i < count; i++) {
            if (maxIdx >= strings[i - 1].length || maxIdx >= strings[i].length || strings[i - 1][maxIdx] !== strings[i][maxIdx]) {
                return strings[0].substring(0, maxIdx)
            }
        }
        maxIdx++;
    }
    return strings[0].substring(0, maxIdx);
}


console.log(findLongestCommonPrefix(['abcd', 'abcdd', 'abcde']))