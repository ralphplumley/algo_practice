function sudoku2(grid) {
  // Check Rows
  for (var row = 0; row < grid.length; row++) {
    if (!checkArr(grid[row])) {
      return false;
    }
  }

  // Check Columns
  for (var col = 0; col < grid.length; col++) {
    let colToCheck = [];
    
    for (var row = 0; row < grid.length; row++) {
      colToCheck.push(grid[row][col]);
    }

    if (!checkArr(colToCheck)) {
      return false;
    }

  }

  // Check Box
  for (var row = 0; row < grid.length; row += 3) {
    
    for (var col = 0; col < grid.length; col += 3) {
      let boxNumsToCheck = [];

      boxNumsToCheck.push(grid[row][col]);
      boxNumsToCheck.push(grid[row][col + 1]);
      boxNumsToCheck.push(grid[row][col + 2]);

      boxNumsToCheck.push(grid[row + 1][col]);
      boxNumsToCheck.push(grid[row + 1][col + 1]);
      boxNumsToCheck.push(grid[row + 1][col + 2]);

      boxNumsToCheck.push(grid[row + 2][col]);
      boxNumsToCheck.push(grid[row + 2][col + 1]);
      boxNumsToCheck.push(grid[row + 2][col + 2]);

      if (!checkArr(boxNumsToCheck)) {
        return false;
      }
    }

  }

  return true;

}

// Helper functions
let checkArr = function(arr) {
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


let testGrid2 = [
['2', '.', '.', '.', '1', '.', '.', '9', '.'],
['7', '2', '.', '.', '6', '.', '.', '.', '.'],
['.', '1', '.', '.', '4', '5', '.', '.', '.'],
['.', '7', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '8', '3', '.', '.', '.'],
['.', '.', '8', '.', '.', '7', '.', '6', '.'],
['.', '.', '.', '.', '.', '2', '.', '.', '.'],
['.', '.', '.', '2', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '3', '.', '.', '.', '.']
] //-> FALSE

console.log(sudoku2(testGrid1));