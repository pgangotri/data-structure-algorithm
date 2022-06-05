
/**
 * Find length of longest palindromic sub-sequence
 * @param {string} str 
 */
function longestPalindromicSubsequence(str) {
    const str2 = str.split('').reverse().join('');

    const t = Array.from(new Array(str.length + 1), () => []);

    for (let i = 0; i <= str.length; i++) {
        for (let j  = 0; j <= str2.length; j++) {
            if (i === 0 || j === 0) {
                t[i][j] = 0;
            } else if (str[i - 1] === str2[j - 1]) {
                t[i][j] = 1 + t[i - 1][j - 1];
            } else {
                t[i][j] = Math.max(t[i - 1][j], t[i][j - 1]);
            }
        }
    }

    return t[str.length][str2.length];
}

console.log(longestPalindromicSubsequence('ksardafskk')); // ans = 5