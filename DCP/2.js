// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i. 

// Solve it without using division and in O(n) time.

// For example, if our input was [1, 2, 3, 4, 5], 
//   the expected output would be [120, 60, 40, 30, 24].

// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

const products = function(nums) {

  let prefix_products = [];

  for (var i = 0; i < nums.length; i++) {
    if (i !== 0) {
      prefix_products.push(prefix_products[prefix_products.length-1] * nums[i]);
    } else {
      prefix_products.push(nums[i])
    }
  }

  let reversed = [];
  for (var i = 0;i < nums.length; i++) {
    reversed.unshift(nums[i])
  }

  let suffix_products = [];
  for (var i = 0; i < reversed.length; i++) {
    if (i !== 0) {

      suffix_products.push(suffix_products[suffix_products.length-1] * reversed[i]);
      
    } else {
      suffix_products.push(reversed[i])
    }
  }
  
  suffix_products.reverse();

  // Generate result
  let result = [];
  for (var i = 0; i < nums.length; i++) {
    if (i === 0) {
      result.push(suffix_products[i+1]);
    } else if (i === nums.length -1) {
      result.push(prefix_products[i -1]);
    } else {
      result.push(prefix_products[i-1] * suffix_products[i+1]);
    }
  }

  return result;

}

const test = products([1,2,3,4,5]);
console.log(test);
