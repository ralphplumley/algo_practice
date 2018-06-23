/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.
*/

var canJump = function(nums) {
  // debugger;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) {
      return false;
    } 
    max = Math.max(nums[i] + 1, max);
  }  
  return true;
};

let arr = [2,3,1,1,4];
let falseArr = [3,2,1,0,4];
console.log(canJump(falseArr));
