var rotate = function(matrix) {
  // transpose
  for (let i = 0; i < matrix.length; i++) {
    let len = matrix.length
    for (let j = i; j < len; j++) {
      if (j !== i ) {
        let temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = temp
      }
    }
  }

  // reverse
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < Math.floor(matrix.length/2); j++) {
      let temp = matrix[i][matrix[i].length - 1 - j]
      matrix[i][matrix[i].length - 1 - j] = matrix[i][j]
      matrix[i][j] = temp
    }
  }
  return matrix
};

function swap(n, m) {

}

function print_matrix(matrix) {
  
}

function transpose_matrix(matrix) {

}

function flip_matrix(matrix) {

}

const matrix4x4 = [
  [ 1,2,3,4],
  [ 5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

const matrix5x5 = [
  [ 1,2,3,4,5],
  [ 6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]

const matrix6x6 = [
  [ 1,  2,  3,  4, 5, 6 ],
  [ 7,  8,  9, 10,11, 12],
  [13, 14, 15, 16,17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31,32,33,34, 35, 36]
]

console.log(rotate(matrix6x6))
