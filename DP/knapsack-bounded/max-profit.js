// wt [2,1,3,4]
// val [3,1,5,0]
// cap 4
// output: 6

// Max/min profit for given inputs of wt and corresponding val
// with choosing contraints 


// Method 1: Using recursion with memoization
const map = {};

function knapSack(wts, vals, cap, n) {
    if (n === 0 || cap === 0) {
        return 0;
    }

    if (map[`${cap}${n}`]) {
        return map[`${cap}${n}`]
    }

    if (wts[n - 1] <= cap) {
        map[`${cap}${n}`] = Math.max(vals[n - 1] + knapSack(wts, vals, cap - wts[n - 1], n - 1), knapSack(wts, vals, cap, n - 1))
        return map[`${cap}${n}`]
    } else {
        map[`${cap}${n}`] = knapSack(wts, vals, cap, n - 1);
        return map[`${cap}${n}`];
    }
}


// Method 2: Top down approach

function findMaxVal(wts, vals, cap, n) {
    const topDown = [];
    for (let i =0; i <= n; i++) {
        topDown.push([]);
        topDown[i][0] = 0
    }
    for (j = 0; j <= cap; j++) {
        topDown[0][j] = 0;
    }
    for (i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (wts[i - 1] <= j) {
                topDown[i][j] = Math.max(vals[i - 1] + topDown[i-1][j - wts[i - 1]], topDown[i - 1][j])
            } else {
                topDown[i][j] = topDown[i - 1][j]
            }
        }
    }
    console.table(topDown)
}


const maxVal = findMaxVal([0,1], [0,0], 1, 2);

console.log(maxVal);