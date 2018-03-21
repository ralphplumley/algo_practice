// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i. 
// Solve it without using division and in O(n) time.
// For example, if our input was [1, 2, 3, 4, 5], 
//   the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

const products = function(nums) {
  p = 1;
  n = nums.length;
  result = [];

  for (var i = 0; i < n; i++) {
    result.push(p);
    p = p * nums[i];
  } 

  p = 1;
  for (var i = 0; i < n; i++) {
    result.push(p);
    p = p * nums[i];
  } 

}

const test = products([3, 2, 1]);
console.log(test);

// def products(nums):
//     p = 1
//     n = len(nums)
//     result = []
//     for i in range(0, n):
//         result.append(p)
//         p = p * nums[i]
//     p = 1
//     for i in range(n - 1, -1, -1):
//         result[i] = result[i] * p
//         p = p * nums[i]
//     return result