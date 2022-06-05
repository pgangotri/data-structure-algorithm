function trappedWater(arr) {
    if (arr.lenght <= 2) {
        return 0;
    }
    const lMax = [arr[0]];
    for (let i = 1; i< arr.length; i++) {
        const currMax = Math.max(lMax[lMax.length - 1], arr[i]) 
        lMax.push(currMax);
    }

    const rMax = [arr[arr.length - 1]];
    for (let j = arr.length - 2; j >= 0; j--) {
        const currMax = Math.max(rMax[rMax.length - 1], arr[j]) 
        rMax.push(currMax);
    }

    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += Math.min(lMax[i], rMax[rMax.length - 1 - i]) - arr[i];
    }
    return res;
}

function trappedWater2(arr) {
    let res = 0;
    let lMax = Number.NEGATIVE_INFINITY;
    let rMax = Number.NEGATIVE_INFINITY;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        lMax = Math.max(lMax, arr[left]);
        rMax = Math.max(rMax, arr[right]);
        if (lMax > rMax) {
            res = res + rMax - arr[right];
            right--;
        } else {
            res = res + lMax - arr[left];
            left++;
        }
    }
    return res;
}

console.log(trappedWater2([4, 2, 0, 3, 2, 5])) // ans: 9
console.log(trappedWater([0,1,0,2,1,0,1,3,2,1,2,1]))  // ans: 6