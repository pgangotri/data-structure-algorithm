
/**
 * Find min no of insertion/deletion required to make str1 
 * and str2 the same
 * @param {string} str1 
 * @param {string} str2 
 */
function minDistance(str1, str2) {
    const t = Array.from(new Array(str1.length + 1), () => []);

    for (let i = 0; i <= str1.length; i++) {
        for (let j  = 0; j <= str2.length; j++) {
            if (i === 0 || j === 0) {
                t[i][j] = 0;
            } else if (str1[i - 1] === str2[j - 1]) {
                t[i][j] = 1 + t[i - 1][j - 1];
            } else {
                t[i][j] = Math.max(t[i - 1][j], t[i][j - 1]);
            }
        }
    }

    const maxCommonSubSeqLength = t[str1.length][str2.length];

    return (str1.length - maxCommonSubSeqLength) + (str2.length - maxCommonSubSeqLength);
}


console.log(minDistance('afqcegs', 'acegs')); // ans = 4;