// eg: [2,1,4,3,5] => 

function is132PatternSubsequence(arr) {
    const mStack = [];
    let sMax = Number.NEGATIVE_INFINITY;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < sMax) {
            return true;
        }

        while(mStack.length && arr[i] > mStack[mStack.length - 1]) {
            sMax = Math.max(sMax, mStack.pop());
        }
        mStack.push(arr[i])
    }

    return false;
}


console.log(is132PatternSubsequence([2,1,4,3,5]));