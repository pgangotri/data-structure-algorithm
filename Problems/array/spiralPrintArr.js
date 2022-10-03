function spiralPrint(matrix) {
  let row = 0;
  let col = 0;
  let i = matrix.length;
  let j = matrix[0].length;
  let k;
  const arr = [];
  while (row < i && col < j) {
    for (k = col; k < j; k++) {
      arr.push(matrix[row][k]);
    }
    row++;
    for (k = row; k < i; k++) {
      arr.push(matrix[k][j -1])
    }
    j--;
    for(k = j - 1; k >= col; k--) {
      arr.push(matrix[i - 1][k]);
    }
    i--;
    for(k = i - 1; k >= row; k--) {
      arr.push(matrix[k][col]);
    }
    col++;
  }
  console.log(arr);
}

const matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
];

spiralPrint(matrix);
