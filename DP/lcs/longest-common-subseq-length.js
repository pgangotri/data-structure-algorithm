function findLCSLength(s1, s2, l1, l2) {
    if (l1 === 0 || l2 === 0) {
        return 0;
    }
    if (s1[l1 - 1] === s2[l2 - 1]) {
        return 1 + findLCSLength(s1, s2, l1 - 1, l2 - 1)
    } else {
        return Math.max(findLCSLength(s1, s2, l1, l2 - 1), findLCSLength(s1, s2, l1 - 1, l2))
    }
}

console.log('Recurcive:', findLCSLength('afbcd', 'acdf', 5, 4));

// Using memoization
function findLCSLengthUsingMemoization(str1, str2) {
    const t = Array.from(Array(str1.length + 1), () => []);

    const getLCS = (s1, s2, l1, l2) => {
        if (l1 === 0 || l2 === 0) {
            return 0;
        }
        if (t[l1][l2]) {
            return t[l1][l2]
        }
        if (s1[l1 - 1] === s2[l2 - 1]) {
            t[l1][l2] = 1 + getLCS(s1, s2, l1 - 1, l2 - 1);
        } else {
            t[l1][l2] = Math.max(getLCS(s1, s2, l1 - 1, l2), getLCS(s1, s2, l1, l2 - 1));
        }
        return t[l1][l2];
    };

    return getLCS(str1, str2, str1.length, str2.length)
}


console.log('Memoization:', findLCSLengthUsingMemoization('abcd', 'adbcd', 4, 5));


// Top-down
function findLCSLengthUsingTopDown(x, y, l1, l2) {
    const t = Array.from(Array(l1 + 1), () => [])

    for (let i = 0; i <= l1; i++) {
        for (let j = 0; j <= l2; j++) {
            if (i === 0 || j === 0) {
                t[i][j] = 0;
            } else if (x[i - 1] === y[j - 1]) {
                t[i][j] = 1 + t[i - 1][j - 1];
            } else {
                t[i][j] = Math.max(t[i][j - 1], t[i - 1][j]);
            }
        }
    }

    // Print lcs

    let i = l1, j = l2, res = '';

    while (i > 0 && j > 0) {
        if (x[i - 1] === y[j - 1]) {
            res = x[i - 1] + res;
            i--;
            j--
        } else {
            if (t[i - 1][j] > t[i][j - 1]) {
                i--
            } else {
                j--
            }
        }
    }

    return { length: t[l1][l2], subSeq: res };
}

console.log('TopDown:', findLCSLengthUsingTopDown('sdwcr', 'qcwar', 5, 5))