/*

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

*/

var intersect = function(nums1, nums2) {
  // store elements from nums 1 into a dict / obj
  // iterate through nums 2
    // if found in dict
      // store element in output array
      // decrement element from dict

  // return output

  // time: O(m+n)
  // space: O(n)
  // debugger;
  let dict = {};
  for (var i = 0; i < nums1.length; i++) {
    if(dict[nums1[i]]) {
      dict[nums1[i]]++
    } else {
      dict[nums1[i]] = 1;
    }
  }

  let output = [];
  for (var j = 0; j < nums2.length; j++) {
    if(dict[nums2[j]]) {
      output.push(nums2[j]);
      dict[nums2[j]] -= 1;
    }
  }

  return output;
};


let nums1 = [-2147483648,1,2,3]
let nums2 = [1,-2147483648,-2147483648]

let test = intersect(nums1, nums2);
console.log(test);
