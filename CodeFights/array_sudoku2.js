function sudoku2(grid) {

  // Check rows first
  for (var row = 0; row < grid.length; row++) {
    if (!checkNums(grid[i])) {
      return false;
    }
  }

  // Check columns && box
  for (var col = 0; col < grid.length; col++) {
    let tempColArr = [];
    let tempBoxArr = [];

    for (var row = 0; row < grid.length; row++) {
      // to setup tempColArr
      let curr = grid[col][row];
      tempColArr.push(curr);

      // to setup tempBoxArr
      if (
         (row === 0 && col === 0)
      || (row === 0 && col === 3)
      || (row === 0 && col === 6)
      || (row === 3 && col === 0)
      || (row === 3 && col === 3)
      || (row === 3 && col === 6)
      || (row === 6 && col === 0)
      || (row === 6 && col === 3)
      || (row === 6 && col === 6)
      ) {
        tempBoxArr.push(grid[col][row]);
      }
    }
    if (!checkNums(tempColArr) || !checkNums(tempBoxArr)) {
      return false;
    }
  }
}

// Helper function
let checkNums = function(arr) {
  let numHash = {};
  
  for (var i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (numHash[curr] && curr !== ".") {
      return false;
    } else {
      numHash[curr] = 1;
    }
  }

  return true;
}


let testGrid1 = [
  ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
  ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
  ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
  ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '7', '.']
]; //-> TRUE

console.log(sudoku2(testGrid1));

let testGrid2 = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']] //-> FALSE