// Given a rod of length n inches and an array of prices 
// that contains prices of all pieces of size smaller than n.
// Determine the  maximum value obtainable by cutting up the rod and selling the pieces. 


function maxProfit(pieces, prices, maxLength) {
    const dp = Array.from(Array(pieces.length + 1), () => [])
    for (let i = 0; i <= pieces.length; i++) {
        for (let j = 0; j <= maxLength; j++) {
            if (i === 0 && j > 0) {
                dp[i][j] = 0;
            } 
            if (j === 0) {
                dp[i][j] = 0;
            }
        }
    }
    for (let i = 1; i < pieces.length + 1; i++) {
        for (let j = 1; j < maxLength + 1; j++) {
            if (pieces[i - 1] <= j) {
                dp[i][j] = Math.max((prices[i - 1] + dp[i][j - pieces[i - 1]]), dp[i - 1][j])
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    console.table(dp)
    return dp[pieces.length][maxLength]
}


console.log('Max price to pay ::',maxProfit([1,2,3,4], [1,2,6,7], 9))