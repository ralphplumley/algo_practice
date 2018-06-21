/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

ex1:
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

ex2:
Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/

// Idea 1: use Array.slice()
var rotate = function(nums, k) {
  debugger;  
  let back = nums.slice(0, nums.length - 1 - k);
  let front = nums.slice(nums.length - 1 - k, nums.length);
  // return front.concat(back);
  nums = front.concat(back);
};

// Idea 2: iterate through and place in a temp array 
var rotate = function(nums, k) {
  debugger;  
  let output = [];

  for (var i = 0; i < nums.length; i++) {
    if (i > k) {
      output[i-1-k] = nums[i];
    } else {
      output[i+k] = nums[i];
    }
  }
  return output;
};

// Idea 3: in place
var rotate = function(nums, k) {
  // debugger;
  let temp = [];

  for (var i = 0; i < nums.length; i++) {
    temp[(i+k) % nums.length] = nums[i]
  }

  for (var i = 0; i < nums.length; i++) {
    let dafuq = (i+k) % nums.length;
    nums[i] = temp[i];
  }
  // return nums;
}

// Idea 4: splice & unshift
var rotate = function(nums, k) {
  const beRotated = nums.splice((nums.length-k), k);
  nums.unshift(...beRotated);
};


rotate([1,2,3,4,5,6,7], 3);