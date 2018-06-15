// 136. Single Number
/* Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

ex:
Input: [2,2,1]
Output: 1

Input: [4,1,2,1,2]
Output: 4

*/

// Attempt 1
var singleNumber = function(nums) {
  nums = nums.sort();
  
  for (var i = 0; i < nums.length; i += 2) {
    if (i === nums.length - 1) {
      return nums[i];
    }

    if (nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }
};

// Attempt 2 - use bitwise (XOR) (60ms on leetcode)
var singleNumber = function(nums) {
  // debugger;
  let length = nums.length;

  if(length < 2) return nums[0];

  var res = 0;
  for (var i = 0; i < length; i++) {
    res ^= nums[i];
  }
  return res;
};

let foo = singleNumber([1,2,3,4,1,2,3]);
console.log(foo);

// Attempt 3 - use bitwise (XOR) and reduce (56ms on leetcode)
var singleNumber = function(nums) {
  return nums.reduce((acc, num) => {
    return acc ^ num;
  }, 0);
};

let foo = singleNumber([1,2,3,4,1,2,3]);
console.log(foo);
