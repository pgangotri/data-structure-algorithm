// Given a value, find min no of coin required to get value if
// we have infinite supply of coin

function minCoin(coins, val) {
    const dp = Array.from(new Array(coins.length + 1), () => []);
    for (let i = 0; i <= coins.length; i++) {
        for (let j = 0; j <= val; j++) {
            if (j === 0) {
                dp[i][j] = 0;    
            }

            if (i === 0) {
                dp[i][j] = Number.POSITIVE_INFINITY - 1;
            }
            if (i === 1) {
                if (j % coins[i - 1] === 0) {
                    dp[i][j] = j/coins[i - 1]
                } else {
                    dp[i][j] = Number.POSITIVE_INFINITY - 1;
                }
            }
        }
    }
    for (let i = 2; i <= coins.length; i++) {
        for (let j = 1; j <= val; j++) {
            if (coins[i - 1] <= j) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1);
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    console.table(dp)
}

minCoin([2,3], 6)

