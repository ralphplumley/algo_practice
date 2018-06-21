/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

EX:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

*/

var twoSum = function(nums, target) {
  let storage = {};

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] in storage) {
        return [storage[nums[i]], i];
      } else {
        storage[target - nums[i]] = i;
      }
  }

  throw "There's no solution!";
};

/*
I: array
O: tuple 
C: can't use same element twice
E: negative numbers? Yes. is it sorted? Yes

Idea 1: loop through array, current index subtract from target.  use index of to find that subtracted number. 
     Time complexity: O(N^2)

Idea 2: if sorter. have two pointers (beginning and end). add them and compare to target. if larger, move end pointer one to the left. if smaller, move beginning pointer to the right. 
    Ex: [5, 7, 9, 13, 14, 16, 18, 28, 59], target: 30 
    Time complexity: O(N) - worst. O(1) - best (beginning and end)
        nums.sort((a, b) => a - b);
    console.log('nums: ', nums)
    // create pointer vars (keeps track of indices)
    // while pointer vars are not equal 
        //if pointers sum is target
            // return points indices in tuple
        // if pointers sum is larger than target
            //change end pointer to the left one 
        // if pointer sum is smaller than target
            //change beginning pointer to the right one
    let beginning = 0;
    let end = nums.length - 1; 
    
    while (beginning !== end) {
        if (nums[beginning] + nums[end] === target) {
            return [beginning, end];
        } else if (nums[beginning] + nums[end] > target) {
            end--;
        } else if (nums[beginning] + nums[end] < target) {
            beginning++; 
        }
    }
    
    return null;
    
Idea 3: not sorted. 
    Ex: [3, 2, 4], target 6
    {
        3: 0,
        4: 1,
    }
    
*/

