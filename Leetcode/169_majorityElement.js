/*

169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*/

var majorityElement = function(nums) {
  let hash = {};
  debugger;
  nums.forEach(function(element){
    if (hash[element]) {
      hash[element]++;
    } else {
      hash[element] = 1;
    }
  });

  let numsHalf = Math.ceil(nums.length / 2);
  for (key in hash) {
    let val = hash[key];
    if (val >= numsHalf) {
      return parseInt(key);
    }
  }
};

let testArr = [2,2];
console.log(majorityElement(testArr));