// Max ways to get change for given sum from set of 
// unlimited coins of provided denominations


function maxWaysToChange(coins, sum) {
    const dp = Array.from(new Array(coins.length + 1), () => []);
    for (let i = 0; i < coins.length + 1; i++) {
        for (let j = 0; j < sum  +1; j++) {
            if (j === 0) {
                dp[i][j] = 1;
            }
            if (i === 0 && j > 0) {
                dp[i][j] = 0;
            }
        }
    }

    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= sum; j++) {
            if (coins[i - 1] <= j) {
                dp[i][j] = dp[i][j - coins[i - 1]] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[coins.length][sum];
}


console.log(maxWaysToChange([1,2,3],5));  // 5 {1,1,1,1,1} {1,1,1,2} {1,2,2} {1,1,3}, {2,3}
console.log(maxWaysToChange([1,2,3],4));  // 4  {1,1,1,1} {1,1,2} {1,3} {2,2}
console.log(maxWaysToChange([10,20,50],99))  //  {10*10} {10*8, 20} {10*6, 20 * 2} {10 * 4, 20 * 3} {10 * 2, 20 * 4} {10 * 5, 50} {10 * 3, 20, 50} {10, 20 * 2, 50} {50 * 2} {20*5}