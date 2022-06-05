/**
 * Print shortest common super sequence
 * e.g. str1 = 'abd' str2 = 'ade', scs = 'abde' [4]
 * @param {string} str1 
 * @param {string} str2 
 */
function findShortestCommonSuperSeqLength(str1, str2) {
    const l = str1.length, m = str2.length;
    const t = Array.from(new Array(l + 1), () => []);

    for (let i = 0; i <= l; i++) {
        for (let j = 0; j <= m; j++) {
            if (i === 0 || j === 0) {
                t[i][j] = 0;
            } else if (str1[i - 1] === str2[j - 1]) {
                t[i][j] = 1 + t[i - 1][j - 1];
            } else {
                t[i][j] = Math.max(t[i - 1][j], t[i][j - 1]);
            }
        }
    }

    let i = l, j = m;
    let res = '';
    while (i >= 1 && j >= 1) {
        if (str1[i - 1] === str2[j - 1]) {
            res = str1[i - 1] + res;
            i--;
            j--;
        } else if (t[i - 1][j] > t[i][j - 1]) {
            res = str1[i - 1] + res;
            i--;
        } else {
            res = str2[j - 1] + res;
            j--;
        }
    }

    while (i > 0) {
        res = str1[i - 1] + res;
        i--;
    }

    while(j > 0) {
        res = str2[j - 1] + res;
        j--;
    }

    return res;
}


console.log(findShortestCommonSuperSeqLength("abac", "cab")) // 'cabac'