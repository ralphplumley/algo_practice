/*
https://www.hackerrank.com/challenges/2d-array/problem?h_l=playlist&slugs%5B%5D=interview&slugs%5B%5D=interview-preparation-kit&slugs%5B%5D=arrays
*/

function hourglassSum(arr) {
  // debugger;
  let max_hourglass_sum = -63;
  let current_hourglass_sum;

  for (var i = 1; i < 5; i++) {
    for (var j = 1; j < 5; j++) {
      current_hourglass_sum = get_hourglass_sum(arr, i, j);

      if (current_hourglass_sum > max_hourglass_sum) {
        max_hourglass_sum = current_hourglass_sum;
      }
    }

  }

  return max_hourglass_sum;
}

function get_hourglass_sum(matrix, row, col) {
  let sum = 0;
  sum += matrix[row-1][col-1];
  sum += matrix[row-1][col];
  sum += matrix[row-1][col+1];
  sum += matrix[row][col];
  sum += matrix[row+1][col-1];
  sum += matrix[row+1][col];
  sum += matrix[row+1][col+1];

  return sum;
}

let arr = [[1, 1, 1, 0, 0, 0],[0, 1, 0, 0, 0, 0],[1, 1, 1, 0, 0, 0],[0, 9, 2, -4, -4, 0],[0, 0, 0, -2, 0, 0],[0, 0, -1, -2, -4, 0]];

console.log(hourglassSum(arr));
