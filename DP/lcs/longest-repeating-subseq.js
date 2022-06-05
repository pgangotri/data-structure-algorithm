/**
 * Find length of longest repeating subsequence
 * @param {string} str 
 * @returns {number}
 */
function longestRepeatingSubSeqLength(str) {
    const t = Array.from(new Array(str.length + 1), () => []);
    for (let i = 0; i <= str.length; i++) {
        for (let j = 0; j <= str.length; j++) {
            if (i === 0 || j === 0) {
                t[i][j] = 0;
            } else if (str[i - 1] === str[j - 1] && i != j) {
                t[i][j] = 1 + t[i - 1][j - 1];
            } else {
                t[i][j] = Math.max(t[i - 1][j], t[i][j - 1]);
            }
        }
    }
    return t[str.length][str.length];
}

console.log(longestRepeatingSubSeqLength('abdcfaebdf'));