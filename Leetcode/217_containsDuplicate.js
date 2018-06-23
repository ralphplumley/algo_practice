/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Input: [1,2,3,1]
Output: true

Input: [1,2,3,4]
Output: false

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

var containsDuplicate = function(nums) {
  let cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in cache) {
      return true;
    } else {
      cache[nums[i]] = true;
    }
  }

  return false;
};

let arr = [1,2,3,4];
console.log(containsDuplicate(arr));

/*
one liner:
var containsDuplicate = (nums) => new Set(nums).size !== nums.length;

Create a new set using the input.
Check if the size of the set is the size of the array.

MDN:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/