/**
 * Min no of deletion required to make it palindromic
 * string
 * @param {string} str 
 */
function minDeletion(str) {
    const revStr = str.split('').reverse().join('');

    const t = Array.from(new Array(str.length + 1), () => []);

    for (let i = 0; i <= str.length; i++) {
        for (let j = 0; j <= revStr.length; j++) {
            if (i === 0 || j === 0) {
                t[i][j] = 0;
            } else if (str[i - 1] === revStr[j - 1]) {
                t[i][j] = 1 + t[i - 1][j - 1];
            } else {
                t[i][j] = Math.max(t[i - 1][j], t[i][j - 1]);
            }
        }
    }

    const subSeqLength = t[str.length][str.length];

    return str.length - subSeqLength;
}

console.log(minDeletion('asdaras')) // ans = 2