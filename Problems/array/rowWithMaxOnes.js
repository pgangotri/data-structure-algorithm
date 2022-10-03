/**
 * Find row with max 1's in boolean 2D array, where each row is sorted
 */


function findRowWithMaxOnes(matrix) {
  let rows = matrix.length;
  let columns = matrix[0].length;
  let maxRowIndex = 0;
  let maxCount = 0;
  for (let i = 0; i < rows; i++) {
    const index = getStartingIndexOfOne(matrix[i], 0, columns - 1);
    const onesCount = columns - index;
    if (maxCount < onesCount) {
      maxCount = onesCount;
      maxRowIndex = i;
    }
  }
  console.log(maxRowIndex, maxCount);
}

function getStartingIndexOfOne(arr, start = 0, end = arr.length - 1) {
  let mid = Math.floor((start + end) / 2);
  if ((mid === 0 || arr[mid - 1] === 0) && arr[mid] === 1) {
    return mid;
  } else if (arr[mid] === 0) {
    return getStartingIndexOfOne(arr, mid + 1, end);
  } else {
    return getStartingIndexOfOne(arr, 0, mid - 1);
  }
}

console.log(getStartingIndexOfOne([0,0,0,1]));

let matrix = [
  [0,0,1,1],
  [0,1,1,1],
  [0,0,0,1],
  [1,1,1,1],
];

// findRowWithMaxOnes(matrix);
