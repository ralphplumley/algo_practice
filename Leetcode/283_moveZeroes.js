/*
Given an array nums, 
write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function(nums) {
  let index = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i]
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0
  }

  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
