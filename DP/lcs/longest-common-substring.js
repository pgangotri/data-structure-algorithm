/**
 * 
 * @param {string1} x 
 * @param {sring2} y 
 * @param {x length} l1 
 * @param {y length} l2 
 */
function findLongestCommonSubString(x, y, l1, l2) {
    const t = Array.from(Array(l1 + 1), () => [])

    let length = 0;
    let str = '';

    for (let i = 0; i <= l1; i++) {
        for (let j = 0; j <= l2; j++) {
            if (i === 0 || j === 0) {
                t[i][j] = 0;
            }
            else if (x[i - 1] === y[j - 1]) {
                t[i][j] = 1 + t[i - 1][j - 1];
                length = Math.max(length, t[i][j])
            } else {
                t[i][j] = 0;
            }
        }
    }

    let i = l1, j = l2, subStr = '', temp = '';

    while (i > 0 && j > 0) {
        if (x[i - 1] === y[j - 1]) {
            temp = x[i - 1] + temp;
            i--;
            j--;
        } else {
            if (temp.length > subStr.length) {
                subStr = temp;
            }
            temp = '';
            if (t[i - 1][j] > t[i][j - 1]) {
                i--
            } else {
                j--
            }
        }
    }

    return { length, subStr };
}

console.log(findLongestCommonSubString('asdfhg', 'adfhg', 6, 5))