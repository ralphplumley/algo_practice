function rotateImage(arr) {
    debugger;
    // Transpose
    for(var row = 0;row<arr.length;row++){
        for(var col = 0;col<row;col++){
            // Switch a[row][col] and a[col][row] 
            // With XOR swap
            arr[row][col] ^= arr[col][row]
            arr[col][row] ^= arr[row][col]
            arr[row][col] ^= arr[col][row]
         }
    }
    
    // Reverse columns
    for(var row in arr){
        arr[row] = arr[row].reverse()
    }
    
    return arr
}

let arr = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
console.log(rotateImage(arr));