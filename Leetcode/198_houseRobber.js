/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint
stopping you from robbing each of them is that adjacent houses have security
system connected and it will automatically contact the police if two adjacent
houses were broken into on the same night.

Given a list of non-negative integers representing the amount of
money of each house, determine the maximum amount of money you can
rob tonight without alerting the police.
*/

/*
ex:
Input: [2,7,9,3,1]
Output: 12
*/

var rob = function(nums) {
  // Method 1:
  let even_sum = 0;
  let odd_sum = 0;

  for (var i =0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even_sum = Math.max(even_sum + nums[i], odd_sum);
    } else {
      odd_sum = Math.max(even_sum, odd_sum + nums[i]);
    }
  }

  return Math.max(even_sum, odd_sum);
};