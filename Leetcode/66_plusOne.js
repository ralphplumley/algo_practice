/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

*/

var plusOne = function(digits) {
  debugger;

  // Attempt 2
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--)  {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } 
    // if we make it here, it means the digit is a 9
    // set it to 0 (we'll add a 1 in front down below)
    digits[i] = 0;
  }

  let newArray = new Array();
  for (var i = 0; i <= n; i++) {
    newArray.push(0);
  } 
  newArray[0] = 1;

  return newArray;

};

// let testArr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
let testArr = [1,1,9];
console.log(plusOne(testArr));


  // Attempt 1
  // let joined = digits.join('');
  // let joinedAsInt = parseInt(joined);
  // joinedAsInt = joinedAsInt + 1;
  // let asAString = joinedAsInt.toString();
  // let temp = asAString.split('');
  // let output = [];
  
  // temp.forEach(function(char) {
  //     return output.push(parseInt(char));
  // });
  // return output;